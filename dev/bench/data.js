window.BENCHMARK_DATA = {
  "lastUpdate": 1781497808491,
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
          "id": "39b08f4a24a508495600abde4e26225d11115852",
          "message": "perf: use strings.Builder for content reconstruction\n\nReplace fmt.Sprintf calls with strings.Builder in AddFingerprintToFrontmatter\nand ProcessContent functions to reduce allocations and improve performance:\n- AddFingerprintToFrontmatter: 53% faster (121 -> 56 ns/op)\n- ProcessContent: 10.6% faster (1911 -> 1709 ns/op)\n- ProcessContentNoFrontmatter: 21.5% faster (421 -> 330 ns/op)\n- ProcessContentLarge: 10.3% faster (29029 -> 26029 ns/op)",
          "timestamp": "2026-01-10T23:46:52Z",
          "tree_id": "604cab537888fdf0eb0dea062e9b4822c3b53521",
          "url": "https://github.com/inful/mdfp/commit/39b08f4a24a508495600abde4e26225d11115852"
        },
        "date": 1768088850585,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 55.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21254473 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 55.81,
            "unit": "ns/op",
            "extra": "21254473 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21254473 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21254473 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1546,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "753181 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1546,
            "unit": "ns/op",
            "extra": "753181 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "753181 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "753181 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 181.4,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6842642 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 181.4,
            "unit": "ns/op",
            "extra": "6842642 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6842642 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6842642 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40729,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29293 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40729,
            "unit": "ns/op",
            "extra": "29293 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29293 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29293 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 1216,
            "unit": "ns/op\t     160 B/op\t       4 allocs/op",
            "extra": "964020 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 1216,
            "unit": "ns/op",
            "extra": "964020 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 160,
            "unit": "B/op",
            "extra": "964020 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "964020 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 73.16,
            "unit": "ns/op\t     144 B/op\t       2 allocs/op",
            "extra": "16185418 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 73.16,
            "unit": "ns/op",
            "extra": "16185418 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "16185418 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16185418 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 2489,
            "unit": "ns/op\t    2163 B/op\t      11 allocs/op",
            "extra": "451530 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 2489,
            "unit": "ns/op",
            "extra": "451530 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 2163,
            "unit": "B/op",
            "extra": "451530 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 11,
            "unit": "allocs/op",
            "extra": "451530 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 502.6,
            "unit": "ns/op\t     600 B/op\t       9 allocs/op",
            "extra": "2392489 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 502.6,
            "unit": "ns/op",
            "extra": "2392489 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 600,
            "unit": "B/op",
            "extra": "2392489 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2392489 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34534,
            "unit": "ns/op\t   83037 B/op\t      12 allocs/op",
            "extra": "34754 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34534,
            "unit": "ns/op",
            "extra": "34754 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 83037,
            "unit": "B/op",
            "extra": "34754 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "34754 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 3168,
            "unit": "ns/op\t     738 B/op\t       4 allocs/op",
            "extra": "335410 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 3168,
            "unit": "ns/op",
            "extra": "335410 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 738,
            "unit": "B/op",
            "extra": "335410 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "335410 times\n4 procs"
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
          "id": "34b872ac2fc868264bd7e8ce188dd74a515e4f28",
          "message": "perf: replace regex with line scanning for fingerprint operations\n\nReplace regex pattern matching with efficient line-by-line scanning in\nRemoveFingerprintFromFrontmatter and VerifyFingerprint, eliminating\nregex engine overhead:\n- RemoveFingerprintFromFrontmatter: 83.9% faster (825 -> 133 ns/op)\n- VerifyFingerprint: 69.7% faster (2032 -> 615 ns/op)\n- ProcessContent: 44.1% faster (1911 -> 1066 ns/op)\n- ProcessContentNoFrontmatter: 27.1% faster (421 -> 307.7 ns/op)\n- ProcessContentLarge: 13.4% faster (29029 -> 25133 ns/op)",
          "timestamp": "2026-01-10T23:48:26Z",
          "tree_id": "988b5459bd15b8a015a09d09554e6b4ef7ea67ba",
          "url": "https://github.com/inful/mdfp/commit/34b872ac2fc868264bd7e8ce188dd74a515e4f28"
        },
        "date": 1768088946312,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21253970 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.34,
            "unit": "ns/op",
            "extra": "21253970 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21253970 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21253970 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1571,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "762216 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1571,
            "unit": "ns/op",
            "extra": "762216 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "762216 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "762216 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 176.1,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6262046 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 176.1,
            "unit": "ns/op",
            "extra": "6262046 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6262046 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6262046 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 41094,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29146 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 41094,
            "unit": "ns/op",
            "extra": "29146 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29146 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29146 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 180,
            "unit": "ns/op\t     176 B/op\t       3 allocs/op",
            "extra": "6722618 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 180,
            "unit": "ns/op",
            "extra": "6722618 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "6722618 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "6722618 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 76.1,
            "unit": "ns/op\t     144 B/op\t       2 allocs/op",
            "extra": "14995087 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 76.1,
            "unit": "ns/op",
            "extra": "14995087 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "14995087 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "14995087 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1390,
            "unit": "ns/op\t    2328 B/op\t      12 allocs/op",
            "extra": "809593 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1390,
            "unit": "ns/op",
            "extra": "809593 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 2328,
            "unit": "B/op",
            "extra": "809593 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "809593 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 454.7,
            "unit": "ns/op\t     584 B/op\t       8 allocs/op",
            "extra": "2643673 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 454.7,
            "unit": "ns/op",
            "extra": "2643673 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 584,
            "unit": "B/op",
            "extra": "2643673 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "2643673 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34975,
            "unit": "ns/op\t   82368 B/op\t      10 allocs/op",
            "extra": "34959 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34975,
            "unit": "ns/op",
            "extra": "34959 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82368,
            "unit": "B/op",
            "extra": "34959 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "34959 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 860.1,
            "unit": "ns/op\t     848 B/op\t       5 allocs/op",
            "extra": "1384689 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 860.1,
            "unit": "ns/op",
            "extra": "1384689 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 848,
            "unit": "B/op",
            "extra": "1384689 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1384689 times\n4 procs"
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
          "id": "2fdb95f5dd1f1d73a1d8af4499ece1f496150cf9",
          "message": "chore: fix remaining golangci-lint issues\n\n- Remove unused regexp import\n- Remove unused splitParts constant from RemoveFingerprintFromFrontmatter\n- Add nolint directives for strings.Split (modernize check) to maintain\n  performance-optimized code (avoid SplitSeq for performance reasons)",
          "timestamp": "2026-01-10T23:50:05Z",
          "tree_id": "0ffd3f11584a753206ff970989ab33244496f20f",
          "url": "https://github.com/inful/mdfp/commit/2fdb95f5dd1f1d73a1d8af4499ece1f496150cf9"
        },
        "date": 1768089109185,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21316728 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.14,
            "unit": "ns/op",
            "extra": "21316728 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21316728 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21316728 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1545,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "758994 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1545,
            "unit": "ns/op",
            "extra": "758994 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "758994 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "758994 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 174.3,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6863966 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 174.3,
            "unit": "ns/op",
            "extra": "6863966 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6863966 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6863966 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 41013,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29126 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 41013,
            "unit": "ns/op",
            "extra": "29126 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29126 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29126 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 183,
            "unit": "ns/op\t     176 B/op\t       3 allocs/op",
            "extra": "6696416 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 183,
            "unit": "ns/op",
            "extra": "6696416 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "6696416 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "6696416 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 72.79,
            "unit": "ns/op\t     144 B/op\t       2 allocs/op",
            "extra": "16131098 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 72.79,
            "unit": "ns/op",
            "extra": "16131098 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "16131098 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16131098 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1372,
            "unit": "ns/op\t    2328 B/op\t      12 allocs/op",
            "extra": "830785 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1372,
            "unit": "ns/op",
            "extra": "830785 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 2328,
            "unit": "B/op",
            "extra": "830785 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "830785 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 447.6,
            "unit": "ns/op\t     584 B/op\t       8 allocs/op",
            "extra": "2737160 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 447.6,
            "unit": "ns/op",
            "extra": "2737160 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 584,
            "unit": "B/op",
            "extra": "2737160 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "2737160 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 35619,
            "unit": "ns/op\t   82368 B/op\t      10 allocs/op",
            "extra": "34495 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 35619,
            "unit": "ns/op",
            "extra": "34495 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82368,
            "unit": "B/op",
            "extra": "34495 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "34495 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 870.1,
            "unit": "ns/op\t     848 B/op\t       5 allocs/op",
            "extra": "1378423 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 870.1,
            "unit": "ns/op",
            "extra": "1378423 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 848,
            "unit": "B/op",
            "extra": "1378423 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1378423 times\n4 procs"
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
          "id": "2ad99e2deaf7949db6359dc64fd3bdae7d4a8221",
          "message": "feat: add streaming hash function for memory-efficient hashing\n\nIntroduce CalculateFingerprintReader() which uses sha256.New() with io.Copy\nfor streaming computation. This enables memory-efficient fingerprinting of\nvery large files or network streams without loading entire content into memory.\n\nBenefits:\n- O(1) memory usage regardless of content size\n- Processes data in chunks for improved cache locality\n- Public API available for direct reader-based workflows\n\nThe existing CalculateFingerprint() remains unchanged for backward\ncompatibility and typical use cases.",
          "timestamp": "2026-01-10T23:53:43Z",
          "tree_id": "17c132b9c74f525bd6257b3962ffedcc492b9de7",
          "url": "https://github.com/inful/mdfp/commit/2ad99e2deaf7949db6359dc64fd3bdae7d4a8221"
        },
        "date": 1768089295276,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21297591 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.21,
            "unit": "ns/op",
            "extra": "21297591 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21297591 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21297591 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1573,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "762919 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1573,
            "unit": "ns/op",
            "extra": "762919 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "762919 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "762919 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 174.6,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6873049 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 174.6,
            "unit": "ns/op",
            "extra": "6873049 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6873049 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6873049 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 41028,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29337 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 41028,
            "unit": "ns/op",
            "extra": "29337 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29337 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29337 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 179.3,
            "unit": "ns/op\t     176 B/op\t       3 allocs/op",
            "extra": "6711585 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 179.3,
            "unit": "ns/op",
            "extra": "6711585 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "6711585 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "6711585 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 72.09,
            "unit": "ns/op\t     144 B/op\t       2 allocs/op",
            "extra": "16447875 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 72.09,
            "unit": "ns/op",
            "extra": "16447875 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "16447875 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "16447875 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1348,
            "unit": "ns/op\t    2328 B/op\t      12 allocs/op",
            "extra": "789664 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1348,
            "unit": "ns/op",
            "extra": "789664 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 2328,
            "unit": "B/op",
            "extra": "789664 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "789664 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 442.8,
            "unit": "ns/op\t     584 B/op\t       8 allocs/op",
            "extra": "2714846 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 442.8,
            "unit": "ns/op",
            "extra": "2714846 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 584,
            "unit": "B/op",
            "extra": "2714846 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "2714846 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 33930,
            "unit": "ns/op\t   82368 B/op\t      10 allocs/op",
            "extra": "35102 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 33930,
            "unit": "ns/op",
            "extra": "35102 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82368,
            "unit": "B/op",
            "extra": "35102 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "35102 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 866.8,
            "unit": "ns/op\t     848 B/op\t       5 allocs/op",
            "extra": "1360387 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 866.8,
            "unit": "ns/op",
            "extra": "1360387 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 848,
            "unit": "B/op",
            "extra": "1360387 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1360387 times\n4 procs"
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
          "id": "f10bc0821afb9c73813997c2970257ea0bfd76da",
          "message": "chore: fix linter issues in mdfp_bench_test.go",
          "timestamp": "2026-01-10T23:58:25Z",
          "tree_id": "e67a3a60dd13e42651ac0a71c5dbb0100c1bce6f",
          "url": "https://github.com/inful/mdfp/commit/f10bc0821afb9c73813997c2970257ea0bfd76da"
        },
        "date": 1768089551053,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20932936 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.42,
            "unit": "ns/op",
            "extra": "20932936 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20932936 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20932936 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1563,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "759829 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1563,
            "unit": "ns/op",
            "extra": "759829 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "759829 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "759829 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 188.2,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6448359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 188.2,
            "unit": "ns/op",
            "extra": "6448359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6448359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6448359 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40592,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29548 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40592,
            "unit": "ns/op",
            "extra": "29548 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29548 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29548 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 196.8,
            "unit": "ns/op\t     160 B/op\t       4 allocs/op",
            "extra": "6082827 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 196.8,
            "unit": "ns/op",
            "extra": "6082827 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 160,
            "unit": "B/op",
            "extra": "6082827 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6082827 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 74.93,
            "unit": "ns/op\t     144 B/op\t       2 allocs/op",
            "extra": "15774039 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 74.93,
            "unit": "ns/op",
            "extra": "15774039 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 144,
            "unit": "B/op",
            "extra": "15774039 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "15774039 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1350,
            "unit": "ns/op\t    2280 B/op\t      13 allocs/op",
            "extra": "892872 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1350,
            "unit": "ns/op",
            "extra": "892872 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 2280,
            "unit": "B/op",
            "extra": "892872 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "892872 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 447.6,
            "unit": "ns/op\t     584 B/op\t       8 allocs/op",
            "extra": "2663340 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 447.6,
            "unit": "ns/op",
            "extra": "2663340 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 584,
            "unit": "B/op",
            "extra": "2663340 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 8,
            "unit": "allocs/op",
            "extra": "2663340 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 33804,
            "unit": "ns/op\t   82368 B/op\t      10 allocs/op",
            "extra": "35630 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 33804,
            "unit": "ns/op",
            "extra": "35630 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82368,
            "unit": "B/op",
            "extra": "35630 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 10,
            "unit": "allocs/op",
            "extra": "35630 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 811,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1486180 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 811,
            "unit": "ns/op",
            "extra": "1486180 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1486180 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1486180 times\n4 procs"
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
          "id": "95df69fb2b389c63893362c7b5cdde3d3ec5cca3",
          "message": "chore: fix golangci-lint issues\n\n- Replace interface{} with any for modernize compliance\n- Add constants for magic numbers (defaultSliceSize, growthOverhead)\n- Ensure all linters pass with zero issues",
          "timestamp": "2026-01-11T00:11:19Z",
          "tree_id": "0ae9a4eff4adb867afd7f096df9cd4ae2045b552",
          "url": "https://github.com/inful/mdfp/commit/95df69fb2b389c63893362c7b5cdde3d3ec5cca3"
        },
        "date": 1768090330913,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21214153 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.5,
            "unit": "ns/op",
            "extra": "21214153 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21214153 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21214153 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1561,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "738933 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1561,
            "unit": "ns/op",
            "extra": "738933 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "738933 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "738933 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 183.2,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6498140 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 183.2,
            "unit": "ns/op",
            "extra": "6498140 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6498140 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6498140 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40989,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29342 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40989,
            "unit": "ns/op",
            "extra": "29342 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29342 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29342 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 94.17,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "12440532 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 94.17,
            "unit": "ns/op",
            "extra": "12440532 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "12440532 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12440532 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 68.53,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17622007 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 68.53,
            "unit": "ns/op",
            "extra": "17622007 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17622007 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17622007 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1089,
            "unit": "ns/op\t    1744 B/op\t       6 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1089,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1744,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 431.4,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2786757 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 431.4,
            "unit": "ns/op",
            "extra": "2786757 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2786757 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2786757 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 33868,
            "unit": "ns/op\t   82174 B/op\t       5 allocs/op",
            "extra": "35426 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 33868,
            "unit": "ns/op",
            "extra": "35426 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82174,
            "unit": "B/op",
            "extra": "35426 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35426 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 806.4,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1491788 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 806.4,
            "unit": "ns/op",
            "extra": "1491788 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1491788 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1491788 times\n4 procs"
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
          "id": "b7017b4bc656d85be079549af3b8dceac62d7e04",
          "message": "test: improve test coverage from 89.2% to 95.7%\n\nAdd comprehensive tests for previously uncovered code paths:\n\n- TestCalculateFingerprintReader: Test streaming hash function with\n  various content sizes (simple, empty, multiline, large)\n- TestProcessFileErrors: Test error handling for file operations\n  (nonexistent files, read-only directories, invalid markdown,\n  no-change scenarios)\n- TestProcessContentNoFrontmatter: Test content without frontmatter\n- Enhanced VerifyFingerprint tests: Add edge cases for no frontmatter\n  and malformed fingerprint lines\n\nCoverage improvements by function:\n- CalculateFingerprintReader: 0% → 75% (+75%)\n- ProcessFile: 72.7% → 90.9% (+18.2%)\n- ProcessContent: 88.9% → 94.4% (+5.5%)\n\nTotal coverage: 89.2% → 95.7% (+6.5 percentage points)",
          "timestamp": "2026-01-11T00:16:58Z",
          "tree_id": "855067c794cebf4f7a913f42e0054daed2cf53a6",
          "url": "https://github.com/inful/mdfp/commit/b7017b4bc656d85be079549af3b8dceac62d7e04"
        },
        "date": 1768090708643,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 55.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21694456 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 55.33,
            "unit": "ns/op",
            "extra": "21694456 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21694456 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21694456 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1550,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "761690 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1550,
            "unit": "ns/op",
            "extra": "761690 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "761690 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "761690 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 176.6,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6661500 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 176.6,
            "unit": "ns/op",
            "extra": "6661500 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6661500 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6661500 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40782,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29505 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40782,
            "unit": "ns/op",
            "extra": "29505 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29505 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29505 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 96.35,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11728090 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 96.35,
            "unit": "ns/op",
            "extra": "11728090 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11728090 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11728090 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 65.36,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17355632 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 65.36,
            "unit": "ns/op",
            "extra": "17355632 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17355632 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17355632 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1110,
            "unit": "ns/op\t    1744 B/op\t       6 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1110,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1744,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 395.2,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2989489 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 395.2,
            "unit": "ns/op",
            "extra": "2989489 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2989489 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2989489 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34810,
            "unit": "ns/op\t   82174 B/op\t       5 allocs/op",
            "extra": "34630 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34810,
            "unit": "ns/op",
            "extra": "34630 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82174,
            "unit": "B/op",
            "extra": "34630 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "34630 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 815.6,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1466394 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 815.6,
            "unit": "ns/op",
            "extra": "1466394 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1466394 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1466394 times\n4 procs"
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
          "id": "73368aa0f9fdae7efd7e9f45810da62296a66f0d",
          "message": "docs: add testable examples for all public API functions\n\nAdd comprehensive example functions demonstrating how to use each\npublic API function:\n\n- ExampleParseMarkdown: Parse markdown with YAML frontmatter\n- ExampleCalculateFingerprint: Calculate SHA256 fingerprint of content\n- ExampleProcessContent: Add fingerprint to markdown content\n- ExampleAddFingerprintToFrontmatter: Add fingerprint field to frontmatter\n- ExampleRemoveFingerprintFromFrontmatter: Remove fingerprint from frontmatter\n- ExampleVerifyFingerprint: Verify content hasn't been modified\n- ExampleCalculateFingerprintReader: Calculate fingerprint from io.Reader\n\nAll examples:\n- Follow Go documentation conventions\n- Are executable and pass as tests\n- Show common usage patterns\n- Include realistic sample data\n- Will appear in godoc documentation\n\nThese examples improve library discoverability and provide working code\nthat users can copy and adapt for their own use cases.",
          "timestamp": "2026-01-11T00:20:22Z",
          "tree_id": "667af367b60765f8d7fd4c548bed4832ff45ea4d",
          "url": "https://github.com/inful/mdfp/commit/73368aa0f9fdae7efd7e9f45810da62296a66f0d"
        },
        "date": 1768090873299,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 55.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21734788 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 55.31,
            "unit": "ns/op",
            "extra": "21734788 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21734788 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21734788 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1543,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "768363 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1543,
            "unit": "ns/op",
            "extra": "768363 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "768363 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "768363 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 175.8,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6840607 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 175.8,
            "unit": "ns/op",
            "extra": "6840607 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6840607 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6840607 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40565,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29574 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40565,
            "unit": "ns/op",
            "extra": "29574 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29574 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29574 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 94.32,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "12741996 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 94.32,
            "unit": "ns/op",
            "extra": "12741996 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "12741996 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12741996 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 65.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "18693139 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 65.5,
            "unit": "ns/op",
            "extra": "18693139 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "18693139 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "18693139 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1118,
            "unit": "ns/op\t    1744 B/op\t       6 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1118,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1744,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 405.3,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "3053220 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 405.3,
            "unit": "ns/op",
            "extra": "3053220 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "3053220 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3053220 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 33781,
            "unit": "ns/op\t   82174 B/op\t       5 allocs/op",
            "extra": "35118 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 33781,
            "unit": "ns/op",
            "extra": "35118 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82174,
            "unit": "B/op",
            "extra": "35118 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35118 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 793.6,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1513898 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 793.6,
            "unit": "ns/op",
            "extra": "1513898 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1513898 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1513898 times\n4 procs"
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
          "id": "2f7c7644bf70442a41c4fd28179e9cbd043c7fa2",
          "message": "chore: fix all golangci-lint issues\n\nFix the following linting issues:\n\n- cyclop: Reduce cyclomatic complexity of TestProcessFileErrors\n  by extracting subtests into helper functions\n- errcheck: Check error return value of os.Chmod in deferred cleanup\n- thelper: Add t.Helper() calls to test helper functions\n- goconst: Extract repeated string literal into testFrontmatterContent constant\n- govet: Fix variable shadowing in TestProcessFileErrors (err → err2)\n- gosec: Add nolint directive for intentional permission restoration\n\nAll refactored tests maintain full coverage and pass successfully.",
          "timestamp": "2026-01-11T00:23:55Z",
          "tree_id": "c2dbe87e034a4d11a89ccff1fad1422f650b9a4c",
          "url": "https://github.com/inful/mdfp/commit/2f7c7644bf70442a41c4fd28179e9cbd043c7fa2"
        },
        "date": 1768091069032,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18561668 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.61,
            "unit": "ns/op",
            "extra": "18561668 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18561668 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18561668 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1551,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "766713 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1551,
            "unit": "ns/op",
            "extra": "766713 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "766713 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "766713 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 176.2,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6801726 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 176.2,
            "unit": "ns/op",
            "extra": "6801726 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6801726 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6801726 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40988,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29209 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40988,
            "unit": "ns/op",
            "extra": "29209 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29209 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29209 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 96.39,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "12377431 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 96.39,
            "unit": "ns/op",
            "extra": "12377431 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "12377431 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12377431 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 66.09,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17884780 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 66.09,
            "unit": "ns/op",
            "extra": "17884780 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17884780 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17884780 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1127,
            "unit": "ns/op\t    1744 B/op\t       6 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1127,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1744,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 396.7,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2993466 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 396.7,
            "unit": "ns/op",
            "extra": "2993466 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2993466 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2993466 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34284,
            "unit": "ns/op\t   82174 B/op\t       5 allocs/op",
            "extra": "35247 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34284,
            "unit": "ns/op",
            "extra": "35247 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82174,
            "unit": "B/op",
            "extra": "35247 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35247 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 812,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1483605 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 812,
            "unit": "ns/op",
            "extra": "1483605 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1483605 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1483605 times\n4 procs"
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
          "id": "2e8126cf6b1e4308ef0d0ef87688b9264394d3fe",
          "message": "chore: ignore some more",
          "timestamp": "2026-01-11T00:26:44Z",
          "tree_id": "2304c0d32d1bb5469d3b344157f85ef1fa3fd945",
          "url": "https://github.com/inful/mdfp/commit/2e8126cf6b1e4308ef0d0ef87688b9264394d3fe"
        },
        "date": 1768091301215,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 55.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21728726 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 55.19,
            "unit": "ns/op",
            "extra": "21728726 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21728726 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21728726 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1634,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "731961 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1634,
            "unit": "ns/op",
            "extra": "731961 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "731961 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "731961 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 182.5,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6501996 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 182.5,
            "unit": "ns/op",
            "extra": "6501996 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6501996 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6501996 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 42706,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "28256 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 42706,
            "unit": "ns/op",
            "extra": "28256 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "28256 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "28256 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 97.06,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "12195514 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 97.06,
            "unit": "ns/op",
            "extra": "12195514 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "12195514 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12195514 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 69.94,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "16699768 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 69.94,
            "unit": "ns/op",
            "extra": "16699768 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "16699768 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16699768 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1193,
            "unit": "ns/op\t    1744 B/op\t       6 allocs/op",
            "extra": "987238 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1193,
            "unit": "ns/op",
            "extra": "987238 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1744,
            "unit": "B/op",
            "extra": "987238 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "987238 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 405.4,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2914842 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 405.4,
            "unit": "ns/op",
            "extra": "2914842 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2914842 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2914842 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 35611,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "33938 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 35611,
            "unit": "ns/op",
            "extra": "33938 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "33938 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "33938 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 836.6,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1434324 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 836.6,
            "unit": "ns/op",
            "extra": "1434324 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1434324 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1434324 times\n4 procs"
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
          "id": "312393ab3f4fed37893c92e0115b2b826f420998",
          "message": "feat: add stdin/stdout support for pipeline usage\n\n- Add processStdin() function to read from stdin and process/verify content\n- Split verify and update logic into separate helper functions for clarity\n- Replace deprecated io/ioutil with io package\n- Use os.Stdout.WriteString() for compatible output handling\n- Maintain both update and verify modes via pipes\n- Examples:\n  `cat file.md | mdfp > output.md` - add/update fingerprint\n  `cat file.md | mdfp -verify -v` - verify fingerprint via pipe",
          "timestamp": "2026-01-11T00:53:44Z",
          "tree_id": "a6480f20b4f7ea2d53dd8d25e315d2d2590448e2",
          "url": "https://github.com/inful/mdfp/commit/312393ab3f4fed37893c92e0115b2b826f420998"
        },
        "date": 1768092868375,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 55.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21597117 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 55.22,
            "unit": "ns/op",
            "extra": "21597117 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21597117 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21597117 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1545,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "742665 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1545,
            "unit": "ns/op",
            "extra": "742665 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "742665 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "742665 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 179.5,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6760465 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 179.5,
            "unit": "ns/op",
            "extra": "6760465 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6760465 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6760465 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40484,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29604 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40484,
            "unit": "ns/op",
            "extra": "29604 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29604 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29604 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 99.01,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11389669 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 99.01,
            "unit": "ns/op",
            "extra": "11389669 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11389669 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11389669 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 71.08,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17381670 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 71.08,
            "unit": "ns/op",
            "extra": "17381670 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17381670 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17381670 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1127,
            "unit": "ns/op\t    1744 B/op\t       6 allocs/op",
            "extra": "940980 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1127,
            "unit": "ns/op",
            "extra": "940980 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1744,
            "unit": "B/op",
            "extra": "940980 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "940980 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 400.1,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2973392 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 400.1,
            "unit": "ns/op",
            "extra": "2973392 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2973392 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2973392 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 33960,
            "unit": "ns/op\t   82174 B/op\t       5 allocs/op",
            "extra": "34690 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 33960,
            "unit": "ns/op",
            "extra": "34690 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82174,
            "unit": "B/op",
            "extra": "34690 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "34690 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 798.9,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1507617 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 798.9,
            "unit": "ns/op",
            "extra": "1507617 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1507617 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1507617 times\n4 procs"
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
          "id": "b566f681e8876bb6e483cb076fe8edcd0868ebee",
          "message": "docs: add stdin/stdout pipeline examples to README\n\n- Document pipe usage for adding/updating fingerprints\n- Show verification mode via stdin examples\n- Include chaining with other Unix commands (curl, gzip)\n- Update README fingerprint to reflect content changes",
          "timestamp": "2026-01-11T00:54:46Z",
          "tree_id": "9d2de234e97e9cd49a05b7fdb831c3b8373c7a53",
          "url": "https://github.com/inful/mdfp/commit/b566f681e8876bb6e483cb076fe8edcd0868ebee"
        },
        "date": 1768092956621,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 55.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21804092 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 55.23,
            "unit": "ns/op",
            "extra": "21804092 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21804092 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21804092 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1553,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "743953 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1553,
            "unit": "ns/op",
            "extra": "743953 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "743953 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "743953 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 177.8,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6753214 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 177.8,
            "unit": "ns/op",
            "extra": "6753214 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6753214 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6753214 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40732,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29462 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40732,
            "unit": "ns/op",
            "extra": "29462 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29462 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29462 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 95.49,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "12217504 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 95.49,
            "unit": "ns/op",
            "extra": "12217504 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "12217504 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12217504 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 65.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17429154 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 65.1,
            "unit": "ns/op",
            "extra": "17429154 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17429154 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17429154 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1100,
            "unit": "ns/op\t    1744 B/op\t       6 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1100,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1744,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 397.5,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2909016 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 397.5,
            "unit": "ns/op",
            "extra": "2909016 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2909016 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2909016 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 33973,
            "unit": "ns/op\t   82174 B/op\t       5 allocs/op",
            "extra": "35216 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 33973,
            "unit": "ns/op",
            "extra": "35216 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82174,
            "unit": "B/op",
            "extra": "35216 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35216 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 815.2,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1462438 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 815.2,
            "unit": "ns/op",
            "extra": "1462438 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1462438 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1462438 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "b566f681e8876bb6e483cb076fe8edcd0868ebee",
          "message": "docs: add stdin/stdout pipeline examples to README\n\n- Document pipe usage for adding/updating fingerprints\n- Show verification mode via stdin examples\n- Include chaining with other Unix commands (curl, gzip)\n- Update README fingerprint to reflect content changes",
          "timestamp": "2026-01-11T00:54:46Z",
          "url": "https://github.com/inful/mdfp/commit/b566f681e8876bb6e483cb076fe8edcd0868ebee"
        },
        "date": 1768188738002,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 55.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21672577 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 55.87,
            "unit": "ns/op",
            "extra": "21672577 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21672577 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21672577 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1583,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "762628 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1583,
            "unit": "ns/op",
            "extra": "762628 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "762628 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "762628 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 177.4,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6566458 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 177.4,
            "unit": "ns/op",
            "extra": "6566458 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6566458 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6566458 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40852,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29350 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40852,
            "unit": "ns/op",
            "extra": "29350 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29350 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29350 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 96.89,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11495497 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 96.89,
            "unit": "ns/op",
            "extra": "11495497 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11495497 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11495497 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 65.39,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17966210 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 65.39,
            "unit": "ns/op",
            "extra": "17966210 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17966210 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17966210 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1119,
            "unit": "ns/op\t    1744 B/op\t       6 allocs/op",
            "extra": "945757 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1119,
            "unit": "ns/op",
            "extra": "945757 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1744,
            "unit": "B/op",
            "extra": "945757 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "945757 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 408,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2820392 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 408,
            "unit": "ns/op",
            "extra": "2820392 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2820392 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2820392 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34218,
            "unit": "ns/op\t   82174 B/op\t       5 allocs/op",
            "extra": "35115 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34218,
            "unit": "ns/op",
            "extra": "35115 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82174,
            "unit": "B/op",
            "extra": "35115 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35115 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 798.1,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1501894 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 798.1,
            "unit": "ns/op",
            "extra": "1501894 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1501894 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1501894 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "b566f681e8876bb6e483cb076fe8edcd0868ebee",
          "message": "docs: add stdin/stdout pipeline examples to README\n\n- Document pipe usage for adding/updating fingerprints\n- Show verification mode via stdin examples\n- Include chaining with other Unix commands (curl, gzip)\n- Update README fingerprint to reflect content changes",
          "timestamp": "2026-01-11T00:54:46Z",
          "url": "https://github.com/inful/mdfp/commit/b566f681e8876bb6e483cb076fe8edcd0868ebee"
        },
        "date": 1768793545446,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21266574 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.23,
            "unit": "ns/op",
            "extra": "21266574 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21266574 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21266574 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1580,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "743925 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1580,
            "unit": "ns/op",
            "extra": "743925 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "743925 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "743925 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 182,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6633102 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 182,
            "unit": "ns/op",
            "extra": "6633102 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6633102 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6633102 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40872,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29377 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40872,
            "unit": "ns/op",
            "extra": "29377 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29377 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29377 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 108.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10933383 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 108.7,
            "unit": "ns/op",
            "extra": "10933383 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10933383 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10933383 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 66.87,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "15416910 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 66.87,
            "unit": "ns/op",
            "extra": "15416910 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "15416910 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "15416910 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1128,
            "unit": "ns/op\t    1744 B/op\t       6 allocs/op",
            "extra": "955204 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1128,
            "unit": "ns/op",
            "extra": "955204 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1744,
            "unit": "B/op",
            "extra": "955204 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "955204 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 401.7,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2946322 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 401.7,
            "unit": "ns/op",
            "extra": "2946322 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2946322 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2946322 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34101,
            "unit": "ns/op\t   82174 B/op\t       5 allocs/op",
            "extra": "34614 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34101,
            "unit": "ns/op",
            "extra": "34614 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82174,
            "unit": "B/op",
            "extra": "34614 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "34614 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 814.5,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1484078 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 814.5,
            "unit": "ns/op",
            "extra": "1484078 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1484078 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1484078 times\n4 procs"
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
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "tree_id": "5b996c26ec084664a4f7300cf349710038109e6e",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1768948931757,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 57.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21046042 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 57.91,
            "unit": "ns/op",
            "extra": "21046042 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21046042 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21046042 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1576,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "740890 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1576,
            "unit": "ns/op",
            "extra": "740890 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "740890 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "740890 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 185.5,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6480672 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 185.5,
            "unit": "ns/op",
            "extra": "6480672 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6480672 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6480672 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 41396,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "28761 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 41396,
            "unit": "ns/op",
            "extra": "28761 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "28761 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "28761 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 116.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10493665 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 116.4,
            "unit": "ns/op",
            "extra": "10493665 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10493665 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10493665 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 21.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53830713 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 21.91,
            "unit": "ns/op",
            "extra": "53830713 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53830713 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53830713 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 68.22,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17482354 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 68.22,
            "unit": "ns/op",
            "extra": "17482354 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17482354 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17482354 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1012,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1012,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 406.1,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2949150 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 406.1,
            "unit": "ns/op",
            "extra": "2949150 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2949150 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2949150 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34402,
            "unit": "ns/op\t   82174 B/op\t       5 allocs/op",
            "extra": "34660 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34402,
            "unit": "ns/op",
            "extra": "34660 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82174,
            "unit": "B/op",
            "extra": "34660 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "34660 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 808.8,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1490853 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 808.8,
            "unit": "ns/op",
            "extra": "1490853 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1490853 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1490853 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1598,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "734942 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1598,
            "unit": "ns/op",
            "extra": "734942 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "734942 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "734942 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2059,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "577371 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2059,
            "unit": "ns/op",
            "extra": "577371 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "577371 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "577371 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 41845,
            "unit": "ns/op\t   57793 B/op\t      12 allocs/op",
            "extra": "28602 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 41845,
            "unit": "ns/op",
            "extra": "28602 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57793,
            "unit": "B/op",
            "extra": "28602 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "28602 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1769398591333,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20954071 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.77,
            "unit": "ns/op",
            "extra": "20954071 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20954071 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20954071 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1579,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "735856 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1579,
            "unit": "ns/op",
            "extra": "735856 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "735856 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "735856 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 188.8,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "5742794 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 188.8,
            "unit": "ns/op",
            "extra": "5742794 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "5742794 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5742794 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40874,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29418 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40874,
            "unit": "ns/op",
            "extra": "29418 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29418 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29418 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 112.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10509562 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 112.9,
            "unit": "ns/op",
            "extra": "10509562 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10509562 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10509562 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 21.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53853954 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 21.85,
            "unit": "ns/op",
            "extra": "53853954 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53853954 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53853954 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 67.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17660685 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 67.5,
            "unit": "ns/op",
            "extra": "17660685 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17660685 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17660685 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1024,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1024,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 399.9,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2974810 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 399.9,
            "unit": "ns/op",
            "extra": "2974810 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2974810 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2974810 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34084,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "34647 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34084,
            "unit": "ns/op",
            "extra": "34647 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "34647 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "34647 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 804.5,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1490017 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 804.5,
            "unit": "ns/op",
            "extra": "1490017 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1490017 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1490017 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1586,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "767746 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1586,
            "unit": "ns/op",
            "extra": "767746 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "767746 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "767746 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2054,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "595644 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2054,
            "unit": "ns/op",
            "extra": "595644 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "595644 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "595644 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 41802,
            "unit": "ns/op\t   57793 B/op\t      12 allocs/op",
            "extra": "28647 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 41802,
            "unit": "ns/op",
            "extra": "28647 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57793,
            "unit": "B/op",
            "extra": "28647 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "28647 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1770004236486,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21108534 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.72,
            "unit": "ns/op",
            "extra": "21108534 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21108534 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21108534 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1563,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "748452 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1563,
            "unit": "ns/op",
            "extra": "748452 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "748452 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "748452 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 184.6,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6537382 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 184.6,
            "unit": "ns/op",
            "extra": "6537382 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6537382 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6537382 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40632,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29343 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40632,
            "unit": "ns/op",
            "extra": "29343 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29343 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29343 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 114.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10549432 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 114.8,
            "unit": "ns/op",
            "extra": "10549432 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10549432 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10549432 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 21.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54845180 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 21.83,
            "unit": "ns/op",
            "extra": "54845180 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54845180 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54845180 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 66.17,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17773294 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 66.17,
            "unit": "ns/op",
            "extra": "17773294 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17773294 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17773294 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1009,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1009,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 403.9,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2867128 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 403.9,
            "unit": "ns/op",
            "extra": "2867128 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2867128 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2867128 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34199,
            "unit": "ns/op\t   82174 B/op\t       5 allocs/op",
            "extra": "35296 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34199,
            "unit": "ns/op",
            "extra": "35296 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82174,
            "unit": "B/op",
            "extra": "35296 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35296 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 800.8,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1492838 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 800.8,
            "unit": "ns/op",
            "extra": "1492838 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1492838 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1492838 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1583,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "746010 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1583,
            "unit": "ns/op",
            "extra": "746010 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "746010 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "746010 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2063,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "559975 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2063,
            "unit": "ns/op",
            "extra": "559975 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "559975 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "559975 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 41814,
            "unit": "ns/op\t   57793 B/op\t      12 allocs/op",
            "extra": "28662 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 41814,
            "unit": "ns/op",
            "extra": "28662 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57793,
            "unit": "B/op",
            "extra": "28662 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "28662 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1770609156005,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20990241 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.68,
            "unit": "ns/op",
            "extra": "20990241 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20990241 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20990241 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1633,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "732924 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1633,
            "unit": "ns/op",
            "extra": "732924 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "732924 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "732924 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 186.5,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6464827 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 186.5,
            "unit": "ns/op",
            "extra": "6464827 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6464827 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6464827 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 42488,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "28219 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 42488,
            "unit": "ns/op",
            "extra": "28219 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "28219 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "28219 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 114.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10300623 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 114.9,
            "unit": "ns/op",
            "extra": "10300623 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10300623 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10300623 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 22.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53894511 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 22.17,
            "unit": "ns/op",
            "extra": "53894511 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53894511 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53894511 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 67.57,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17040634 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 67.57,
            "unit": "ns/op",
            "extra": "17040634 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17040634 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17040634 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1039,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1039,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 407.2,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2930683 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 407.2,
            "unit": "ns/op",
            "extra": "2930683 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2930683 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2930683 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 35488,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "33394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 35488,
            "unit": "ns/op",
            "extra": "33394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "33394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "33394 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 822,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1458459 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 822,
            "unit": "ns/op",
            "extra": "1458459 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1458459 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1458459 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1670,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "722742 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1670,
            "unit": "ns/op",
            "extra": "722742 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "722742 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "722742 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2158,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "560836 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2158,
            "unit": "ns/op",
            "extra": "560836 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "560836 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "560836 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 43535,
            "unit": "ns/op\t   57793 B/op\t      12 allocs/op",
            "extra": "27656 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 43535,
            "unit": "ns/op",
            "extra": "27656 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57793,
            "unit": "B/op",
            "extra": "27656 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "27656 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1771213865345,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 55.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21321961 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 55.86,
            "unit": "ns/op",
            "extra": "21321961 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21321961 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21321961 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1598,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "735026 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1598,
            "unit": "ns/op",
            "extra": "735026 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "735026 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "735026 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 175.5,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6754834 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 175.5,
            "unit": "ns/op",
            "extra": "6754834 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6754834 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6754834 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40559,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29520 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40559,
            "unit": "ns/op",
            "extra": "29520 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29520 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29520 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 132.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "8942007 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 132.8,
            "unit": "ns/op",
            "extra": "8942007 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "8942007 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8942007 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 22.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54213750 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 22.28,
            "unit": "ns/op",
            "extra": "54213750 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54213750 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54213750 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 67.01,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "18037474 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 67.01,
            "unit": "ns/op",
            "extra": "18037474 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "18037474 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "18037474 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1017,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1017,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 393.6,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "3013032 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 393.6,
            "unit": "ns/op",
            "extra": "3013032 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "3013032 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3013032 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 33602,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "35578 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 33602,
            "unit": "ns/op",
            "extra": "35578 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "35578 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35578 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 802.8,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1491463 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 802.8,
            "unit": "ns/op",
            "extra": "1491463 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1491463 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1491463 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1595,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "736970 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1595,
            "unit": "ns/op",
            "extra": "736970 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "736970 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "736970 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2118,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "544432 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2118,
            "unit": "ns/op",
            "extra": "544432 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "544432 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "544432 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 41119,
            "unit": "ns/op\t   57792 B/op\t      12 allocs/op",
            "extra": "29149 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 41119,
            "unit": "ns/op",
            "extra": "29149 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57792,
            "unit": "B/op",
            "extra": "29149 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "29149 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1771818613854,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21354034 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.77,
            "unit": "ns/op",
            "extra": "21354034 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21354034 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21354034 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1577,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "736384 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1577,
            "unit": "ns/op",
            "extra": "736384 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "736384 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "736384 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 178,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6837454 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 178,
            "unit": "ns/op",
            "extra": "6837454 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6837454 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6837454 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40350,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29660 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40350,
            "unit": "ns/op",
            "extra": "29660 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29660 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29660 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 116.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10365798 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 116.1,
            "unit": "ns/op",
            "extra": "10365798 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10365798 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10365798 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 22.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53357785 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 22.03,
            "unit": "ns/op",
            "extra": "53357785 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53357785 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53357785 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 66.22,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17422227 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 66.22,
            "unit": "ns/op",
            "extra": "17422227 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17422227 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17422227 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 997.5,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1204268 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 997.5,
            "unit": "ns/op",
            "extra": "1204268 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1204268 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1204268 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 387.6,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "3100408 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 387.6,
            "unit": "ns/op",
            "extra": "3100408 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "3100408 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3100408 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 33367,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "35780 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 33367,
            "unit": "ns/op",
            "extra": "35780 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "35780 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35780 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 789.2,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1537842 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 789.2,
            "unit": "ns/op",
            "extra": "1537842 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1537842 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1537842 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1562,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "761739 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1562,
            "unit": "ns/op",
            "extra": "761739 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "761739 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "761739 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2047,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "585028 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2047,
            "unit": "ns/op",
            "extra": "585028 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "585028 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "585028 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 41681,
            "unit": "ns/op\t   57792 B/op\t      12 allocs/op",
            "extra": "29245 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 41681,
            "unit": "ns/op",
            "extra": "29245 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57792,
            "unit": "B/op",
            "extra": "29245 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "29245 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1772423181593,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21271356 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.38,
            "unit": "ns/op",
            "extra": "21271356 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21271356 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21271356 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1595,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "746527 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1595,
            "unit": "ns/op",
            "extra": "746527 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "746527 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "746527 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 173.2,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6817335 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 173.2,
            "unit": "ns/op",
            "extra": "6817335 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6817335 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6817335 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40546,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29588 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40546,
            "unit": "ns/op",
            "extra": "29588 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29588 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29588 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 117.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "9978591 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 117.8,
            "unit": "ns/op",
            "extra": "9978591 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "9978591 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9978591 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 21.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52739757 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 21.85,
            "unit": "ns/op",
            "extra": "52739757 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52739757 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52739757 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 68.88,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17292020 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 68.88,
            "unit": "ns/op",
            "extra": "17292020 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17292020 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17292020 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1014,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1014,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 392.4,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "3051553 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 392.4,
            "unit": "ns/op",
            "extra": "3051553 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "3051553 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3051553 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 35757,
            "unit": "ns/op\t   82174 B/op\t       5 allocs/op",
            "extra": "35394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 35757,
            "unit": "ns/op",
            "extra": "35394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82174,
            "unit": "B/op",
            "extra": "35394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35394 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 825.2,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1449859 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 825.2,
            "unit": "ns/op",
            "extra": "1449859 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1449859 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1449859 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1642,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "714786 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1642,
            "unit": "ns/op",
            "extra": "714786 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "714786 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "714786 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2157,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "564843 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2157,
            "unit": "ns/op",
            "extra": "564843 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "564843 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "564843 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 42078,
            "unit": "ns/op\t   57792 B/op\t      12 allocs/op",
            "extra": "28402 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 42078,
            "unit": "ns/op",
            "extra": "28402 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57792,
            "unit": "B/op",
            "extra": "28402 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "28402 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1773028017583,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 55.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21284990 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 55.83,
            "unit": "ns/op",
            "extra": "21284990 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21284990 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21284990 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1613,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "733390 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1613,
            "unit": "ns/op",
            "extra": "733390 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "733390 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "733390 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 174,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6894382 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 174,
            "unit": "ns/op",
            "extra": "6894382 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6894382 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6894382 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 41000,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29234 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 41000,
            "unit": "ns/op",
            "extra": "29234 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29234 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29234 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 120.5,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10222812 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 120.5,
            "unit": "ns/op",
            "extra": "10222812 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10222812 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10222812 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 21.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55295254 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 21.73,
            "unit": "ns/op",
            "extra": "55295254 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55295254 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55295254 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 67.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17257173 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 67.3,
            "unit": "ns/op",
            "extra": "17257173 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17257173 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17257173 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1020,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1020,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 399.5,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2999442 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 399.5,
            "unit": "ns/op",
            "extra": "2999442 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2999442 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2999442 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34336,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "35163 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34336,
            "unit": "ns/op",
            "extra": "35163 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "35163 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35163 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 836.8,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1445563 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 836.8,
            "unit": "ns/op",
            "extra": "1445563 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1445563 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1445563 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1628,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "677371 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1628,
            "unit": "ns/op",
            "extra": "677371 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "677371 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "677371 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2131,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "525312 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2131,
            "unit": "ns/op",
            "extra": "525312 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "525312 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "525312 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 42376,
            "unit": "ns/op\t   57793 B/op\t      12 allocs/op",
            "extra": "27559 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 42376,
            "unit": "ns/op",
            "extra": "27559 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57793,
            "unit": "B/op",
            "extra": "27559 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "27559 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1773633547146,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21223305 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.44,
            "unit": "ns/op",
            "extra": "21223305 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21223305 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21223305 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1589,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "748945 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1589,
            "unit": "ns/op",
            "extra": "748945 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "748945 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "748945 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 173.2,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "7008598 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 173.2,
            "unit": "ns/op",
            "extra": "7008598 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "7008598 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7008598 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40832,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29377 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40832,
            "unit": "ns/op",
            "extra": "29377 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29377 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29377 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 118.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10239764 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 118.6,
            "unit": "ns/op",
            "extra": "10239764 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10239764 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10239764 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 21.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54439371 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 21.6,
            "unit": "ns/op",
            "extra": "54439371 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54439371 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54439371 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 66.84,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17664724 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 66.84,
            "unit": "ns/op",
            "extra": "17664724 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17664724 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17664724 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1001,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1201102 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1001,
            "unit": "ns/op",
            "extra": "1201102 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1201102 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1201102 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 396.9,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "3015309 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 396.9,
            "unit": "ns/op",
            "extra": "3015309 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "3015309 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3015309 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34129,
            "unit": "ns/op\t   82174 B/op\t       5 allocs/op",
            "extra": "34888 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34129,
            "unit": "ns/op",
            "extra": "34888 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82174,
            "unit": "B/op",
            "extra": "34888 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "34888 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 817.6,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1467146 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 817.6,
            "unit": "ns/op",
            "extra": "1467146 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1467146 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1467146 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1614,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "764946 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1614,
            "unit": "ns/op",
            "extra": "764946 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "764946 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "764946 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2128,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "548041 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2128,
            "unit": "ns/op",
            "extra": "548041 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "548041 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "548041 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 41351,
            "unit": "ns/op\t   57792 B/op\t      12 allocs/op",
            "extra": "28916 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 41351,
            "unit": "ns/op",
            "extra": "28916 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57792,
            "unit": "B/op",
            "extra": "28916 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "28916 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1774237963194,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21279400 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.04,
            "unit": "ns/op",
            "extra": "21279400 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21279400 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21279400 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1605,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "744195 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1605,
            "unit": "ns/op",
            "extra": "744195 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "744195 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "744195 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 171.9,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6943813 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 171.9,
            "unit": "ns/op",
            "extra": "6943813 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6943813 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6943813 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40820,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29374 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40820,
            "unit": "ns/op",
            "extra": "29374 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29374 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29374 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 119.6,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10044546 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 119.6,
            "unit": "ns/op",
            "extra": "10044546 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10044546 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10044546 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 21.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53025267 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 21.57,
            "unit": "ns/op",
            "extra": "53025267 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53025267 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53025267 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 66.65,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17562058 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 66.65,
            "unit": "ns/op",
            "extra": "17562058 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17562058 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17562058 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1006,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1006,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 399.4,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "3004123 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 399.4,
            "unit": "ns/op",
            "extra": "3004123 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "3004123 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3004123 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 33980,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "35635 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 33980,
            "unit": "ns/op",
            "extra": "35635 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "35635 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35635 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 814.5,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1475006 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 814.5,
            "unit": "ns/op",
            "extra": "1475006 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1475006 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1475006 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1600,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "733431 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1600,
            "unit": "ns/op",
            "extra": "733431 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "733431 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "733431 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2091,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "570901 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2091,
            "unit": "ns/op",
            "extra": "570901 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "570901 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "570901 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 41597,
            "unit": "ns/op\t   57792 B/op\t      12 allocs/op",
            "extra": "28881 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 41597,
            "unit": "ns/op",
            "extra": "28881 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57792,
            "unit": "B/op",
            "extra": "28881 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "28881 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1774843205777,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 55.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21373678 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 55.75,
            "unit": "ns/op",
            "extra": "21373678 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21373678 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21373678 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1566,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "764601 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1566,
            "unit": "ns/op",
            "extra": "764601 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "764601 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "764601 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 171.4,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6924057 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 171.4,
            "unit": "ns/op",
            "extra": "6924057 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6924057 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6924057 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40673,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29301 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40673,
            "unit": "ns/op",
            "extra": "29301 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29301 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29301 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 117.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10144215 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 117.3,
            "unit": "ns/op",
            "extra": "10144215 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10144215 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10144215 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 21.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54867520 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 21.59,
            "unit": "ns/op",
            "extra": "54867520 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54867520 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54867520 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 66.24,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17801080 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 66.24,
            "unit": "ns/op",
            "extra": "17801080 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17801080 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17801080 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 999.5,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1200928 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 999.5,
            "unit": "ns/op",
            "extra": "1200928 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1200928 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1200928 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 398.4,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2918704 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 398.4,
            "unit": "ns/op",
            "extra": "2918704 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2918704 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2918704 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 33847,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "35175 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 33847,
            "unit": "ns/op",
            "extra": "35175 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "35175 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35175 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 804.3,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1483153 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 804.3,
            "unit": "ns/op",
            "extra": "1483153 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1483153 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1483153 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1571,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "736506 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1571,
            "unit": "ns/op",
            "extra": "736506 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "736506 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "736506 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2037,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "598528 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2037,
            "unit": "ns/op",
            "extra": "598528 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "598528 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "598528 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 41391,
            "unit": "ns/op\t   57792 B/op\t      12 allocs/op",
            "extra": "28857 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 41391,
            "unit": "ns/op",
            "extra": "28857 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57792,
            "unit": "B/op",
            "extra": "28857 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "28857 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1775447975961,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 55.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21095976 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 55.97,
            "unit": "ns/op",
            "extra": "21095976 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "21095976 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "21095976 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1617,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "749468 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1617,
            "unit": "ns/op",
            "extra": "749468 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "749468 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "749468 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 173.2,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6774060 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 173.2,
            "unit": "ns/op",
            "extra": "6774060 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6774060 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6774060 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40984,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29166 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40984,
            "unit": "ns/op",
            "extra": "29166 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29166 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29166 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 118.3,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10099928 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 118.3,
            "unit": "ns/op",
            "extra": "10099928 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10099928 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10099928 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 21.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55409976 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 21.68,
            "unit": "ns/op",
            "extra": "55409976 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "55409976 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "55409976 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 66.89,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17575020 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 66.89,
            "unit": "ns/op",
            "extra": "17575020 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17575020 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17575020 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1022,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1022,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 401.2,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2965995 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 401.2,
            "unit": "ns/op",
            "extra": "2965995 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2965995 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2965995 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34171,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "35216 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34171,
            "unit": "ns/op",
            "extra": "35216 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "35216 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35216 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 821.1,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1457714 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 821.1,
            "unit": "ns/op",
            "extra": "1457714 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1457714 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1457714 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1612,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "731293 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1612,
            "unit": "ns/op",
            "extra": "731293 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "731293 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "731293 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2096,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "557264 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2096,
            "unit": "ns/op",
            "extra": "557264 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "557264 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "557264 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 41607,
            "unit": "ns/op\t   57792 B/op\t      12 allocs/op",
            "extra": "28848 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 41607,
            "unit": "ns/op",
            "extra": "28848 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57792,
            "unit": "B/op",
            "extra": "28848 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "28848 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1776053100355,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 59.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20415488 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 59.52,
            "unit": "ns/op",
            "extra": "20415488 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20415488 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20415488 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1911,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "592333 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1911,
            "unit": "ns/op",
            "extra": "592333 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "592333 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "592333 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 173.7,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6874506 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 173.7,
            "unit": "ns/op",
            "extra": "6874506 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6874506 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6874506 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 50352,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "23892 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 50352,
            "unit": "ns/op",
            "extra": "23892 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "23892 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23892 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 118.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10351964 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 118.7,
            "unit": "ns/op",
            "extra": "10351964 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10351964 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10351964 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 18.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "64245543 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 18.57,
            "unit": "ns/op",
            "extra": "64245543 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "64245543 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "64245543 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 62.47,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19040342 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 62.47,
            "unit": "ns/op",
            "extra": "19040342 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19040342 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19040342 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1097,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1097,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 439.7,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2640846 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 439.7,
            "unit": "ns/op",
            "extra": "2640846 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2640846 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2640846 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 41172,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "29239 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 41172,
            "unit": "ns/op",
            "extra": "29239 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "29239 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "29239 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 914.8,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1310334 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 914.8,
            "unit": "ns/op",
            "extra": "1310334 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1310334 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1310334 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1909,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "631161 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1909,
            "unit": "ns/op",
            "extra": "631161 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "631161 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "631161 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2435,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "477481 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2435,
            "unit": "ns/op",
            "extra": "477481 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "477481 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "477481 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 50522,
            "unit": "ns/op\t   57793 B/op\t      12 allocs/op",
            "extra": "23868 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 50522,
            "unit": "ns/op",
            "extra": "23868 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57793,
            "unit": "B/op",
            "extra": "23868 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "23868 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1776657894474,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 56.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18747997 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 56.3,
            "unit": "ns/op",
            "extra": "18747997 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "18747997 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "18747997 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1634,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "711096 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1634,
            "unit": "ns/op",
            "extra": "711096 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "711096 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "711096 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 183.9,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6597386 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 183.9,
            "unit": "ns/op",
            "extra": "6597386 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6597386 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6597386 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 41289,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29100 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 41289,
            "unit": "ns/op",
            "extra": "29100 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29100 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29100 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 117.9,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10141665 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 117.9,
            "unit": "ns/op",
            "extra": "10141665 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10141665 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10141665 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 22.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54581480 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 22.2,
            "unit": "ns/op",
            "extra": "54581480 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54581480 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54581480 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 68.27,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "17253567 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 68.27,
            "unit": "ns/op",
            "extra": "17253567 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "17253567 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "17253567 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1092,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1092,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 408,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2941894 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 408,
            "unit": "ns/op",
            "extra": "2941894 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2941894 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2941894 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 34706,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "34183 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 34706,
            "unit": "ns/op",
            "extra": "34183 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "34183 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "34183 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 819.6,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1466077 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 819.6,
            "unit": "ns/op",
            "extra": "1466077 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1466077 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1466077 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1626,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "755946 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1626,
            "unit": "ns/op",
            "extra": "755946 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "755946 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "755946 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2119,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "543548 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2119,
            "unit": "ns/op",
            "extra": "543548 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "543548 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "543548 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 42265,
            "unit": "ns/op\t   57792 B/op\t      12 allocs/op",
            "extra": "28432 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 42265,
            "unit": "ns/op",
            "extra": "28432 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57792,
            "unit": "B/op",
            "extra": "28432 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "28432 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1777263108126,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 44.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27098404 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 44.13,
            "unit": "ns/op",
            "extra": "27098404 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "27098404 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "27098404 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1374,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "853460 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1374,
            "unit": "ns/op",
            "extra": "853460 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "853460 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "853460 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 143.9,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "8342625 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 143.9,
            "unit": "ns/op",
            "extra": "8342625 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "8342625 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "8342625 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 35475,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "33804 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 35475,
            "unit": "ns/op",
            "extra": "33804 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "33804 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "33804 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 85.27,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14141624 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 85.27,
            "unit": "ns/op",
            "extra": "14141624 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "14141624 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14141624 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 18.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66375128 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 18.04,
            "unit": "ns/op",
            "extra": "66375128 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "66375128 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "66375128 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 51.39,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "23971920 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 51.39,
            "unit": "ns/op",
            "extra": "23971920 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "23971920 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "23971920 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 822.5,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1460989 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 822.5,
            "unit": "ns/op",
            "extra": "1460989 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1460989 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1460989 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 306.7,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "3910558 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 306.7,
            "unit": "ns/op",
            "extra": "3910558 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "3910558 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3910558 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 29027,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "41042 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 29027,
            "unit": "ns/op",
            "extra": "41042 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "41042 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "41042 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 661.3,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1807543 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 661.3,
            "unit": "ns/op",
            "extra": "1807543 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1807543 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1807543 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1382,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "836004 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1382,
            "unit": "ns/op",
            "extra": "836004 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "836004 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "836004 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 1727,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "694983 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 1727,
            "unit": "ns/op",
            "extra": "694983 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "694983 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "694983 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 35951,
            "unit": "ns/op\t   57793 B/op\t      12 allocs/op",
            "extra": "33331 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 35951,
            "unit": "ns/op",
            "extra": "33331 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57793,
            "unit": "B/op",
            "extra": "33331 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "33331 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1777868197311,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 57.06,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20918625 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 57.06,
            "unit": "ns/op",
            "extra": "20918625 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20918625 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20918625 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1765,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "692346 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1765,
            "unit": "ns/op",
            "extra": "692346 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "692346 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "692346 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 186.9,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6389724 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 186.9,
            "unit": "ns/op",
            "extra": "6389724 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6389724 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6389724 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 46297,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "25905 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 46297,
            "unit": "ns/op",
            "extra": "25905 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "25905 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "25905 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 110.4,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10877673 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 110.4,
            "unit": "ns/op",
            "extra": "10877673 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10877673 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10877673 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 23.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50558372 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 23.36,
            "unit": "ns/op",
            "extra": "50558372 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50558372 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50558372 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 63.56,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "18450494 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 63.56,
            "unit": "ns/op",
            "extra": "18450494 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "18450494 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "18450494 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1043,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1043,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 423.6,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "3013038 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 423.6,
            "unit": "ns/op",
            "extra": "3013038 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "3013038 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3013038 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 37524,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "32163 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 37524,
            "unit": "ns/op",
            "extra": "32163 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "32163 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "32163 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 855.7,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1399287 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 855.7,
            "unit": "ns/op",
            "extra": "1399287 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1399287 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1399287 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1786,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "674188 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1786,
            "unit": "ns/op",
            "extra": "674188 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "674188 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "674188 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2213,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "535352 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2213,
            "unit": "ns/op",
            "extra": "535352 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "535352 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "535352 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 47009,
            "unit": "ns/op\t   57793 B/op\t      12 allocs/op",
            "extra": "25568 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 47009,
            "unit": "ns/op",
            "extra": "25568 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57793,
            "unit": "B/op",
            "extra": "25568 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "25568 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1778473469223,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 44.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26712567 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 44.82,
            "unit": "ns/op",
            "extra": "26712567 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "26712567 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "26712567 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1350,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "889418 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1350,
            "unit": "ns/op",
            "extra": "889418 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "889418 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "889418 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 142.6,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "8429485 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 142.6,
            "unit": "ns/op",
            "extra": "8429485 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "8429485 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "8429485 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 35371,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "33836 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 35371,
            "unit": "ns/op",
            "extra": "33836 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "33836 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "33836 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 82.95,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14358594 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 82.95,
            "unit": "ns/op",
            "extra": "14358594 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "14358594 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14358594 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 18.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "65614483 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 18.04,
            "unit": "ns/op",
            "extra": "65614483 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "65614483 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "65614483 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 49.66,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "23709520 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 49.66,
            "unit": "ns/op",
            "extra": "23709520 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "23709520 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "23709520 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 805.3,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1490550 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 805.3,
            "unit": "ns/op",
            "extra": "1490550 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1490550 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1490550 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 306.8,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "3918721 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 306.8,
            "unit": "ns/op",
            "extra": "3918721 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "3918721 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3918721 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 29017,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "41174 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 29017,
            "unit": "ns/op",
            "extra": "41174 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "41174 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "41174 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 664.6,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1802829 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 664.6,
            "unit": "ns/op",
            "extra": "1802829 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1802829 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1802829 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1353,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "883094 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1353,
            "unit": "ns/op",
            "extra": "883094 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "883094 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "883094 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 1686,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "669974 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 1686,
            "unit": "ns/op",
            "extra": "669974 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "669974 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "669974 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 35884,
            "unit": "ns/op\t   57793 B/op\t      12 allocs/op",
            "extra": "33406 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 35884,
            "unit": "ns/op",
            "extra": "33406 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57793,
            "unit": "B/op",
            "extra": "33406 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "33406 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1779078424637,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 58.35,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19305798 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 58.35,
            "unit": "ns/op",
            "extra": "19305798 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19305798 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19305798 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1563,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "773907 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1563,
            "unit": "ns/op",
            "extra": "773907 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "773907 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "773907 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 176.3,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6839370 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 176.3,
            "unit": "ns/op",
            "extra": "6839370 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6839370 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6839370 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 40613,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29570 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 40613,
            "unit": "ns/op",
            "extra": "29570 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29570 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29570 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 114.2,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10415184 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 114.2,
            "unit": "ns/op",
            "extra": "10415184 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10415184 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10415184 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 21.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54445326 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 21.88,
            "unit": "ns/op",
            "extra": "54445326 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54445326 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54445326 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 73.77,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "16727256 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 73.77,
            "unit": "ns/op",
            "extra": "16727256 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "16727256 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16727256 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1003,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1003,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 406.1,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "3031180 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 406.1,
            "unit": "ns/op",
            "extra": "3031180 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "3031180 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3031180 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 33578,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "36013 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 33578,
            "unit": "ns/op",
            "extra": "36013 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "36013 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "36013 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 788.6,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1519405 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 788.6,
            "unit": "ns/op",
            "extra": "1519405 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1519405 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1519405 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1573,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "760166 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1573,
            "unit": "ns/op",
            "extra": "760166 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "760166 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "760166 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2047,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "593074 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2047,
            "unit": "ns/op",
            "extra": "593074 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "593074 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "593074 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 41272,
            "unit": "ns/op\t   57792 B/op\t      12 allocs/op",
            "extra": "29032 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 41272,
            "unit": "ns/op",
            "extra": "29032 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57792,
            "unit": "B/op",
            "extra": "29032 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "29032 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1779683329871,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 57.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20822590 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 57.68,
            "unit": "ns/op",
            "extra": "20822590 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20822590 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20822590 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1589,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "757184 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1589,
            "unit": "ns/op",
            "extra": "757184 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "757184 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "757184 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 177,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6684715 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 177,
            "unit": "ns/op",
            "extra": "6684715 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6684715 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6684715 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 41049,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "29090 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 41049,
            "unit": "ns/op",
            "extra": "29090 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "29090 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "29090 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 115.7,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "10349680 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 115.7,
            "unit": "ns/op",
            "extra": "10349680 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "10349680 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10349680 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 21.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54615128 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 21.86,
            "unit": "ns/op",
            "extra": "54615128 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "54615128 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "54615128 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 72.98,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "16047454 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 72.98,
            "unit": "ns/op",
            "extra": "16047454 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "16047454 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "16047454 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1019,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1019,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 402,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2981794 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 402,
            "unit": "ns/op",
            "extra": "2981794 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2981794 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2981794 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 33927,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "35247 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 33927,
            "unit": "ns/op",
            "extra": "35247 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "35247 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "35247 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 807.4,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1485889 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 807.4,
            "unit": "ns/op",
            "extra": "1485889 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1485889 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1485889 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1609,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "677695 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1609,
            "unit": "ns/op",
            "extra": "677695 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "677695 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "677695 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2119,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "555655 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2119,
            "unit": "ns/op",
            "extra": "555655 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "555655 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "555655 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 41904,
            "unit": "ns/op\t   57792 B/op\t      12 allocs/op",
            "extra": "28436 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 41904,
            "unit": "ns/op",
            "extra": "28436 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57792,
            "unit": "B/op",
            "extra": "28436 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "28436 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1780288200313,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 45.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26106138 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 45.41,
            "unit": "ns/op",
            "extra": "26106138 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "26106138 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "26106138 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1362,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "882224 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1362,
            "unit": "ns/op",
            "extra": "882224 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "882224 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "882224 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 145.1,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "8243887 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 145.1,
            "unit": "ns/op",
            "extra": "8243887 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "8243887 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "8243887 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 35616,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "33775 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 35616,
            "unit": "ns/op",
            "extra": "33775 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "33775 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "33775 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 85.05,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "14083257 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 85.05,
            "unit": "ns/op",
            "extra": "14083257 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "14083257 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14083257 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 18.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66132291 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 18.03,
            "unit": "ns/op",
            "extra": "66132291 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "66132291 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "66132291 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 48.86,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "23891460 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 48.86,
            "unit": "ns/op",
            "extra": "23891460 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "23891460 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "23891460 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 832.8,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1433356 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 832.8,
            "unit": "ns/op",
            "extra": "1433356 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1433356 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1433356 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 309.9,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "3901056 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 309.9,
            "unit": "ns/op",
            "extra": "3901056 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "3901056 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3901056 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 29240,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "41305 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 29240,
            "unit": "ns/op",
            "extra": "41305 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "41305 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "41305 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 665.7,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1793530 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 665.7,
            "unit": "ns/op",
            "extra": "1793530 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1793530 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1793530 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1376,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "877728 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1376,
            "unit": "ns/op",
            "extra": "877728 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "877728 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "877728 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 1716,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "678111 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 1716,
            "unit": "ns/op",
            "extra": "678111 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "678111 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "678111 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 36185,
            "unit": "ns/op\t   57793 B/op\t      12 allocs/op",
            "extra": "33122 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 36185,
            "unit": "ns/op",
            "extra": "33122 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57793,
            "unit": "B/op",
            "extra": "33122 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "33122 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1780892967712,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 59.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20034500 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 59.98,
            "unit": "ns/op",
            "extra": "20034500 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20034500 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20034500 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 2035,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "569116 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 2035,
            "unit": "ns/op",
            "extra": "569116 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "569116 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "569116 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 178.2,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "6733038 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 178.2,
            "unit": "ns/op",
            "extra": "6733038 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "6733038 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "6733038 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 50480,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "23756 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 50480,
            "unit": "ns/op",
            "extra": "23756 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "23756 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23756 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 122.8,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "9849870 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 122.8,
            "unit": "ns/op",
            "extra": "9849870 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "9849870 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9849870 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 18.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62096058 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 18.79,
            "unit": "ns/op",
            "extra": "62096058 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "62096058 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "62096058 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 66.29,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "18892338 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 66.29,
            "unit": "ns/op",
            "extra": "18892338 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "18892338 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "18892338 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1156,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1156,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 430.8,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2777394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 430.8,
            "unit": "ns/op",
            "extra": "2777394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2777394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2777394 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 43107,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "27577 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 43107,
            "unit": "ns/op",
            "extra": "27577 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "27577 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "27577 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 946.1,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1268733 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 946.1,
            "unit": "ns/op",
            "extra": "1268733 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1268733 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1268733 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 2064,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "604860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 2064,
            "unit": "ns/op",
            "extra": "604860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "604860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "604860 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2581,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "464470 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2581,
            "unit": "ns/op",
            "extra": "464470 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "464470 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "464470 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 51988,
            "unit": "ns/op\t   57793 B/op\t      12 allocs/op",
            "extra": "22819 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 51988,
            "unit": "ns/op",
            "extra": "22819 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57793,
            "unit": "B/op",
            "extra": "22819 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "22819 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "committer": {
            "name": "inful",
            "username": "inful",
            "email": "inful@users.noreply.github.com"
          },
          "id": "641066f6580c98371818b9b6cbefb96f4709295e",
          "message": "docs(adr): clarify CalculateFingerprintFromParts guarantee",
          "timestamp": "2026-01-20T22:39:53Z",
          "url": "https://github.com/inful/mdfp/commit/641066f6580c98371818b9b6cbefb96f4709295e"
        },
        "date": 1781497807918,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkParseMarkdown",
            "value": 58.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20358450 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - ns/op",
            "value": 58.24,
            "unit": "ns/op",
            "extra": "20358450 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "20358450 times\n4 procs"
          },
          {
            "name": "BenchmarkParseMarkdown - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "20358450 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint",
            "value": 1915,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "581449 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - ns/op",
            "value": 1915,
            "unit": "ns/op",
            "extra": "581449 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "581449 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprint - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "581449 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall",
            "value": 173.1,
            "unit": "ns/op\t     128 B/op\t       2 allocs/op",
            "extra": "7006962 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - ns/op",
            "value": 173.1,
            "unit": "ns/op",
            "extra": "7006962 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - B/op",
            "value": 128,
            "unit": "B/op",
            "extra": "7006962 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintSmall - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "7006962 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge",
            "value": 50064,
            "unit": "ns/op\t   57472 B/op\t       3 allocs/op",
            "extra": "23809 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - ns/op",
            "value": 50064,
            "unit": "ns/op",
            "extra": "23809 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - B/op",
            "value": 57472,
            "unit": "B/op",
            "extra": "23809 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "23809 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter",
            "value": 117.1,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "9988660 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - ns/op",
            "value": 117.1,
            "unit": "ns/op",
            "extra": "9988660 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "9988660 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9988660 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch",
            "value": 18.82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61960766 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - ns/op",
            "value": 18.82,
            "unit": "ns/op",
            "extra": "61960766 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "61960766 times\n4 procs"
          },
          {
            "name": "BenchmarkRemoveFingerprintFromFrontmatter_NoMatch - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "61960766 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter",
            "value": 63.48,
            "unit": "ns/op\t      80 B/op\t       1 allocs/op",
            "extra": "19164231 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - ns/op",
            "value": 63.48,
            "unit": "ns/op",
            "extra": "19164231 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "19164231 times\n4 procs"
          },
          {
            "name": "BenchmarkAddFingerprintToFrontmatter - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "19164231 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent",
            "value": 1102,
            "unit": "ns/op\t    1648 B/op\t       5 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - ns/op",
            "value": 1102,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - B/op",
            "value": 1648,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContent - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter",
            "value": 411,
            "unit": "ns/op\t     432 B/op\t       5 allocs/op",
            "extra": "2943214 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - ns/op",
            "value": 411,
            "unit": "ns/op",
            "extra": "2943214 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - B/op",
            "value": 432,
            "unit": "B/op",
            "extra": "2943214 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentNoFrontmatter - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2943214 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge",
            "value": 41565,
            "unit": "ns/op\t   82173 B/op\t       5 allocs/op",
            "extra": "28935 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - ns/op",
            "value": 41565,
            "unit": "ns/op",
            "extra": "28935 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - B/op",
            "value": 82173,
            "unit": "B/op",
            "extra": "28935 times\n4 procs"
          },
          {
            "name": "BenchmarkProcessContentLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "28935 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint",
            "value": 903.2,
            "unit": "ns/op\t     736 B/op\t       4 allocs/op",
            "extra": "1328595 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - ns/op",
            "value": 903.2,
            "unit": "ns/op",
            "extra": "1328595 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - B/op",
            "value": 736,
            "unit": "B/op",
            "extra": "1328595 times\n4 procs"
          },
          {
            "name": "BenchmarkVerifyFingerprint - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1328595 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter",
            "value": 1902,
            "unit": "ns/op\t    2176 B/op\t       3 allocs/op",
            "extra": "609807 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - ns/op",
            "value": 1902,
            "unit": "ns/op",
            "extra": "609807 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - B/op",
            "value": 2176,
            "unit": "B/op",
            "extra": "609807 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_NoFrontmatter - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "609807 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter",
            "value": 2477,
            "unit": "ns/op\t    2504 B/op\t      12 allocs/op",
            "extra": "474980 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - ns/op",
            "value": 2477,
            "unit": "ns/op",
            "extra": "474980 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - B/op",
            "value": 2504,
            "unit": "B/op",
            "extra": "474980 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_WithFrontmatter - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "474980 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody",
            "value": 50913,
            "unit": "ns/op\t   57793 B/op\t      12 allocs/op",
            "extra": "23588 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - ns/op",
            "value": 50913,
            "unit": "ns/op",
            "extra": "23588 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - B/op",
            "value": 57793,
            "unit": "B/op",
            "extra": "23588 times\n4 procs"
          },
          {
            "name": "BenchmarkCalculateFingerprintFromParts_LargeBody - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "23588 times\n4 procs"
          }
        ]
      }
    ]
  }
}