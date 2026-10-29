# Checks

Run them before publishing: `tests/run.sh` (about 15 minutes; `tests/run.sh quick` takes 2). It builds
`dist/create-resume-prototype.html`, runs each check below and prints a one-line summary per check; the full logs are in
`tests/out/`. They need Node, Playwright with Chromium (`require('playwright')`, or the copy in `/opt/node-tools`)
and ESLint for the lint.

| Check | What it does | Clean when |
|---|---|---|
| `eslint -c tests/eslint.config.mjs src/app.js` | Lints the script against the browser's globals (`browser-globals.json`) | no errors, no unused variables |
| `node tests/sweep.js` | Opens every URL directly (`#/path`) at 1440 and 390 px wide | no line ends in `!!` (JS errors, broken images, duplicate ids, unnamed controls, sideways overflow) |
| `node tests/bar.js [no\|yes]` | Every run the dock offers, through the flow bar's Next, without or with a CV | `errs []` |
| `node tests/walk.js [no\|yes] [ok\|fail\|error] [ids\|-] [i/n]` | Every run through the screens' own buttons, as a person would; the second argument is the dock's Ends | `errs []` and no `!! STUCK` (a Failed run ending on a screen that waits for the person is expected) |

`dock.js` drives the run dock (`listFeatures`, `runFeature`, `setEnd`), `env.js` says where Playwright and the built
page are, and `fixtures/resume.pdf` is the file the upload steps pick. `walk.js` takes `SHOTS=dir` to save a
screenshot of each screen it reaches (the happy-path boards in Figma are made from these), `GOALS=1` to walk Flow 1's
goal branches and `METHOD=paste|upload|ai|linkedin` for the way the method screen makes the CV.
