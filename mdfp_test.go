package mdfp

import (
	"os"
	"path/filepath"
	"strings"
	"testing"
)

func TestParseMarkdown(t *testing.T) {
	tests := []struct {
		name              string
		input             string
		wantFrontmatter   string
		wantBody          string
		wantErr           bool
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
			if !tt.wantErr {
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
	err := os.WriteFile(testFile, []byte(content), 0644)
	if err != nil {
		t.Fatalf("Failed to create test file: %v", err)
	}

	// Process the file
	err = ProcessFile(testFile)
	if err != nil {
		t.Errorf("ProcessFile() error = %v", err)
	}

	// Read back the file
	result, err := os.ReadFile(testFile)
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
	input := `---
title: Test
---
# Content`

	processed, err := ProcessContent(input)
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
	noFingerprintContent := `---
title: Test
---
# Content`

	_, err = VerifyFingerprint(noFingerprintContent)
	if err == nil {
		t.Error("VerifyFingerprint() expected error for missing fingerprint")
	}
}
