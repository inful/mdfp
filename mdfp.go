// Package mdfp provides functionality for calculating and managing
// content-based fingerprints in markdown files with frontmatter.
package mdfp

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"os"
	"regexp"
	"strings"
)

// FrontmatterDelimiter is the delimiter used for YAML frontmatter
const FrontmatterDelimiter = "---"

// FingerprintField is the field name used in frontmatter for the fingerprint
const FingerprintField = "fingerprint"

// ParseMarkdown extracts the frontmatter and content from a markdown file
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
		return "", "", fmt.Errorf("unclosed frontmatter block")
	}

	frontmatter = rest[:idx]
	body = rest[idx+len(FrontmatterDelimiter)+2:]
	return frontmatter, body, nil
}

// CalculateFingerprint computes a SHA256 hash of the content
func CalculateFingerprint(content string) string {
	hash := sha256.Sum256([]byte(content))
	return hex.EncodeToString(hash[:])
}

// RemoveFingerprintFromFrontmatter removes any existing fingerprint field
func RemoveFingerprintFromFrontmatter(frontmatter string) string {
	// Remove fingerprint line (handles various formats)
	re := regexp.MustCompile(`(?m)^fingerprint:\s*.*$\n?`)
	return re.ReplaceAllString(frontmatter, "")
}

// AddFingerprintToFrontmatter adds a fingerprint field to the frontmatter
func AddFingerprintToFrontmatter(frontmatter, fingerprint string) string {
	// Trim any trailing newlines from frontmatter
	frontmatter = strings.TrimRight(frontmatter, "\n")
	
	// Add fingerprint at the end
	if frontmatter == "" {
		return fmt.Sprintf("%s: %s\n", FingerprintField, fingerprint)
	}
	return fmt.Sprintf("%s\n%s: %s\n", frontmatter, FingerprintField, fingerprint)
}

// ProcessContent processes markdown content and adds/updates fingerprint
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
	return fmt.Sprintf("%s\n%s%s\n%s", FrontmatterDelimiter, frontmatter, FrontmatterDelimiter, body), nil
}

// ProcessFile reads a markdown file, adds/updates fingerprint, and writes it back
func ProcessFile(filepath string) error {
	// Read file
	content, err := os.ReadFile(filepath)
	if err != nil {
		return fmt.Errorf("failed to read file: %w", err)
	}

	// Process content
	processed, err := ProcessContent(string(content))
	if err != nil {
		return fmt.Errorf("failed to process content: %w", err)
	}

	// Write back to file
	err = os.WriteFile(filepath, []byte(processed), 0644)
	if err != nil {
		return fmt.Errorf("failed to write file: %w", err)
	}

	return nil
}

// VerifyFingerprint checks if the fingerprint in the file matches the content
func VerifyFingerprint(content string) (bool, error) {
	frontmatter, body, err := ParseMarkdown(content)
	if err != nil {
		return false, err
	}

	// Extract current fingerprint from frontmatter
	re := regexp.MustCompile(`(?m)^fingerprint:\s*(.+)$`)
	matches := re.FindStringSubmatch(frontmatter)
	if len(matches) < 2 {
		return false, fmt.Errorf("no fingerprint found in frontmatter")
	}

	currentFingerprint := strings.TrimSpace(matches[1])
	expectedFingerprint := CalculateFingerprint(body)

	return currentFingerprint == expectedFingerprint, nil
}
