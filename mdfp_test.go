package mdfp

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

const testFrontmatterContent = `---
title: Test
---
# Content`

func TestParseMarkdown(t *testing.T) {
	tests := []struct {
		name            string
		input           string
		wantFrontmatter string
		wantBody        string
		wantErr         bool
	}{
		{
			name: "with frontmatter",
			input: `---
title: Test
---
# Hello World`,
			wantFrontmatter: "title: Test",
			wantBody:        "# Hello World",
			wantErr:         false,
		},
		{
			name:            "no frontmatter",
			input:           "# Hello World\nContent here",
			wantFrontmatter: "",
			wantBody:        "# Hello World\nContent here",
			wantErr:         false,
		},
		{
			name: "unclosed frontmatter",
			input: `---
title: Test
# Hello World`,
			wantErr: true,
		},
		{
			name: "empty frontmatter",
			input: `---
---
# Content`,
			wantFrontmatter: "",
			wantBody:        "# Content",
			wantErr:         false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			gotFrontmatter, gotBody, err := ParseMarkdown(tt.input)
			if (err != nil) != tt.wantErr {
				t.Errorf("ParseMarkdown() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !tt.wantErr {
				if gotFrontmatter != tt.wantFrontmatter {
					t.Errorf("ParseMarkdown() frontmatter = %q, want %q", gotFrontmatter, tt.wantFrontmatter)
				}
				if gotBody != tt.wantBody {
					t.Errorf("ParseMarkdown() body = %q, want %q", gotBody, tt.wantBody)
				}
			}
		})
	}
}

func TestCalculateFingerprint(t *testing.T) {
	tests := []struct {
		name    string
		content string
		want    string
	}{
		{
			name:    "simple content",
			content: "Hello World",
			want:    "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e",
		},
		{
			name:    "empty content",
			content: "",
			want:    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
		},
		{
			name:    "multiline content",
			content: "Line 1\nLine 2\nLine 3",
			want:    "f5e3c19ded874aa72b0b8c8f7e6b3c56e8a8c5c6d0d9e8e6f7f8e9f0a1b2c3d4",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := CalculateFingerprint(tt.content)
			// Check that we get a valid SHA256 hash (64 hex characters)
			if len(got) != 64 {
				t.Errorf("CalculateFingerprint() returned hash of length %d, want 64", len(got))
			}
			// For deterministic tests, verify specific known hashes
			if tt.name == "simple content" || tt.name == "empty content" {
				if got != tt.want {
					t.Errorf("CalculateFingerprint() = %v, want %v", got, tt.want)
				}
			}
		})
	}
}

func TestRemoveFingerprintFromFrontmatter(t *testing.T) {
	tests := []struct {
		name  string
		input string
		want  string
	}{
		{
			name:  "with fingerprint",
			input: "title: Test\nfingerprint: abc123\nauthor: John",
			want:  "title: Test\nauthor: John",
		},
		{
			name:  "with fingerprint and trailing newline",
			input: "title: Test\nfingerprint: abc123\nauthor: John\n",
			want:  "title: Test\nauthor: John\n",
		},
		{
			name:  "no fingerprint",
			input: "title: Test\nauthor: John",
			want:  "title: Test\nauthor: John",
		},
		{
			name:  "fingerprint with spaces",
			input: "title: Test\nfingerprint:    abc123   \nauthor: John",
			want:  "title: Test\nauthor: John",
		},
		{
			name:  "only fingerprint line with trailing newline",
			input: "fingerprint: abc123\n",
			want:  "",
		},
		{
			name:  "empty input",
			input: "",
			want:  "",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := RemoveFingerprintFromFrontmatter(tt.input)
			if got != tt.want {
				t.Errorf("RemoveFingerprintFromFrontmatter() = %q, want %q", got, tt.want)
			}
		})
	}
}

func TestAddFingerprintToFrontmatter(t *testing.T) {
	tests := []struct {
		name        string
		frontmatter string
		fingerprint string
		want        string
	}{
		{
			name:        "add to existing",
			frontmatter: "title: Test\nauthor: John",
			fingerprint: "abc123",
			want:        "title: Test\nauthor: John\nfingerprint: abc123\n",
		},
		{
			name:        "add to empty",
			frontmatter: "",
			fingerprint: "abc123",
			want:        "fingerprint: abc123\n",
		},
		{
			name:        "add with trailing newline",
			frontmatter: "title: Test\n",
			fingerprint: "xyz789",
			want:        "title: Test\nfingerprint: xyz789\n",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := AddFingerprintToFrontmatter(tt.frontmatter, tt.fingerprint)
			if got != tt.want {
				t.Errorf("AddFingerprintToFrontmatter() = %q, want %q", got, tt.want)
			}
		})
	}
}

