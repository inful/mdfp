package mdfp

import (
	"strings"
	"testing"
)

var benchContent = `---
title: Test Document
author: John Doe
date: 2024-01-01
tags:
  - test
  - benchmark
---
# Test Document

This is a test document with some content.

## Section 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Section 2

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Section 3

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

## Section 4

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

func BenchmarkParseMarkdown(b *testing.B) {
	for b.Loop() {
		_, _, _ = ParseMarkdown(benchContent)
	}
}

func BenchmarkCalculateFingerprint(b *testing.B) {
	content := strings.Repeat("Test content line\n", 100)

	for b.Loop() {
		_ = CalculateFingerprint(content)
	}
}

func BenchmarkCalculateFingerprintSmall(b *testing.B) {
	content := "Small content"

	for b.Loop() {
		_ = CalculateFingerprint(content)
	}
}

func BenchmarkCalculateFingerprintLarge(b *testing.B) {
	content := strings.Repeat("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n", 1000)

	for b.Loop() {
		_ = CalculateFingerprint(content)
	}
}

func BenchmarkRemoveFingerprintFromFrontmatter(b *testing.B) {
	frontmatter := `title: Test
author: John Doe
fingerprint: abc123def456
date: 2024-01-01`

	for b.Loop() {
		_ = RemoveFingerprintFromFrontmatter(frontmatter)
	}
}

func BenchmarkRemoveFingerprintFromFrontmatter_NoMatch(b *testing.B) {
	frontmatter := `title: Test
author: John Doe
date: 2024-01-01`

	for b.Loop() {
		_ = RemoveFingerprintFromFrontmatter(frontmatter)
	}
}

func BenchmarkAddFingerprintToFrontmatter(b *testing.B) {
	frontmatter := `title: Test
author: John Doe
date: 2024-01-01`
	fingerprint := "abc123def456789"

	for b.Loop() {
		_ = AddFingerprintToFrontmatter(frontmatter, fingerprint)
	}
}

func BenchmarkProcessContent(b *testing.B) {
	for b.Loop() {
		_, _ = ProcessContent(benchContent)
	}
}

func BenchmarkProcessContentNoFrontmatter(b *testing.B) {
	content := `# Test Document

This is a test document without frontmatter.`

	for b.Loop() {
		_, _ = ProcessContent(content)
	}
}

func BenchmarkProcessContentLarge(b *testing.B) {
	// Create a large document
	largeContent := `---
title: Large Document
---
` + strings.Repeat("# Section\n\nLorem ipsum dolor sit amet.\n\n", 1000)

	for b.Loop() {
		_, _ = ProcessContent(largeContent)
	}
}

func BenchmarkVerifyFingerprint(b *testing.B) {
	// First create a valid fingerprinted content
	processed, _ := ProcessContent(benchContent)

	for b.Loop() {
		_, _ = VerifyFingerprint(processed)
	}
}

func BenchmarkCalculateFingerprintFromParts_NoFrontmatter(b *testing.B) {
	body := strings.Repeat("Test content line\n", 100)

	for b.Loop() {
		_ = CalculateFingerprintFromParts("", body)
	}
}

func BenchmarkCalculateFingerprintFromParts_WithFrontmatter(b *testing.B) {
	frontmatter := `title: Test
author: John Doe
fingerprint: abc123def456
date: 2024-01-01`
	body := strings.Repeat("Test content line\n", 100)

	for b.Loop() {
		_ = CalculateFingerprintFromParts(frontmatter, body)
	}
}

func BenchmarkCalculateFingerprintFromParts_LargeBody(b *testing.B) {
	frontmatter := `title: Large Document
fingerprint: abc123def456
date: 2024-01-01`
	body := strings.Repeat("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n", 1000)

	for b.Loop() {
		_ = CalculateFingerprintFromParts(frontmatter, body)
	}
}
