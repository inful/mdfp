// Package mdfp provides functionality for calculating and managing
// content-based fingerprints in markdown files with frontmatter.
package mdfp

import (
	"crypto/sha256"
	"encoding/hex"
	"errors"
	"fmt"
	"io"
	"os"
	"strings"
	"sync"
)

// FrontmatterDelimiter is the delimiter used for YAML frontmatter.
const FrontmatterDelimiter = "---"

// FingerprintField is the field name used in frontmatter for the fingerprint.
const FingerprintField = "fingerprint"

const (
	splitParts       = 2
	minMatches       = 2
	filePermissions  = 0o600
	defaultSliceSize = 8
	growthOverhead   = 4
)

// builderPool reduces allocation overhead by reusing string builders.
var builderPool = sync.Pool{
	New: func() any {
		return &strings.Builder{}
	},
}

// getBuilder retrieves a builder from the pool and resets it.
func getBuilder() *strings.Builder {
	b := builderPool.Get().(*strings.Builder)
	b.Reset()
	return b
}

// putBuilder returns a builder to the pool.
func putBuilder(b *strings.Builder) {
	builderPool.Put(b)
}

// Precompiled regular expressions to avoid recompilation overhead.

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

// CalculateFingerprintFromParts computes the fingerprint for a document represented
// by its parsed parts.
//
// If frontmatter is empty, this hashes body as-is.
// Otherwise it hashes the canonical virtual document:
//   ---\n{RemoveFingerprintFromFrontmatter(frontmatter)}\n---\n{body}
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

	// Preallocate with estimated capacity (typical frontmatter has 5-10 lines, minus 1 for fingerprint)
	filtered := make([]string, 0, defaultSliceSize)

	for line := range strings.SplitSeq(frontmatter, "\n") {
		// Skip fingerprint lines (with or without values)
		if !strings.HasPrefix(line, FingerprintField+":") {
			filtered = append(filtered, line)
		}
	}

	// Join back, removing any final empty line caused by split
	result := strings.Join(filtered, "\n")
	// Clean up trailing newline if the input didn't have multiple lines
	if !strings.Contains(frontmatter, "\n") {
		result = strings.TrimRight(result, "\n")
	}
	return result
}

// AddFingerprintToFrontmatter adds a fingerprint field to the frontmatter.
func AddFingerprintToFrontmatter(frontmatter, fingerprint string) string {
	// Trim any trailing newlines from frontmatter
	frontmatter = strings.TrimRight(frontmatter, "\n")

	// Add fingerprint at the end
	buf := getBuilder()
	defer putBuilder(buf)

	// Pre-grow to avoid reallocations
	buf.Grow(len(frontmatter) + len(FingerprintField) + len(fingerprint) + growthOverhead)

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

	buf := getBuilder()
	defer putBuilder(buf)

	// Pre-grow to avoid reallocations: delimiters + frontmatter + body + newlines
	buf.Grow(len(frontmatter) + len(body) + len(FrontmatterDelimiter)*2 + growthOverhead)

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

	// Extract current fingerprint from frontmatter by scanning lines
	const splitParts = 2
	var currentFingerprint string
	for line := range strings.SplitSeq(frontmatter, "\n") {
		if strings.HasPrefix(line, FingerprintField+":") {
			// Extract the value after "fingerprint: "
			parts := strings.SplitN(line, ":", splitParts)
			if len(parts) == splitParts {
				currentFingerprint = strings.TrimSpace(parts[1])
			}
			break
		}
	}

	if currentFingerprint == "" {
		return false, errors.New("no fingerprint found in frontmatter")
	}

	expectedFingerprint := CalculateFingerprint(body)
	return currentFingerprint == expectedFingerprint, nil
}
