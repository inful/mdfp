// Package mdfp provides functionality for calculating and managing
// content-based fingerprints in markdown files with frontmatter.
package mdfp

import (
	"bytes"
	"crypto/sha256"
	"encoding/hex"
	"errors"
	"fmt"
	"io"
	"strings"

	"github.com/inful/mdfm"
)

// FrontmatterDelimiter is the delimiter used for YAML frontmatter.
const FrontmatterDelimiter = "---"

// FingerprintField is the field name used in frontmatter for the fingerprint.
const FingerprintField = "fingerprint"

var (
	openingDelimiterLF   = []byte(FrontmatterDelimiter + "\n")
	openingDelimiterCRLF = []byte(FrontmatterDelimiter + "\r\n")
	closingDelimiterLF   = []byte("\n" + FrontmatterDelimiter + "\n")
	closingDelimiterCRLF = []byte("\r\n" + FrontmatterDelimiter + "\r\n")
)

// ParseMarkdown extracts the frontmatter and content from a markdown file.
func ParseMarkdown(content string) (frontmatter string, body string, err error) {
	contentBytes := []byte(content)
	doc, err := mdfm.Parse(contentBytes)
	if err != nil {
		return "", "", err
	}

	if !doc.HasFrontmatter() {
		return "", content, nil
	}

	frontmatterBytes, bodyBytes, err := extractFrontmatterAndBodyBytes(contentBytes)
	if err != nil {
		return "", "", err
	}

	return string(frontmatterBytes), string(bodyBytes), nil
}

// CalculateFingerprint computes a SHA256 hash of the content
// Note: SHA256 is hardware-accelerated on most platforms and faster than pure-Go BLAKE3.
// For non-cryptographic use cases where speed is critical, this can be swapped with BLAKE3
// by importing "github.com/zeebo/blake3" and using blake3.Sum256() instead.
func CalculateFingerprint(content string) string {
	return calculateFingerprintBytes([]byte(content))
}

// CalculateFingerprintFromParts computes the fingerprint for a document represented
// by its parsed parts.
//
// If frontmatter is empty, this hashes body as-is.
// Otherwise it hashes the canonical virtual document:
//
//	---\n{RemoveFingerprintFromFrontmatter(frontmatter)}\n---\n{body}
//
// Note: this is hashing-input canonicalization only; it does not trim or otherwise
// normalize body/frontmatter beyond removing the fingerprint field.
func CalculateFingerprintFromParts(frontmatter, body string) string {
	if frontmatter == "" {
		return CalculateFingerprint(body)
	}

	frontmatterWithoutFingerprint := RemoveFingerprintFromFrontmatter(frontmatter)

	h := sha256.New()
	_, _ = io.WriteString(h, FrontmatterDelimiter)
	_, _ = io.WriteString(h, "\n")
	_, _ = io.WriteString(h, frontmatterWithoutFingerprint)
	_, _ = io.WriteString(h, "\n")
	_, _ = io.WriteString(h, FrontmatterDelimiter)
	_, _ = io.WriteString(h, "\n")
	_, _ = io.WriteString(h, body)

	return hex.EncodeToString(h.Sum(nil))
}

// CalculateFingerprintReader computes a SHA256 hash from an io.Reader (streaming).
// This is memory-efficient for large content as it processes data in chunks.
func CalculateFingerprintReader(r io.Reader) (string, error) {
	h := sha256.New()
	if _, err := io.Copy(h, r); err != nil {
		return "", err
	}
	return hex.EncodeToString(h.Sum(nil)), nil
}

// RemoveFingerprintFromFrontmatter removes any existing fingerprint field.
func RemoveFingerprintFromFrontmatter(frontmatter string) string {
	if frontmatter == "" {
		return ""
	}
	hadTrailingNewline := strings.HasSuffix(frontmatter, "\n")

	updated, err := mutateFrontmatter(frontmatter, func(doc *mdfm.Document) error {
		_, err := doc.Delete(FingerprintField)
		return err
	})
	if err != nil {
		return frontmatter
	}

	if updated != "" && hadTrailingNewline {
		return updated + "\n"
	}

	return updated
}

// AddFingerprintToFrontmatter adds a fingerprint field to the frontmatter.
func AddFingerprintToFrontmatter(frontmatter, fingerprint string) string {
	updated, err := mutateFrontmatter(frontmatter, func(doc *mdfm.Document) error {
		return doc.SetString(FingerprintField, fingerprint)
	})
	if err != nil {
		return frontmatter
	}

	return strings.TrimRight(updated, "\n") + "\n"
}