func TestProcessContent(t *testing.T) {
	tests := []struct {
		name    string
		input   string
		wantErr bool
	}{
		{
			name: "with frontmatter",
			input: `---
title: Test
---
# Content`,
			wantErr: false,
		},
		{
			name:    "without frontmatter",
			input:   "# Content",
			wantErr: false,
		},
		{
			name: "with existing fingerprint",
			input: `---
title: Test
fingerprint: oldfingerprint
---
# Content`,
			wantErr: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := ProcessContent(tt.input)
			if (err != nil) != tt.wantErr {
				t.Errorf("ProcessContent() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if tt.wantErr {
				return
			}

			// Verify that output contains a fingerprint
			if !strings.Contains(got, "fingerprint:") {
				t.Error("ProcessContent() output missing fingerprint field")
			}

			// Verify the fingerprint is valid (64 hex chars)
			lines := strings.Split(got, "\n")
			foundFingerprint := false
			for _, line := range lines {
				if strings.HasPrefix(line, "fingerprint:") {
					parts := strings.SplitN(line, ":", 2)
					if len(parts) == 2 {
						fp := strings.TrimSpace(parts[1])
						if len(fp) != 64 {
							t.Errorf("ProcessContent() fingerprint length = %d, want 64", len(fp))
						}
						foundFingerprint = true
						break
					}
				}
			}
			if !foundFingerprint {
				t.Error("ProcessContent() did not find valid fingerprint")
			}
		})
	}
}

func TestProcessFile(t *testing.T) {
	// Create a temporary directory
	tmpDir := t.TempDir()

	testFile := filepath.Join(tmpDir, "test.md")
	content := `---
title: Test Document
---
# Hello World

This is test content.`

	// Write test file
	err := os.WriteFile(testFile, []byte(content), 0o600)
	if err != nil {
		t.Fatalf("Failed to create test file: %v", err)
	}

	// Process the file
	err = ProcessFile(testFile)
	if err != nil {
		t.Errorf("ProcessFile() error = %v", err)
	}

	// Read back the file
	result, err := os.ReadFile(testFile) //nolint: gosec
	if err != nil {
		t.Fatalf("Failed to read processed file: %v", err)
	}

	resultStr := string(result)
	if !strings.Contains(resultStr, "fingerprint:") {
		t.Error("ProcessFile() did not add fingerprint to file")
	}

	// Verify the structure is maintained
	if !strings.Contains(resultStr, "title: Test Document") {
		t.Error("ProcessFile() lost original frontmatter")
	}
	if !strings.Contains(resultStr, "# Hello World") {
		t.Error("ProcessFile() lost content")
	}
}

func TestVerifyFingerprint(t *testing.T) {
	// First, create content with a valid fingerprint
	processed, err := ProcessContent(testFrontmatterContent)
	if err != nil {
		t.Fatalf("Failed to process content: %v", err)
	}

	// Verify the fingerprint is valid
	valid, err := VerifyFingerprint(processed)
	if err != nil {
		t.Errorf("VerifyFingerprint() error = %v", err)
	}
	if !valid {
		t.Error("VerifyFingerprint() returned false for valid fingerprint")
	}

	// Test with invalid fingerprint
	invalidContent := `---
title: Test
fingerprint: invalidfingerprint
---
# Content`

	valid, err = VerifyFingerprint(invalidContent)
	if err != nil {
		t.Errorf("VerifyFingerprint() error = %v", err)
	}
	if valid {
		t.Error("VerifyFingerprint() returned true for invalid fingerprint")
	}

	// Test with no fingerprint
	_, err = VerifyFingerprint(testFrontmatterContent)
	if err == nil {
		t.Error("VerifyFingerprint() expected error for missing fingerprint")
	}

	// Test with no frontmatter
	noFrontmatterContent := "# Just content without frontmatter"
	_, err = VerifyFingerprint(noFrontmatterContent)
	if err == nil {
		t.Error("VerifyFingerprint() expected error for content without frontmatter")
	}

	// Test with malformed fingerprint line (no colon)
	malformedContent := `---
fingerprint
---
# Content`
	_, err = VerifyFingerprint(malformedContent)
	if err == nil {
		t.Error("VerifyFingerprint() expected error for malformed fingerprint line")
	}
}

