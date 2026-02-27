#!/usr/bin/env bash
set -euo pipefail

fail() {
  echo "FAIL: $1"
  exit 1
}

[[ -f index.html ]] || fail "index.html missing"
[[ -f styles.css ]] || fail "styles.css missing"
[[ -f script.js ]] || fail "script.js missing"

grep -q 'id="hero"' index.html || fail "hero section missing"
grep -q 'id="problem"' index.html || fail "problem section missing"
grep -q 'id="belief"' index.html || fail "belief section missing"
grep -q 'id="future"' index.html || fail "future section missing"
grep -q 'id="principles"' index.html || fail "principles section missing"
grep -q 'id="manifesto"' index.html || fail "manifesto section missing"

grep -q 'prefers-reduced-motion' styles.css || fail "reduced motion support missing"
grep -q 'IntersectionObserver' script.js || fail "section-aware nav observer missing"

echo "PASS: landing page structure checks"
