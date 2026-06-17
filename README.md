---
fingerprint: addfe661b7768cc74c00b7c5e8bb5dd44e2aaa5a8ca8763cf867dca670a907c6
---
# mdfp

[![CI](https://github.com/inful/mdfp/actions/workflows/ci.yml/badge.svg)](https://github.com/inful/mdfp/actions/workflows/ci.yml)
[![Go Report Card](https://goreportcard.com/badge/github.com/inful/mdfp)](https://goreportcard.com/report/github.com/inful/mdfp)
[![GoDoc](https://godoc.org/github.com/inful/mdfp?status.svg)](https://godoc.org/github.com/inful/mdfp)

**mdfp** (Markdown Fingerprint) is a Go library and command-line tool for adding content-based fingerprints to markdown files. It calculates a SHA256 hash of the markdown content (excluding frontmatter) and stores it in the YAML frontmatter, making it easy to detect when file content has changed.

## Features

- **Pure Go library** - Frontmatter parsing and mutation are powered by `github.com/inful/mdfm`
- **Content-based fingerprinting** - SHA256 hash of markdown content (excluding frontmatter)
- **Semantic frontmatter management** - Adds or updates fingerprint in YAML frontmatter via YAML-aware key operations
- **Command-line tool** - Easy-to-use CLI for processing files and directories
- **Verification mode** - Check if fingerprints match current content
- **Recursive processing** - Process entire directory trees
- **High performance** - Thoroughly benchmarked and optimized
- **Well-tested** - Comprehensive test coverage
- **Linted** - Passes golangci-lint v2.12.2

## Installation

### Using Go install

```bash
go install github.com/inful/mdfp/cmd/mdfp@latest
```

### From source

```bash
git clone https://github.com/inful/mdfp.git
cd mdfp
go build -o mdfp ./cmd/mdfp
```

### Download pre-built binaries

Download the latest release from the [releases page](https://github.com/inful/mdfp/releases).

## Usage

### Command Line

#### Process a single file

```bash
mdfp document.md
```

This will add or update the fingerprint in the frontmatter:

```yaml
---
title: My Document
fingerprint: a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
---
# Content
```

#### Process multiple files

```bash
mdfp file1.md file2.md file3.md
```

#### Process directory recursively

```bash
mdfp -r docs/
```

#### Verify fingerprints

```bash
mdfp -verify document.md
mdfp -verify -r docs/
```

#### Verbose output

```bash
mdfp -v -r .
```

#### Pipeline/stdin-stdout usage

Process markdown through Unix pipes:

```bash
# Add/update fingerprint and output to stdout
cat document.md | mdfp > output.md

# Verify fingerprint from stdin
cat document.md | mdfp -verify

# Verify with verbose output
cat document.md | mdfp -verify -v

# Chain with other commands
curl https://example.com/document.md | mdfp | gzip > output.md.gz
```

#### Get help

```bash
mdfp -h
```

### As a Library

```go
package main

import (
    "fmt"
    "log"
    
    "github.com/inful/mdfp"
)

func main() {
    // Process a single file
    err := mdfp.ProcessFile("document.md")
    if err != nil {
        log.Fatal(err)
    }
    
    // Process content directly
    content := `---
title: Test
---
# Hello World`
    
    processed, err := mdfp.ProcessContent(content)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println(processed)
    
    // Verify a fingerprint
    valid, err := mdfp.VerifyFingerprint(processed)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Printf("Fingerprint valid: %v\n", valid)
    
    // Calculate fingerprint of content
    fingerprint := mdfp.CalculateFingerprint("content to hash")
    fmt.Printf("Fingerprint: %s\n", fingerprint)
}
```

## API Documentation

### Core Functions

#### `ProcessFile(filepath string) error`
Reads a markdown file, adds/updates its fingerprint, and writes it back.

#### `ProcessContent(content string) (string, error)`
Processes markdown content and returns it with an updated fingerprint.

#### `VerifyFingerprint(content string) (bool, error)`
Checks if the fingerprint in the frontmatter matches the content.

#### `CalculateFingerprint(content string) string`
Computes a SHA256 hash of the given content.

#### `CalculateFingerprintFromParts(frontmatter, body string) string`
Computes the fingerprint for a document represented by parsed parts (same `frontmatter`/`body` shape returned by `ParseMarkdown`).

- If `frontmatter == ""`: fingerprints `body` as-is.
- Else: fingerprints the canonical virtual document `---\n{RemoveFingerprintFromFrontmatter(frontmatter)}\n---\n{body}`.
    `body` is used verbatim (no trimming).

#### `ParseMarkdown(content string) (frontmatter string, body string, err error)`
Extracts frontmatter and body from markdown content.

This is a compatibility helper for callers that still work with delimiter-free frontmatter strings. Validation is performed through `mdfm`, while the returned `frontmatter` and `body` slices are extracted from the original markdown bytes.

#### `RemoveFingerprintFromFrontmatter(frontmatter string) string`
Removes the top-level `fingerprint` key from raw delimiter-free frontmatter.

This is a compatibility helper layered on top of `mdfm` semantic mutation.

#### `AddFingerprintToFrontmatter(frontmatter, fingerprint string) string`
Adds or replaces the top-level `fingerprint` key in raw delimiter-free frontmatter.

This is a compatibility helper layered on top of `mdfm` semantic mutation.

## How It Works

1. **Parse** - Parses YAML frontmatter (between `---` delimiters) with `mdfm`
2. **Calculate** - Computes a SHA256 hash of the content (excluding frontmatter)
3. **Update** - Adds or updates the `fingerprint` field with semantic top-level key operations
4. **Write** - Serializes the markdown back through `mdfm`

The fingerprint is calculated from the markdown content only, excluding the frontmatter. This means changes to metadata (title, author, etc.) don't affect the fingerprint, only changes to the actual content.

## Development

### Running Tests

```bash
go test -v
```

### Running Benchmarks

```bash
go test -bench=. -benchmem
```

### Running Linter

```bash
golangci-lint run ./...
```

### Building

```bash
go build -o mdfp ./cmd/mdfp
```

### Testing Locally with GoReleaser

```bash
goreleaser release --snapshot --clean
```

## Performance

mdfp is designed for high performance. Here are some benchmark results:

```
BenchmarkParseMarkdown-4                      	21292393	        56.17 ns/op
BenchmarkCalculateFingerprint-4               	  749524	      1556 ns/op
BenchmarkProcessContent-4                     	  197313	      5904 ns/op
```

Performance is continuously monitored through benchmarks to ensure changes don't introduce regressions.

**View detailed benchmark history:** [Performance Benchmarks](https://inful.github.io/mdfp/dev/bench/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run tests and linter (`go test ./... && golangci-lint run ./...`)
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Acknowledgments

- Uses SHA256 for fingerprint calculation
- Follows Go best practices and conventions
- Inspired by the need for content versioning in documentation systems