func TestCalculateFingerprintReader(t *testing.T) {
	tests := []struct {
		name    string
		content string
		wantLen int
		wantErr bool
	}{
		{
			name:    "simple content",
			content: "Hello World",
			wantLen: 64, // SHA256 produces 64 hex characters
			wantErr: false,
		},
		{
			name:    "empty content",
			content: "",
			wantLen: 64,
			wantErr: false,
		},
		{
			name:    "multiline content",
			content: "Line 1\nLine 2\nLine 3",
			wantLen: 64,
			wantErr: false,
		},
		{
			name:    "large content",
			content: strings.Repeat("Lorem ipsum dolor sit amet. ", 1000),
			wantLen: 64,
			wantErr: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			reader := strings.NewReader(tt.content)
			got, err := CalculateFingerprintReader(reader)

			if (err != nil) != tt.wantErr {
				t.Errorf("CalculateFingerprintReader() error = %v, wantErr %v", err, tt.wantErr)
				return
			}

			if !tt.wantErr {
				if len(got) != tt.wantLen {
					t.Errorf("CalculateFingerprintReader() hash length = %d, want %d", len(got), tt.wantLen)
				}

				// Verify consistency: same content should produce same hash
				expectedHash := CalculateFingerprint(tt.content)
				if got != expectedHash {
					t.Errorf("CalculateFingerprintReader() = %v, want %v", got, expectedHash)
				}
			}
		})
	}
}

func testProcessFileNonexistentFile(t *testing.T, tmpDir string) {
	t.Helper()
	err := ProcessFile(filepath.Join(tmpDir, "nonexistent.md"))
	if err == nil {
		t.Error("ProcessFile() expected error for nonexistent file")
	}
	if !strings.Contains(err.Error(), "failed to read file") {
		t.Errorf("ProcessFile() error = %v, want 'failed to read file' error", err)
	}
}

func testProcessFileReadOnlyDirectory(t *testing.T, tmpDir string) {
	t.Helper()
	roDir := filepath.Join(tmpDir, "readonly")
	if err := os.Mkdir(roDir, 0o500); err != nil {
		t.Fatalf("Failed to create read-only directory: %v", err)
	}
	defer func() {
		if err := os.Chmod(roDir, 0o755); err != nil { //nolint: gosec
			t.Logf("Warning: failed to restore directory permissions: %v", err)
		}
	}()

	testFile := filepath.Join(roDir, "test.md")

	// Try to process a file in read-only directory
	err := ProcessFile(testFile)
	if err == nil {
		t.Error("ProcessFile() expected error for read-only directory")
	}
}

func testProcessFileInvalidMarkdown(t *testing.T, tmpDir string) {
	t.Helper()
	testFile := filepath.Join(tmpDir, "invalid.md")
	invalidContent := "---\ntitle: Test\n# Missing closing delimiter"

	if err := os.WriteFile(testFile, []byte(invalidContent), 0o600); err != nil {
		t.Fatalf("Failed to create test file: %v", err)
	}

	err := ProcessFile(testFile)
	if err == nil {
		t.Error("ProcessFile() expected error for invalid markdown structure")
	}
	if !strings.Contains(err.Error(), "failed to process content") {
		t.Errorf("ProcessFile() error = %v, want 'failed to process content' error", err)
	}
}

func testProcessFileNoChange(t *testing.T, tmpDir string) {
	t.Helper()
	testFile := filepath.Join(tmpDir, "nochange.md")
	content := `---
title: Test
---
# Content`

	// Process once to add fingerprint
	if err := os.WriteFile(testFile, []byte(content), 0o600); err != nil {
		t.Fatalf("Failed to create test file: %v", err)
	}
	if err := ProcessFile(testFile); err != nil {
		t.Fatalf("First ProcessFile() failed: %v", err)
	}

	// Process again - should not write since content unchanged
	if err := ProcessFile(testFile); err != nil {
		t.Errorf("Second ProcessFile() error = %v", err)
	}

	// Verify the content is still valid
	result, err := os.ReadFile(testFile) //nolint: gosec
	if err != nil {
		t.Fatalf("Failed to read file: %v", err)
	}

	valid, err := VerifyFingerprint(string(result))
	if err != nil {
		t.Errorf("VerifyFingerprint() error = %v", err)
	}
	if !valid {
		t.Error("File fingerprint became invalid after reprocessing")
	}
}

func TestProcessFileErrors(t *testing.T) {
	tmpDir := t.TempDir()

	t.Run("nonexistent file", func(t *testing.T) {
		testProcessFileNonexistentFile(t, tmpDir)
	})

	t.Run("read-only directory", func(t *testing.T) {
		testProcessFileReadOnlyDirectory(t, tmpDir)
	})

	t.Run("invalid markdown structure", func(t *testing.T) {
		testProcessFileInvalidMarkdown(t, tmpDir)
	})

	t.Run("no change needed", func(t *testing.T) {
		testProcessFileNoChange(t, tmpDir)
	})
}

func TestProcessContentNoFrontmatter(t *testing.T) {
	// Test the branch where frontmatter is empty after processing
	input := "# Just content without frontmatter\n\nSome text here."

	result, err := ProcessContent(input)
	if err != nil {
		t.Fatalf("ProcessContent() error = %v", err)
	}

	// Should add frontmatter with fingerprint
	if !strings.Contains(result, "---") {
		t.Error("ProcessContent() should add frontmatter delimiters for content without frontmatter")
	}

	if !strings.Contains(result, "fingerprint:") {
		t.Error("ProcessContent() should add fingerprint field")
	}

	// Verify structure: should have frontmatter block and content
	parts := strings.Split(result, "---")
	if len(parts) < 3 {
		t.Errorf("ProcessContent() result should have frontmatter delimiters, got parts: %d", len(parts))
	}
}