// ProcessContent processes markdown content and adds/updates fingerprint.
func ProcessContent(content string) (string, error) {
	doc, err := mdfm.ParseString(content)
	if err != nil {
		return "", err
	}

	if err = setDocumentFingerprint(doc); err != nil {
		return "", err
	}

	updatedBytes, err := doc.Bytes()
	if err != nil {
		return "", err
	}

	return string(updatedBytes), nil
}

// ProcessFile reads a markdown file, adds/updates fingerprint, and writes it back.
func ProcessFile(filepath string) error {
	err := mdfm.UpdateFile(filepath, setDocumentFingerprint)
	if err != nil {
		return mapProcessFileError(err)
	}

	return nil
}

// VerifyFingerprint checks if the fingerprint in the file matches the content.
func VerifyFingerprint(content string) (bool, error) {
	doc, err := mdfm.Parse([]byte(content))
	if err != nil {
		return false, err
	}

	currentFingerprint, ok, err := doc.GetString(FingerprintField)
	if err != nil {
		return false, err
	}
	if !ok || currentFingerprint == "" {
		return false, errors.New("no fingerprint found in frontmatter")
	}

	expectedFingerprint := calculateFingerprintBytes(doc.Body())
	return currentFingerprint == expectedFingerprint, nil
}

func setDocumentFingerprint(doc *mdfm.Document) error {
	return doc.SetString(FingerprintField, calculateFingerprintBytes(doc.Body()))
}

func calculateFingerprintBytes(content []byte) string {
	hash := sha256.Sum256(content)
	return hex.EncodeToString(hash[:])
}

func mapProcessFileError(err error) error {
	message := err.Error()

	switch {
	case strings.HasPrefix(message, "failed to stat file:"), strings.HasPrefix(message, "failed to read file:"):
		return fmt.Errorf("failed to read file: %w", err)
	case strings.HasPrefix(message, "failed to parse markdown:"), strings.HasPrefix(message, "failed to mutate document:"):
		return fmt.Errorf("failed to process content: %w", err)
	case strings.HasPrefix(message, "failed to write file:"):
		return fmt.Errorf("failed to write file: %w", err)
	default:
		return err
	}
}

func mutateFrontmatter(frontmatter string, mutate func(*mdfm.Document) error) (string, error) {
	trimmed := strings.TrimRight(frontmatter, "\n")
	content := FrontmatterDelimiter + "\n" + trimmed + "\n" + FrontmatterDelimiter + "\n"

	doc, err := mdfm.ParseString(content)
	if err != nil {
		return "", err
	}

	if err = mutate(doc); err != nil {
		return "", err
	}

	return frontmatterWithoutDelimiters(doc)
}

func frontmatterWithoutDelimiters(doc *mdfm.Document) (string, error) {
	serialized, err := doc.Bytes()
	if err != nil {
		return "", err
	}

	frontmatter, err := extractFrontmatterBytes(serialized)
	if err != nil {
		return "", err
	}

	return string(frontmatter), nil
}

func extractFrontmatterBytes(content []byte) ([]byte, error) {
	frontmatter, _, err := extractFrontmatterAndBodyBytes(content)
	if err != nil {
		return nil, err
	}

	return frontmatter, nil
}

func extractFrontmatterAndBodyBytes(content []byte) ([]byte, []byte, error) {
	var (
		start   int
		closing []byte
		empty   []byte
	)

	switch {
	case bytes.HasPrefix(content, openingDelimiterCRLF):
		start = len(openingDelimiterCRLF)
		closing = closingDelimiterCRLF
		empty = openingDelimiterCRLF
	case bytes.HasPrefix(content, openingDelimiterLF):
		start = len(openingDelimiterLF)
		closing = closingDelimiterLF
		empty = openingDelimiterLF
	default:
		return nil, nil, errors.New("serialized document missing frontmatter opening delimiter")
	}

	if bytes.HasPrefix(content[start:], empty) {
		return nil, content[start+len(empty):], nil
	}

	idx := bytes.Index(content[start:], closing)
	if idx == -1 {
		return nil, nil, errors.New("serialized document missing frontmatter closing delimiter")
	}

	end := start + idx
	bodyStart := end + len(closing)

	return content[start:end], content[bodyStart:], nil
}
