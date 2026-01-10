package main

import (
	"errors"
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/inful/mdfp"
)

const version = "0.1.0"

var (
	verifyMode    bool
	recursiveMode bool
	verboseMode   bool
	showVersion   bool
)

func initFlags() {
	flag.BoolVar(&verifyMode, "verify", false, "Verify fingerprints instead of updating them")
	flag.BoolVar(&recursiveMode, "r", false, "Process directories recursively")
	flag.BoolVar(&verboseMode, "v", false, "Verbose output")
	flag.BoolVar(&showVersion, "version", false, "Show version information")
	flag.Usage = usage
}

func usage() {
	fmt.Fprintf(os.Stderr, "mdfp - Markdown Fingerprint Tool v%s\n\n", version)
	fmt.Fprintf(os.Stderr, "Usage: mdfp [options] <file|directory>...\n\n")
	fmt.Fprintf(os.Stderr, "Options:\n")
	flag.PrintDefaults()
	fmt.Fprintf(os.Stderr, "\nExamples:\n")
	fmt.Fprintf(os.Stderr, "  mdfp file.md                  # Add/update fingerprint in a single file\n")
	fmt.Fprintf(os.Stderr, "  mdfp -r docs/                 # Process all .md files in docs/ recursively\n")
	fmt.Fprintf(os.Stderr, "  mdfp -verify file.md          # Verify fingerprint in file\n")
	fmt.Fprintf(os.Stderr, "  mdfp -v -r .                  # Process all .md files verbosely\n")
}

func main() {
	initFlags()
	flag.Parse()

	if showVersion {
		fmt.Fprintf(os.Stderr, "mdfp version %s\n", version)
		os.Exit(0)
	}

	args := flag.Args()
	if len(args) == 0 {
		fmt.Fprintf(os.Stderr, "Error: No files or directories specified\n\n")
		usage()
		os.Exit(1)
	}

	exitCode := 0
	for _, path := range args {
		if err := processPath(path); err != nil {
			fmt.Fprintf(os.Stderr, "Error processing %s: %v\n", path, err)
			exitCode = 1
		}
	}

	os.Exit(exitCode)
}

func processPath(path string) error {
	info, err := os.Stat(path)
	if err != nil {
		return err
	}

	if info.IsDir() {
		if !recursiveMode {
			return fmt.Errorf("'%s' is a directory (use -r for recursive processing)", path)
		}
		return processDirectory(path)
	}

	return processFile(path)
}

func processDirectory(dir string) error {
	var errors []string

	err := filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// Skip directories and non-markdown files
		if info.IsDir() || !strings.HasSuffix(strings.ToLower(path), ".md") {
			return nil
		}

		if err := processFile(path); err != nil {
			errors = append(errors, fmt.Sprintf("%s: %v", path, err))
		}
		return nil
	})
	if err != nil {
		return err
	}

	if len(errors) > 0 {
		return fmt.Errorf("errors processing files:\n%s", strings.Join(errors, "\n"))
	}

	return nil
}

func processFile(filepath string) error {
	if verifyMode {
		return verifyFile(filepath)
	}
	return updateFile(filepath)
}

func verifyFile(filepath string) error {
	content, err := os.ReadFile(filepath) //nolint: gosec
	if err != nil {
		return err
	}

	valid, err := mdfp.VerifyFingerprint(string(content))
	if err != nil {
		if verboseMode {
			fmt.Fprintf(os.Stderr, "✗ %s: %v\n", filepath, err)
		}
		return err
	}

	if valid {
		if verboseMode {
			fmt.Fprintf(os.Stderr, "✓ %s: fingerprint valid\n", filepath)
		}
		return nil
	}

	if verboseMode {
		fmt.Fprintf(os.Stderr, "✗ %s: fingerprint invalid\n", filepath)
	}
	return errors.New("fingerprint mismatch")
}

func updateFile(filepath string) error {
	err := mdfp.ProcessFile(filepath)
	if err != nil {
		return err
	}

	if verboseMode {
		fmt.Fprintf(os.Stderr, "✓ %s: fingerprint updated\n", filepath)
	}
	return nil
}