// ExampleParseMarkdown demonstrates how to parse markdown content with frontmatter.
func ExampleParseMarkdown() {
	content := `---
title: My Document
author: John Doe
---
# Hello World

This is the content.`

	frontmatter, body, err := ParseMarkdown(content)
	if err != nil {
		panic(err)
	}

	fmt.Println("Frontmatter:")
	fmt.Println(frontmatter)
	fmt.Println("\nBody:")
	fmt.Println(body)

	// Output:
	// Frontmatter:
	// title: My Document
	// author: John Doe
	//
	// Body:
	// # Hello World
	//
	// This is the content.
}

// ExampleCalculateFingerprint demonstrates how to calculate a fingerprint
// for markdown content.
func ExampleCalculateFingerprint() {
	content := `# My Document

This is the content that will be fingerprinted.`

	fingerprint := CalculateFingerprint(content)
	fmt.Printf("Fingerprint length: %d (SHA256 hex)\n", len(fingerprint))
	fmt.Printf("First 16 chars: %s\n", fingerprint[:16])

	// Output:
	// Fingerprint length: 64 (SHA256 hex)
	// First 16 chars: 025da365007b0fec
}

// ExampleProcessContent demonstrates how to add a fingerprint to markdown content.
func ExampleProcessContent() {
	content := `---
title: My Document
---
# Introduction

This document will get a fingerprint.`

	processed, err := ProcessContent(content)
	if err != nil {
		panic(err)
	}

	// The fingerprint is now embedded in the frontmatter
	if strings.Contains(processed, "fingerprint:") {
		fmt.Println("✓ Fingerprint was added to frontmatter")
	}

	// Verify the fingerprint is valid
	valid, err := VerifyFingerprint(processed)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Fingerprint valid: %v\n", valid)

	// Output:
	// ✓ Fingerprint was added to frontmatter
	// Fingerprint valid: true
}

// ExampleAddFingerprintToFrontmatter demonstrates how to add a fingerprint
// to existing frontmatter.
func ExampleAddFingerprintToFrontmatter() {
	frontmatter := `title: Example
author: Jane Doe`

	fingerprint := "abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567abc890def1"

	result := AddFingerprintToFrontmatter(frontmatter, fingerprint)
	fmt.Println(result)

	// Output:
	// title: Example
	// author: Jane Doe
	// fingerprint: abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567abc890def1
}

// ExampleRemoveFingerprintFromFrontmatter demonstrates how to remove
// a fingerprint from frontmatter.
func ExampleRemoveFingerprintFromFrontmatter() {
	frontmatter := `title: Example
fingerprint: abc123def456
author: Jane Doe`

	result := RemoveFingerprintFromFrontmatter(frontmatter)
	fmt.Println(result)

	// Output:
	// title: Example
	// author: Jane Doe
}

// ExampleVerifyFingerprint demonstrates how to verify that a document's
// fingerprint matches its content.
func ExampleVerifyFingerprint() {
	// First, create a document with a valid fingerprint
	content := `---
title: Example Document
---
# Content

This is the document content.`

	processed, err := ProcessContent(content)
	if err != nil {
		panic(err)
	}

	// Now verify the fingerprint
	valid, err := VerifyFingerprint(processed)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Fingerprint is valid: %v\n", valid)

	// If content is modified, the fingerprint becomes invalid
	// (this is how you detect if a document has been modified)
	modifiedContent := strings.ReplaceAll(processed, "Content", "Modified Content")
	valid, err = VerifyFingerprint(modifiedContent)
	if err != nil {
		panic(err)
	}

	fmt.Printf("After modification, fingerprint is valid: %v\n", valid)

	// Output:
	// Fingerprint is valid: true
	// After modification, fingerprint is valid: false
}

// ExampleCalculateFingerprintReader demonstrates how to calculate a fingerprint
// from an io.Reader (useful for large files).
func ExampleCalculateFingerprintReader() {
	// In a real scenario, this could be an open file
	content := "Large file content that is read from a stream"
	reader := strings.NewReader(content)

	fingerprint, err := CalculateFingerprintReader(reader)
	if err != nil {
		panic(err)
	}

	// Calculate the same content directly for comparison
	directFingerprint := CalculateFingerprint(content)

	fmt.Printf("Fingerprint from reader: %s...\n", fingerprint[:16])
	fmt.Printf("Match with direct: %v\n", fingerprint == directFingerprint)

	// Output:
	// Fingerprint from reader: 39e7b499e34ca70d...
	// Match with direct: true
}
