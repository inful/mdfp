# ADR 0001 Implementation Plan: CalculateFingerprintFromParts

- ADR: [0001-calculate-fingerprint-from-parts.md](docs/adr/0001-calculate-fingerprint-from-parts.md)
- Status: In progress
- Owner: (fill in)
- Started: 2026-01-20

## Goal

Implement `CalculateFingerprintFromParts(frontmatter, body string) string` in a way that:

- Uses the ADR canonicalization rules (see below).
- Is implemented strictly with TDD (tests written first; code only written to satisfy failing tests).
- Is performant and benchmarked.
- Does **not** change behavior of existing functionality (`ProcessContent`, `VerifyFingerprint`, etc.).

## Canonicalization rules (source of truth)

When computing the fingerprint:

- If `frontmatter == ""`: fingerprint `body` as-is (no virtual delimiters).
- Else: fingerprint the canonical virtual document:

  `---\n{RemoveFingerprintFromFrontmatter(frontmatter)}\n---\n{body}`

Notes:

- `frontmatter` is raw YAML *without* `---` delimiters (same shape returned by `ParseMarkdown`).
- Canonicalization is for hashing input only; it does not preserve delimiter/newline style.
- **Important:** `RemoveFingerprintFromFrontmatter` is only applied in the `frontmatter != ""` branch.
- **Important:** the canonical string is exactly the concatenation shown; `body` is used verbatim (including whether it begins/ends with `\n`). Do not trim.

## Guardrails (must hold)

- No changes to existing exported function behavior.
- Existing unit tests and benchmarks remain valid and continue to pass.
- New tests cover the new API’s behavior and edge cases.

## Work tracking checklist

Update this file as you go (check items, add short notes + dates).

### Phase 0: Pre-flight

- [ ] (P0) Read current semantics in `mdfp.go` for hashing/parsing/removal
- [ ] (P0) Decide where to place tests/benchmarks (new files vs existing)
- [ ] (P0) Record baseline benchmark numbers (optional but recommended)
  - Command: `go test -bench=CalculateFingerprint -benchmem ./...`
  - Paste summary here:

### Phase 1: Red — write failing tests (TDD)

Create tests that fail because the function does not exist yet.

- [x] (T1) Case: no frontmatter at all → `frontmatter == ""` path hashes body only (2026-01-20)
  - Arrange: `frontmatter := ""`; `body := "# Title\n"` (include a trailing newline in at least one variant).
  - Expect: `CalculateFingerprintFromParts(frontmatter, body) == CalculateFingerprint(body)`.

- [x] (T2) Case: frontmatter present with existing fingerprint → fingerprint line removed before hashing (2026-01-20)
  - Arrange: non-empty frontmatter that includes a `fingerprint:` line plus another key.
  - Expect: `CalculateFingerprintFromParts(fm, body) == CalculateFingerprint("---\n" + RemoveFingerprintFromFrontmatter(fm) + "\n---\n" + body)`.

- [x] (T3) Case: frontmatter block present but empty → confirm branch and match existing behavior (2026-01-20)
  - Arrange: parse `doc := "---\n---\n" + body` using `ParseMarkdown` and pass the resulting parts.
  - Expect: `fm == ""` and `CalculateFingerprintFromParts(fm, body) == CalculateFingerprint(body)`.

- [x] (T4) Newline lock-down: body is used verbatim (2026-01-20)
  - Arrange: choose a body that begins with `\n` and/or ends with `\n`.
  - Expect: the hash matches the canonical concatenation with no trimming.

Notes:
- Prefer deterministic assertions based on `CalculateFingerprint(expectedCanonicalInput)` rather than hard-coding hashes.

### Phase 2: Green — minimal implementation

Implement the smallest correct code to make Phase 1 tests pass.

- [x] (I1) Add `CalculateFingerprintFromParts` to `mdfp.go` (2026-01-20)
  - Use the canonicalization rules above.
  - Performance: keep `frontmatter == ""` branch allocation-free aside from hashing.

- [x] (I2) Re-run unit tests until green (2026-01-20)
  - Command: `go test ./...`

### Phase 3: Refactor (still green)

Improve performance/readability without changing observable behavior.

- [x] (R1) Use streaming SHA256 writes (`io.WriteString`) for canonical input (2026-01-20)
- [x] (R2) Avoid building large intermediate canonical strings (2026-01-20)
- [x] (R3) Keep changes localized; do not alter existing functions (2026-01-20)

### Phase 4: Benchmarks (performance requirements)

Add benchmarks in the existing benchmark file.

- [x] (B1) Add `BenchmarkCalculateFingerprintFromParts_NoFrontmatter` (2026-01-20)
- [x] (B2) Add `BenchmarkCalculateFingerprintFromParts_WithFrontmatter` (2026-01-20)
  - Include a `fingerprint:` line to measure removal + build cost.
- [x] (B3) Add `BenchmarkCalculateFingerprintFromParts_LargeBody` (2026-01-20)
  - Mirror the existing large-body patterns.
- [x] (B4) Run benchmarks and record results (2026-01-20)
  - Command: `go test -bench=CalculateFingerprintFromParts -benchmem ./...`
  - Paste summary here:

    goos: linux
    goarch: arm64
    pkg: github.com/inful/mdfp
    BenchmarkCalculateFingerprintFromParts_NoFrontmatter-10   1000000  1433 ns/op   2176 B/op   3 allocs/op
    BenchmarkCalculateFingerprintFromParts_WithFrontmatter-10  669858  2140 ns/op   2472 B/op  12 allocs/op
    BenchmarkCalculateFingerprintFromParts_LargeBody-10         30817 39767 ns/op  57768 B/op  12 allocs/op

### Phase 5: Regression safety

- [x] (S1) Run full test suite (2026-01-20)
  - Command: `go test ./...`
- [x] (S2) Ensure no behavior changes to existing public API (2026-01-20)
  - Sanity check: confirm no edits to `ProcessContent`/`VerifyFingerprint` semantics.

## Notes / Decisions log

- 2026-01-20: Canonicalization requirement confirmed: virtual document used only when `frontmatter != ""`.
