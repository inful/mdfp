# mdfp

[![CI](https://github.com/inful/mdfp/actions/workflows/ci.yml/badge.svg)](https://github.com/inful/mdfp/actions/workflows/ci.yml)
[![Go Report Card](https://goreportcard.com/badge/github.com/inful/mdfp)](https://goreportcard.com/report/github.com/inful/mdfp)
[![GoDoc](https://godoc.org/github.com/inful/mdfp?status.svg)](https://godoc.org/github.com/inful/mdfp)

**mdfp** (Markdown Fingerprint) is a Go library and command-line tool for adding content-based fingerprints to markdown files. It calculates a SHA256 hash of the markdown content (excluding frontmatter) and stores it in the YAML frontmatter, making it easy to detect when file content has changed.

## Features

- **Pure Go library** - No external dependencies for core functionality
- **Content-based fingerprinting** - SHA256 hash of markdown content (excluding frontmatter)
- **Automatic frontmatter management** - Adds or updates fingerprint in YAML frontmatter
- **Command-line tool** - Easy-to-use CLI for processing files and directories
- **Verification mode** - Check if fingerprints match current content
- **Recursive processing** - Process entire directory trees
- **High performance** - Thoroughly benchmarked and optimized
- **Well-tested** - Comprehensive test coverage
- **Linted** - Passes golangci-lint v2.8.0

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

#### `ParseMarkdown(content string) (frontmatter string, body string, err error)`
Extracts frontmatter and body from markdown content.

## How It Works

1. **Parse** - Extracts YAML frontmatter (between `---` delimiters) from the markdown file
2. **Calculate** - Computes a SHA256 hash of the content (excluding frontmatter)
3. **Update** - Adds or updates the `fingerprint` field in the frontmatter
4. **Write** - Reconstructs the file with updated frontmatter

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
