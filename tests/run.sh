#!/bin/bash
# Build, then every check; logs go to tests/out/. Usage: tests/run.sh [quick]  (quick: lint and the URL sweep only)
set -u
cd "$(dirname "$0")/.."
OUT=tests/out; mkdir -p "$OUT"
python3 build.py || exit 1
ESLINT=$(command -v eslint || echo /opt/node-tools/node_modules/.bin/eslint)
"$ESLINT" -c tests/eslint.config.mjs src/app.js > "$OUT/lint.log" 2>&1
echo "lint: $(grep -c '  error' "$OUT/lint.log") errors, $(grep -c 'no-unused-vars' "$OUT/lint.log") unused"
node tests/sweep.js > "$OUT/sweep.log" 2>&1
echo "sweep: $(grep -c . "$OUT/sweep.log") URL loads, $(grep -c '!!' "$OUT/sweep.log") with problems"
[ "${1:-}" = quick ] && exit 0
node tests/bar.js no > "$OUT/bar-no.log" 2>&1 & A=$!
node tests/bar.js yes > "$OUT/bar-cv.log" 2>&1 & B=$!
node tests/walk.js no ok - 0/2 > "$OUT/walk-0.log" 2>&1 & C=$!
node tests/walk.js no ok - 1/2 > "$OUT/walk-1.log" 2>&1 & D=$!
wait $A $B $C $D
echo "bar: $(head -1 "$OUT/bar-no.log"); errors: $(grep -h '^errs' "$OUT"/bar-*.log | sort -u | tr '\n' ' ')"
echo "walk: $(grep -h -c 'STUCK' "$OUT"/walk-*.log | paste -sd+ | bc) stuck; errors: $(grep -h 'errs' "$OUT"/walk-*.log | sort -u | tr '\n' ' ')"
