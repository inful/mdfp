// Package mdfp provides functionality for calculating and managing
// content-based fingerprints in markdown files with frontmatter.
package mdfp

import (
	"crypto/sha256"
	"encoding/hex"
	"errors"
	"fmt"
	"os"
	"regexp"
	"strings"
)

// FrontmatterDelimiter is the delimiter used for YAML frontmatter.
const FrontmatterDelimiter = "---"

// FingerprintField is the field name used in frontmatter for the fingerprint.
const FingerprintField = "fingerprint"

// Precompiled regular expressions to avoid recompilation overhead.
var (
	reFingerprintLine    = regexp.MustCompile(`(?m)^fingerprint:\s*.*$\n?`)
	reFingerprintExtract = regexp.MustCompile(`(?m)^fingerprint:\s*(.+)$`)
)

// ParseMarkdown extracts the frontmatter and content from a markdown file.
func ParseMarkdown(content string) (frontmatter string, body string, err error) {
	// Check if file starts with frontmatter delimiter
	if !strings.HasPrefix(content, FrontmatterDelimiter+"\n") {
		// No frontmatter, entire content is body
		return "", content, nil
	}

	// Find the closing delimiter
	rest := content[len(FrontmatterDelimiter)+1:]

	// Handle case where closing delimiter is at the start (empty frontmatter)
	if strings.HasPrefix(rest, FrontmatterDelimiter+"\n") {
		body = rest[len(FrontmatterDelimiter)+1:]
		return "", body, nil
	}

	idx := strings.Index(rest, "\n"+FrontmatterDelimiter+"\n")
	if idx == -1 {
		return "", "", errors.New("unclosed frontmatter block")
	}

	frontmatter = rest[:idx]
	body = rest[idx+len(FrontmatterDelimiter)+2:]
	return frontmatter, body, nil
}

// CalculateFingerprint computes a SHA256 hash of the content
// Note: SHA256 is hardware-accelerated on most platforms and faster than pure-Go BLAKE3.
// For non-cryptographic use cases where speed is critical, this can be swapped with BLAKE3
// by importing "github.com/zeebo/blake3" and using blake3.Sum256() instead.
func CalculateFingerprint(content string) string {
	hash := sha256.Sum256([]byte(content))
	return hex.EncodeToString(hash[:])
}

// RemoveFingerprintFromFrontmatter removes any existing fingerprint field.
func RemoveFingerprintFromFrontmatter(frontmatter string) string {
	// Remove fingerprint line (handles various formats)
	return reFingerprintLine.ReplaceAllString(frontmatter, "")
}

// AddFingerprintToFrontmatter adds a fingerprint field to the frontmatter.
func AddFingerprintToFrontmatter(frontmatter, fingerprint string) string {
	// Trim any trailing newlines from frontmatter
	frontmatter = strings.TrimRight(frontmatter, "\n")

	// Add fingerprint at the end
	var buf strings.Builder
	if frontmatter == "" {
		buf.WriteString(FingerprintField)
		buf.WriteString(": ")
		buf.WriteString(fingerprint)
		buf.WriteString("\n")
	} else {
		buf.WriteString(frontmatter)
		buf.WriteString("\n")
		buf.WriteString(FingerprintField)
		buf.WriteString(": ")
		buf.WriteString(fingerprint)
		buf.WriteString("\n")
	}
	return buf.String()
}

// ProcessContent processes markdown content and adds/updates fingerprint.
func ProcessContent(content string) (string, error) {
	frontmatter, body, err := ParseMarkdown(content)
	if err != nil {
		return "", err
	}

	// Calculate fingerprint of body only (excluding frontmatter)
	fingerprint := CalculateFingerprint(body)

	// Remove existing fingerprint if present
	frontmatter = RemoveFingerprintFromFrontmatter(frontmatter)

	// Add new fingerprint
	frontmatter = AddFingerprintToFrontmatter(frontmatter, fingerprint)

	// Reconstruct the file
	if frontmatter == "" {
		return body, nil
	}

	var buf strings.Builder
	buf.WriteString(FrontmatterDelimiter)
	buf.WriteString("\n")
	buf.WriteString(frontmatter)
	buf.WriteString(FrontmatterDelimiter)
	buf.WriteString("\n")
	buf.WriteString(body)

	return buf.String(), nil
}

// ProcessFile reads a markdown file, adds/updates fingerprint, and writes it back.
func ProcessFile(filepath string) error {
	// Read file
	const filePermissions = 0o600
	content, err := os.ReadFile(filepath) //nolint: gosec
	if err != nil {
		return fmt.Errorf("failed to read file: %w", err)
	}

	// Process content
	processed, err := ProcessContent(string(content))
	if err != nil {
		return fmt.Errorf("failed to process content: %w", err)
	}

	// Write back to file only if content changed
	if processed != string(content) {
		if err = os.WriteFile(filepath, []byte(processed), filePermissions); err != nil {
			return fmt.Errorf("failed to write file: %w", err)
		}
	}

	return nil
}

// VerifyFingerprint checks if the fingerprint in the file matches the content.
func VerifyFingerprint(content string) (bool, error) {
	frontmatter, body, err := ParseMarkdown(content)
	if err != nil {
		return false, err
	}

	// Extract current fingerprint from frontmatter
	const minMatches = 2
	matches := reFingerprintExtract.FindStringSubmatch(frontmatter)
	if len(matches) < minMatches {
		return false, errors.New("no fingerprint found in frontmatter")
	}

	currentFingerprint := strings.TrimSpace(matches[1])
	expectedFingerprint := CalculateFingerprint(body)

	return currentFingerprint == expectedFingerprint, nil
}
