package mdfp

import "testing"

func TestCalculateFingerprintFromParts_NoFrontmatterHashesBody(t *testing.T) {
	body := "# Title\n"

	got := CalculateFingerprintFromParts("", body)
	want := CalculateFingerprint(body)

	if got != want {
		t.Fatalf("CalculateFingerprintFromParts() = %q, want %q", got, want)
	}
}

func TestCalculateFingerprintFromParts_WithFrontmatterCanonicalizesVirtualDocAndRemovesExistingFingerprint(t *testing.T) {
	frontmatter := "title: Test\nfingerprint: oldfingerprint\nauthor: John"
	body := "# Content\n"

	frontmatterWithout := RemoveFingerprintFromFrontmatter(frontmatter)
	canonical := FrontmatterDelimiter + "\n" + frontmatterWithout + "\n" + FrontmatterDelimiter + "\n" + body

	got := CalculateFingerprintFromParts(frontmatter, body)
	want := CalculateFingerprint(canonical)

	if got != want {
		t.Fatalf("CalculateFingerprintFromParts() = %q, want %q", got, want)
	}
}

func TestCalculateFingerprintFromParts_EmptyFrontmatterBlockUsesNoFrontmatterBranch(t *testing.T) {
	body := "# Content"
	doc := "---\n---\n" + body

	fm, parsedBody, err := ParseMarkdown(doc)
	if err != nil {
		t.Fatalf("ParseMarkdown() error = %v", err)
	}
	if fm != "" {
		t.Fatalf("ParseMarkdown() frontmatter = %q, want empty", fm)
	}
	if parsedBody != body {
		t.Fatalf("ParseMarkdown() body = %q, want %q", parsedBody, body)
	}

	got := CalculateFingerprintFromParts(fm, parsedBody)
	want := CalculateFingerprint(body)
	if got != want {
		t.Fatalf("CalculateFingerprintFromParts() = %q, want %q", got, want)
	}
}

func TestCalculateFingerprintFromParts_BodyUsedVerbatim_NoTrimming(t *testing.T) {
	frontmatter := "title: Test"
	body := "\n# Content\n" // leading and trailing newlines are significant

	frontmatterWithout := RemoveFingerprintFromFrontmatter(frontmatter)
	canonical := FrontmatterDelimiter + "\n" + frontmatterWithout + "\n" + FrontmatterDelimiter + "\n" + body

	got := CalculateFingerprintFromParts(frontmatter, body)
	want := CalculateFingerprint(canonical)
	if got != want {
		t.Fatalf("CalculateFingerprintFromParts() = %q, want %q", got, want)
	}
}
