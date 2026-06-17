package main

import (
	"errors"
	"io"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

// resetFlags restores the package-level flag vars to their defaults.
// Tests must call this (directly or via t.Cleanup) to avoid bleed-over.
//
// initFlags is intentionally not called here: it mutates the global
// flag.CommandLine, and calling it more than once per process panics
// with "flag redefined". The functions under test read the package
// variables directly, so resetting them is sufficient.
func resetFlags(t *testing.T) {
	t.Helper()
	verifyMode = false
	recursiveMode = false
	verboseMode = false
	showVersion = false
	t.Cleanup(func() {
		verifyMode = false
		recursiveMode = false
		verboseMode = false
		showVersion = false
	})
}

// captureStdout swaps os.Stdout with a pipe for the duration of fn,
// returning whatever fn wrote to stdout and the error fn returned.
func captureStdout(t *testing.T, fn func() error) (string, error) {
	t.Helper()
	r, w, err := os.Pipe()
	if err != nil {
		t.Fatalf("os.Pipe: %v", err)
	}
	orig := os.Stdout
	os.Stdout = w
	t.Cleanup(func() { os.Stdout = orig })

	done := make(chan error, 1)
	go func() {
		done <- fn()
		_ = w.Close()
	}()

	out, _ := io.ReadAll(r)
	return string(out), <-done
}

// fakeStdin replaces os.Stdin with a pipe pre-loaded with content.
// Caller-supplied cleanup via t.Cleanup restores the original stdin.
func fakeStdin(t *testing.T, content string) {
	t.Helper()
	r, w, err := os.Pipe()
	if err != nil {
		t.Fatalf("os.Pipe: %v", err)
	}
	go func() {
		_, _ = w.WriteString(content)
		_ = w.Close()
	}()
	orig := os.Stdin
	os.Stdin = r
	t.Cleanup(func() { os.Stdin = orig })
}

// captureStderr swaps os.Stderr with a pipe for the duration of fn,
// returning whatever fn wrote to stderr and the error fn returned.
func captureStderr(t *testing.T, fn func() error) (string, error) {
	t.Helper()
	r, w, err := os.Pipe()
	if err != nil {
		t.Fatalf("os.Pipe: %v", err)
	}
	orig := os.Stderr
	os.Stderr = w
	t.Cleanup(func() { os.Stderr = orig })

	done := make(chan error, 1)
	go func() {
		done <- fn()
		_ = w.Close()
	}()

	out, _ := io.ReadAll(r)
	return string(out), <-done
}

// validFingerprinted returns content with a valid fingerprint already in place.
func validFingerprinted(t *testing.T) string {
	t.Helper()
	tmp := t.TempDir()
	path := filepath.Join(tmp, "doc.md")
	if err := os.WriteFile(path, []byte("# Content\n"), 0o600); err != nil {
		t.Fatalf("write seed file: %v", err)
	}
	if err := updateFile(path); err != nil {
		t.Fatalf("seed ProcessFile: %v", err)
	}
	data, err := os.ReadFile(path) //nolint:gosec
	if err != nil {
		t.Fatalf("read seed file: %v", err)
	}
	return string(data)
}

func TestProcessPath_File(t *testing.T) {
	resetFlags(t)
	tmp := t.TempDir()
	path := filepath.Join(tmp, "doc.md")
	if err := os.WriteFile(path, []byte("---\ntitle: T\n---\n# C\n"), 0o600); err != nil {
		t.Fatalf("seed: %v", err)
	}

	if err := processPath(path); err != nil {
		t.Fatalf("processPath(file) error = %v", err)
	}

	data, err := os.ReadFile(path) //nolint:gosec
	if err != nil {
		t.Fatalf("read: %v", err)
	}
	if !strings.Contains(string(data), "fingerprint:") {
		t.Errorf("file missing fingerprint: %q", data)
	}
}

func TestProcessPath_DirectoryRequiresRecursive(t *testing.T) {
	resetFlags(t)
	tmp := t.TempDir()
	if err := processPath(tmp); err == nil {
		t.Error("processPath(dir) without -r: expected error, got nil")
	} else if !strings.Contains(err.Error(), "-r") {
		t.Errorf("error should mention -r, got: %v", err)
	}
}

func TestProcessPath_DirectoryRecursive(t *testing.T) {
	resetFlags(t)
	recursiveMode = true
	tmp := t.TempDir()
	sub := filepath.Join(tmp, "sub")
	if err := os.Mkdir(sub, 0o755); err != nil { //nolint:gosec
		t.Fatalf("mkdir: %v", err)
	}

	files := []string{
		filepath.Join(tmp, "a.md"),
		filepath.Join(sub, "b.MD"), // ensure case-insensitive suffix match
		filepath.Join(sub, "skip.txt"),
	}
	for _, f := range files {
		if err := os.WriteFile(f, []byte("# C\n"), 0o600); err != nil {
			t.Fatalf("seed %s: %v", f, err)
		}
	}

	if err := processPath(tmp); err != nil {
		t.Fatalf("processPath(-r) error = %v", err)
	}

	for _, f := range files[:2] {
		data, err := os.ReadFile(f) //nolint:gosec
		if err != nil {
			t.Fatalf("read %s: %v", f, err)
		}
		if !strings.Contains(string(data), "fingerprint:") {
			t.Errorf("file %s missing fingerprint", f)
		}
	}
	data, err := os.ReadFile(files[2])
	if err != nil {
		t.Fatalf("read %s: %v", files[2], err)
	}
	if strings.Contains(string(data), "fingerprint:") {
		t.Errorf("non-markdown file %s should be skipped", files[2])
	}
}

func TestProcessPath_Nonexistent(t *testing.T) {
	resetFlags(t)
	missing := filepath.Join(t.TempDir(), "does-not-exist.md")
	if err := processPath(missing); err == nil {
		t.Error("processPath(missing): expected error, got nil")
	}
}

func TestUpdateFile(t *testing.T) {
	resetFlags(t)
	tmp := t.TempDir()
	path := filepath.Join(tmp, "doc.md")
	if err := os.WriteFile(path, []byte("# C\n"), 0o600); err != nil {
		t.Fatalf("seed: %v", err)
	}

	if err := updateFile(path); err != nil {
		t.Fatalf("updateFile() error = %v", err)
	}

	data, err := os.ReadFile(path) //nolint:gosec
	if err != nil {
		t.Fatalf("read: %v", err)
	}
	if !strings.Contains(string(data), "fingerprint:") {
		t.Errorf("missing fingerprint: %q", data)
	}
}

func TestUpdateFile_Verbose(t *testing.T) {
	resetFlags(t)
	verboseMode = true
	tmp := t.TempDir()
	path := filepath.Join(tmp, "doc.md")
	if err := os.WriteFile(path, []byte("# C\n"), 0o600); err != nil {
		t.Fatalf("seed: %v", err)
	}

	out, err := captureStderr(t, func() error { return updateFile(path) })
	if err != nil {
		t.Fatalf("updateFile() error = %v", err)
	}
	if !strings.Contains(out, path) || !strings.Contains(out, "fingerprint updated") {
		t.Errorf("verbose stderr missing expected message: %q", out)
	}
}

func TestVerifyFile_Valid(t *testing.T) {
	resetFlags(t)
	content := validFingerprinted(t)

	tmp := t.TempDir()
	path := filepath.Join(tmp, "doc.md")
	if err := os.WriteFile(path, []byte(content), 0o600); err != nil {
		t.Fatalf("seed: %v", err)
	}

	if err := verifyFile(path); err != nil {
		t.Errorf("verifyFile(valid) error = %v", err)
	}
}

func TestVerifyFile_Invalid(t *testing.T) {
	resetFlags(t)
	tmp := t.TempDir()
	path := filepath.Join(tmp, "doc.md")
	content := "---\nfingerprint: deadbeef\n---\n# Content\n"
	if err := os.WriteFile(path, []byte(content), 0o600); err != nil {
		t.Fatalf("seed: %v", err)
	}

	err := verifyFile(path)
	if err == nil {
		t.Fatal("verifyFile(invalid): expected error, got nil")
	}
	if !errors.Is(err, errors.New("fingerprint mismatch")) && err.Error() != "fingerprint mismatch" {
		// The CLI returns a bare errors.New; ensure that's the message.
		if !strings.Contains(err.Error(), "fingerprint mismatch") {
			t.Errorf("expected 'fingerprint mismatch' error, got: %v", err)
		}
	}
}

func TestVerifyFile_NoFingerprint(t *testing.T) {
	resetFlags(t)
	tmp := t.TempDir()
	path := filepath.Join(tmp, "doc.md")
	if err := os.WriteFile(path, []byte("# Content\n"), 0o600); err != nil {
		t.Fatalf("seed: %v", err)
	}

	if err := verifyFile(path); err == nil {
		t.Error("verifyFile(no fingerprint): expected error, got nil")
	}
}

func TestVerifyFile_Nonexistent(t *testing.T) {
	resetFlags(t)
	missing := filepath.Join(t.TempDir(), "nope.md")
	if err := verifyFile(missing); err == nil {
		t.Error("verifyFile(missing): expected error, got nil")
	}
}

func TestProcessFile_Dispatch(t *testing.T) {
	resetFlags(t)
	tmp := t.TempDir()
	path := filepath.Join(tmp, "doc.md")
	if err := os.WriteFile(path, []byte("# C\n"), 0o600); err != nil {
		t.Fatalf("seed: %v", err)
	}

	// Default (update) mode.
	if err := processFile(path); err != nil {
		t.Fatalf("processFile default error = %v", err)
	}
	data, _ := os.ReadFile(path) //nolint:gosec
	if !strings.Contains(string(data), "fingerprint:") {
		t.Errorf("update path missing fingerprint: %q", data)
	}

	// Verify mode.
	verifyMode = true
	if err := processFile(path); err != nil {
		t.Errorf("processFile verify error = %v", err)
	}
}

func TestProcessDirectory_NoMarkdown(t *testing.T) {
	resetFlags(t)
	tmp := t.TempDir()
	if err := os.WriteFile(filepath.Join(tmp, "ignored.txt"), []byte("x"), 0o600); err != nil {
		t.Fatalf("seed: %v", err)
	}

	if err := processDirectory(tmp); err != nil {
		t.Errorf("processDirectory(no md) error = %v", err)
	}
}

func TestProcessDirectory_CollectsErrors(t *testing.T) {
	resetFlags(t)
	tmp := t.TempDir()
	good := filepath.Join(tmp, "good.md")
	if err := os.WriteFile(good, []byte("# C\n"), 0o600); err != nil {
		t.Fatalf("seed good: %v", err)
	}
	bad := filepath.Join(tmp, "bad.md")
	// No closing frontmatter delimiter => mdfm.Parse fails.
	badContent := "---\ntitle: Test\n# Missing closing delimiter"
	if err := os.WriteFile(bad, []byte(badContent), 0o600); err != nil {
		t.Fatalf("seed bad: %v", err)
	}

	err := processDirectory(tmp)
	if err == nil {
		t.Fatal("processDirectory(mixed): expected error, got nil")
	}
	if !strings.Contains(err.Error(), "errors processing files") {
		t.Errorf("expected aggregated error message, got: %v", err)
	}
	if !strings.Contains(err.Error(), "bad.md") {
		t.Errorf("error should mention bad.md, got: %v", err)
	}
}

func TestUpdateStdin(t *testing.T) {
	resetFlags(t)
	out, err := captureStdout(t, func() error {
		return updateStdin("---\ntitle: T\n---\n# C\n")
	})
	if err != nil {
		t.Fatalf("updateStdin() error = %v", err)
	}
	if !strings.Contains(out, "fingerprint:") {
		t.Errorf("output missing fingerprint: %q", out)
	}
	if !strings.Contains(out, "title: T") {
		t.Errorf("output should preserve frontmatter: %q", out)
	}
}

func TestUpdateStdin_Verbose(t *testing.T) {
	resetFlags(t)
	verboseMode = true
	errOut, err := captureStderr(t, func() error {
		_, wErr := captureStdout(t, func() error { return updateStdin("# C\n") })
		return wErr
	})
	if err != nil {
		t.Fatalf("updateStdin verbose error = %v", err)
	}
	if !strings.Contains(errOut, "stdin") || !strings.Contains(errOut, "fingerprint updated") {
		t.Errorf("verbose stderr missing expected message: %q", errOut)
	}
}

func TestVerifyStdin_Valid(t *testing.T) {
	resetFlags(t)
	content := validFingerprinted(t)
	if err := verifyStdin(content); err != nil {
		t.Errorf("verifyStdin(valid) error = %v", err)
	}
}

func TestVerifyStdin_Invalid(t *testing.T) {
	resetFlags(t)
	content := "---\nfingerprint: deadbeef\n---\n# C\n"
	err := verifyStdin(content)
	if err == nil {
		t.Fatal("verifyStdin(invalid): expected error, got nil")
	}
	if !strings.Contains(err.Error(), "fingerprint mismatch") {
		t.Errorf("expected 'fingerprint mismatch', got: %v", err)
	}
}

func TestProcessStdin_Update(t *testing.T) {
	resetFlags(t)
	fakeStdin(t, "# C\n")
	out, err := captureStdout(t, processStdin)
	if err != nil {
		t.Fatalf("processStdin(update) error = %v", err)
	}
	if !strings.Contains(out, "fingerprint:") {
		t.Errorf("output missing fingerprint: %q", out)
	}
}

func TestProcessStdin_Verify(t *testing.T) {
	resetFlags(t)
	verifyMode = true
	content := validFingerprinted(t)
	fakeStdin(t, content)
	if err := processStdin(); err != nil {
		t.Errorf("processStdin(verify) error = %v", err)
	}
}

func TestProcessStdin_ReadError(t *testing.T) {
	resetFlags(t)
	// Reading from a closed *os.File returns an error (not EOF).
	// This lets us exercise the io.ReadAll error branch in processStdin.
	f, err := os.CreateTemp(t.TempDir(), "closed-stdin")
	if err != nil {
		t.Fatalf("CreateTemp: %v", err)
	}
	path := f.Name()
	t.Cleanup(func() { _ = os.Remove(path) })
	if err := f.Close(); err != nil {
		t.Fatalf("Close: %v", err)
	}

	orig := os.Stdin
	os.Stdin = f
	t.Cleanup(func() { os.Stdin = orig })

	if err := processStdin(); err == nil {
		t.Error("processStdin(closed file): expected error, got nil")
	}
}

func TestUsage(t *testing.T) {
	resetFlags(t)
	out, err := captureStderr(t, func() error {
		usage()
		return nil
	})
	if err != nil {
		t.Fatalf("usage() error = %v", err)
	}
	if !strings.Contains(out, "Usage:") {
		t.Errorf("usage output missing 'Usage:': %q", out)
	}
	if !strings.Contains(out, "mdfp") {
		t.Errorf("usage output missing program name: %q", out)
	}
	if !strings.Contains(out, "-verify") {
		t.Errorf("usage output missing '-verify' flag: %q", out)
	}
}
