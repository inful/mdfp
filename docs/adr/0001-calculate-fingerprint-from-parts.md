# ADR 0001: CalculateFingerprintFromParts

- Status: Proposed
- Date: 2026-01-20

## Context

mdfp fingerprints Markdown documents that may contain YAML frontmatter. Today, a caller that already has parsed content typically needs to:

1. Remove any existing fingerprint field from frontmatter.
2. Reconstruct a “document-like” string.
3. Hash that string to obtain the fingerprint that would be produced by mdfp.

This is awkward and easy to get wrong because:

- Frontmatter parsing (`ParseMarkdown`) returns raw YAML without `---` delimiters.
- Callers may have frontmatter/body already (e.g. from `ParseMarkdown`, a Markdown AST pipeline, or a frontmatter-aware editor integration).
- Fingerprint computation must follow the exact same fingerprint-removal semantics as mdfp’s existing helpers.
- We want a stable hashing input that does not depend on preserving original delimiter style or newline style.

## Decision

Add a helper function:

```go
// CalculateFingerprintFromParts computes the same fingerprint as CalculateFingerprint/VerifyFingerprint
// would for a document whose frontmatter is `frontmatter` and whose body is `body`.
//
// `frontmatter` is the raw YAML content *without* `---` delimiters (same shape returned by ParseMarkdown).
// `body` is the Markdown body without frontmatter.
func CalculateFingerprintFromParts(frontmatter, body string) string
```

### Behavior

`CalculateFingerprintFromParts(frontmatter, body)` will:

1. Remove any existing fingerprint field from `frontmatter` using the same rules as `RemoveFingerprintFromFrontmatter`.
2. Compute the fingerprint using the following canonicalization:

   - If `frontmatter == ""`: fingerprint `body` as-is (no virtual delimiters).
   - Else: fingerprint `FrontmatterDelimiter + "\n" + RemoveFingerprintFromFrontmatter(frontmatter) + "\n" + FrontmatterDelimiter + "\n" + body`.

3. Treat this canonicalization strictly as hashing input normalization. It does not attempt to preserve the original document’s delimiter style or newline style.

### Compatibility guarantee

For any document `doc`, if `fm, body := ParseMarkdown(doc)`, then `CalculateFingerprintFromParts(fm, body)` matches whatever `CalculateFingerprint(docWithoutFingerprintUpdate)` would produce under current mdfp semantics.

## Rationale

- **Correctness by construction**: centralizes the canonicalization in one place so callers don’t have to replicate (and potentially drift from) mdfp’s rules.
- **Consistency**: reuses `RemoveFingerprintFromFrontmatter` behavior verbatim to ensure the “fingerprint field doesn’t fingerprint itself”.
- **Stability**: a single canonical format for hashing avoids differences caused by delimiter variants or newline differences.
- **Ergonomics**: makes it straightforward to compute the exact mdfp fingerprint when a caller already has frontmatter/body separated.

## Consequences

- The helper introduces an explicit canonical hashing input format for “frontmatter + body” fingerprints.
- Callers that previously hashed some other reconstructed form will need to adopt the canonical form to get matching results.
- This function is pure and deterministic; it should be cheap (string building + hash) and safe to call repeatedly.

## Alternatives considered

1. **Callers reconstruct the document themselves**
   - Rejected: error-prone and leads to multiple subtly different canonicalizations across callers.

2. **Expose a lower-level function that returns the canonical hashing input**
   - Example: `BuildCanonicalFingerprintInputFromParts(frontmatter, body string) string`.
   - Not chosen for now: `CalculateFingerprintFromParts` directly expresses the intent and keeps the surface area smaller.

3. **Parse YAML and remove `fingerprint` semantically**
   - Rejected: adds dependencies and may diverge from existing line-based behavior of `RemoveFingerprintFromFrontmatter`.

4. **Extend `ParseMarkdown` to return a `hasFrontmatter` boolean**
   - Not chosen: with the canonicalization rule above, `frontmatter == ""` is defined to mean “hash body as-is”, which matches current mdfp behavior.

## Notes / Open questions

- None currently.
