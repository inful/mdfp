window.BENCHMARK_DATA = {
  "lastUpdate": 1768088466927,
  "repoUrl": "https://github.com/inful/mdfp",
  "entries": {
    "mdfp Go Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "inful@users.noreply.github.com",
            "name": "inful",
            "username": "inful"
          },
          "committer": {
            "email": "inful@users.noreply.github.com",
            "name": "inful",
            "username": "inful"
          },
          "distinct": true,
          "id": "bf4287751eec879183c45946f052b19ef17e7e4e",
          "message": "ci: add Continuous Benchmark workflow using github-action-benchmark",
          "timestamp": "2026-01-10T23:26:17Z",
          "tree_id": "7433a3482a21ef259cf465cbdf35c0d2563c3a05",
          "url": "https://github.com/inful/mdfp/commit/bf4287751eec879183c45946f052b19ef17e7e4e"
        },
        "date": 1768087614264,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 59.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20045871 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 59.12,
            "unit": "ns/op",
            "extra": "20045871 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20045871 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20045871 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1842,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "618603 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1842,
            "unit": "ns/op",
            "extra": "618603 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "618603 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "618603 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 175.6,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6794148 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 175.6,
            "unit": "ns/op",
            "extra": "6794148 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6794148 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6794148 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 48183,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "24631 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 48183,
            "unit": "ns/op",
            "extra": "24631 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "24631 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "24631 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 4208,
            "unit": "ns/op\t    4776 B/op\t      36 allocs/op",
            "extra": "286884 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 4208,
            "unit": "ns/op",
            "extra": "286884 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 4776,
            "unit": "B/op",
            "extra": "286884 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "286884 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 157.8,
            "unit": "ns/op\t     112 B/op\t       3 allocs/op",
            "extra": "7591395 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 157.8,
            "unit": "ns/op",
            "extra": "7591395 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "7591395 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7591395 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 5675,
            "unit": "ns/op\t    6555 B/op\t      44 allocs/op",
            "extra": "204301 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 5675,
            "unit": "ns/op",
            "extra": "204301 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 6555,
            "unit": "B/op",
            "extra": "204301 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 44,
            "unit": "allocs/op",
            "extra": "204301 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 3602,
            "unit": "ns/op\t    5081 B/op\t      41 allocs/op",
            "extra": "326272 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 3602,
            "unit": "ns/op",
            "extra": "326272 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 5081,
            "unit": "B/op",
            "extra": "326272 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 41,
            "unit": "allocs/op",
            "extra": "326272 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 45059,
            "unit": "ns/op\t   87685 B/op\t      44 allocs/op",
            "extra": "26394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 45059,
            "unit": "ns/op",
            "extra": "26394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 87685,
            "unit": "B/op",
            "extra": "26394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 44,
            "unit": "allocs/op",
            "extra": "26394 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 5712,
            "unit": "ns/op\t    5259 B/op\t      35 allocs/op",
            "extra": "205946 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 5712,
            "unit": "ns/op",
            "extra": "205946 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 5259,
            "unit": "B/op",
            "extra": "205946 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "205946 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "inful@users.noreply.github.com",
            "name": "inful",
            "username": "inful"
          },
          "committer": {
            "email": "inful@users.noreply.github.com",
            "name": "inful",
            "username": "inful"
          },
          "distinct": true,
          "id": "6aa9229bf7db966534460f840c6be5b1b47d5af2",
          "message": "ci: add PR benchmark comparison workflow and cache baseline in main",
          "timestamp": "2026-01-10T23:28:29Z",
          "tree_id": "7cc8035eee2032b0712ea04dec71e03df45146f0",
          "url": "https://github.com/inful/mdfp/commit/6aa9229bf7db966534460f840c6be5b1b47d5af2"
        },
        "date": 1768087744664,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21193494 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.6,
            "unit": "ns/op",
            "extra": "21193494 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21193494 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21193494 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1579,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "762657 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1579,
            "unit": "ns/op",
            "extra": "762657 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "762657 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "762657 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 175.4,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6844317 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 175.4,
            "unit": "ns/op",
            "extra": "6844317 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6844317 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6844317 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 41356,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "28957 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 41356,
            "unit": "ns/op",
            "extra": "28957 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "28957 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "28957 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 4266,
            "unit": "ns/op\t    4770 B/op\t      36 allocs/op",
            "extra": "274576 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 4266,
            "unit": "ns/op",
            "extra": "274576 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 4770,
            "unit": "B/op",
            "extra": "274576 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "274576 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 178.4,
            "unit": "ns/op\t     112 B/op\t       3 allocs/op",
            "extra": "6501122 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 178.4,
            "unit": "ns/op",
            "extra": "6501122 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6501122 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "6501122 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 6066,
            "unit": "ns/op\t    6551 B/op\t      44 allocs/op",
            "extra": "200991 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 6066,
            "unit": "ns/op",
            "extra": "200991 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 6551,
            "unit": "B/op",
            "extra": "200991 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 44,
            "unit": "allocs/op",
            "extra": "200991 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 3609,
            "unit": "ns/op\t    5081 B/op\t      41 allocs/op",
            "extra": "310902 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 3609,
            "unit": "ns/op",
            "extra": "310902 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 5081,
            "unit": "B/op",
            "extra": "310902 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 41,
            "unit": "allocs/op",
            "extra": "310902 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 41774,
            "unit": "ns/op\t   88267 B/op\t      44 allocs/op",
            "extra": "28113 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 41774,
            "unit": "ns/op",
            "extra": "28113 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 88267,
            "unit": "B/op",
            "extra": "28113 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 44,
            "unit": "allocs/op",
            "extra": "28113 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 5927,
            "unit": "ns/op\t    5256 B/op\t      35 allocs/op",
            "extra": "199227 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 5927,
            "unit": "ns/op",
            "extra": "199227 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 5256,
            "unit": "B/op",
            "extra": "199227 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "199227 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "inful@users.noreply.github.com",
            "name": "inful",
            "username": "inful"
          },
          "committer": {
            "email": "inful@users.noreply.github.com",
            "name": "inful",
            "username": "inful"
          },
          "distinct": true,
          "id": "019e8549e735122e457fba09874ad31d4db25fa1",
          "message": "chore: fix golangci-lint issues\n\n- Replace fmt.Printf with fmt.Fprintf for stderr output\n- Replace init() with initFlags() function call in main\n- Set file permissions to 0o600 for improved security\n- Define minMatches and filePermissions constants\n- Simplify nested conditional logic with early returns\n- Add nolint directives for intentional file operations",
          "timestamp": "2026-01-10T23:40:14Z",
          "tree_id": "8d2781da95a4f4cb7b98946d37c31a172cb02318",
          "url": "https://github.com/inful/mdfp/commit/019e8549e735122e457fba09874ad31d4db25fa1"
        },
        "date": 1768088466526,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21304792 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.24,
            "unit": "ns/op",
            "extra": "21304792 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21304792 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21304792 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1590,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "743688 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1590,
            "unit": "ns/op",
            "extra": "743688 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "743688 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "743688 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 175.6,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6759300 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 175.6,
            "unit": "ns/op",
            "extra": "6759300 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6759300 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6759300 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 41761,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "28656 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 41761,
            "unit": "ns/op",
            "extra": "28656 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "28656 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "28656 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 1200,
            "unit": "ns/op\t     160 B/op\t       4 allocs/op",
            "extra": "962422 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 1200,
            "unit": "ns/op",
            "extra": "962422 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 160,
            "unit": "B/op",
            "extra": "962422 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "962422 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 175.5,
            "unit": "ns/op\t     112 B/op\t       3 allocs/op",
            "extra": "6779796 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 175.5,
            "unit": "ns/op",
            "extra": "6779796 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "6779796 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "6779796 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 2772,
            "unit": "ns/op\t    1931 B/op\t      12 allocs/op",
            "extra": "402727 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 2772,
            "unit": "ns/op",
            "extra": "402727 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1931,
            "unit": "B/op",
            "extra": "402727 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "402727 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 664.8,
            "unit": "ns/op\t     496 B/op\t       9 allocs/op",
            "extra": "1757970 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 664.8,
            "unit": "ns/op",
            "extra": "1757970 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 496,
            "unit": "B/op",
            "extra": "1757970 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1757970 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 37015,
            "unit": "ns/op\t   83550 B/op\t      12 allocs/op",
            "extra": "32671 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 37015,
            "unit": "ns/op",
            "extra": "32671 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 83550,
            "unit": "B/op",
            "extra": "32671 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "32671 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 3016,
            "unit": "ns/op\t     739 B/op\t       4 allocs/op",
            "extra": "392612 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 3016,
            "unit": "ns/op",
            "extra": "392612 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 739,
            "unit": "B/op",
            "extra": "392612 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "392612 times\n4 procs"
          }
        ]
      }
    ]
  }
}