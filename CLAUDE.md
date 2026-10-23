# Notes for Claude

## Prototype version number

The prototype shows its version in the bottom-left corner: the `.proto-ver` element in `src/prototype.html` (its text and its `aria-label`). Format: `vMAJOR.MINOR` or `vMAJOR.MINOR.PATCH`.

Every update the user asks for bumps the version before it is committed and published. Claude decides whether the update is small or bigger:

- **Small → patch** (v1.3 → v1.3.1 → v1.3.2): tweaks and fixes to what already exists, such as copy edits, spacing, sizes, colours, alignment, a bug fix, or polishing one element.
- **Bigger → minor** (v1.3.2 → v1.4): new or reworked behaviour or layout, such as a new screen, state, variant, feature or interaction, a restructured layout, or a change that spans several screens. The patch number is dropped: v1.4, not v1.4.0. After v1.9 comes v1.10.
- **Major** (v1.x → v2.0): only when the user explicitly says so (e.g. "increase to v2"). Minor and patch reset: v2.0.

Changes that don't touch the prototype itself (README, these notes) don't bump the version.

Start the commit subject with the new version (e.g. `v1.3.1: …`) and mention it in the reply.

## Variant C visibility

Variant C ("picture on top") can be hidden without removing it. `SHOW_C` in `src/prototype.html` controls it: `true` shows its button in the More options panel (bottom-right corner) and lets `#c` open it (current state); `false` hides that row and sends `#c` links and a remembered C choice to A, while all of C's markup, styles and logic stay in place. When hiding it, also add a "hidden for now" note to C in the README; when showing it, remove that note.

## Hidden decorations in the 3D look

The 3D look's resume fragments (the four faded pages in the side margins of the method screen) are hidden, not removed. `SHOW_3D_PAPERS = false` in `src/prototype.html` adds `no-papers` to the backdrop, which hides them; their markup and styles stay in place. To bring them back, set `SHOW_3D_PAPERS = true` (and update the README's look description); nothing else needs to change.

## Goal cards

The goal screen's four cards come from Figma (Kickresume 3.0 › Intent screen [new], 61797:3677) and the user's choose-goal page. `GOALS` in `src/prototype.html` holds each card's copy, its list-layout icon and its picture: `.ga-*` markup on a 156px stage, scaled to 72px on phones. The hover and focus motion is CSS only (`.intent:is(:hover, :focus-visible) .ga-…`). `pickGoal(id)` decides where each goal leads.

## Tailor resume

Tailor resume (`/dashboard/tailor-resume/`, and `/jobs/job/1234/tailor/` from a job page's Tailor my resume) is from Figma (Kickresume 3.0 › 61899:29481 setup, 61899:29483 tailoring). `trlHTML(fromJob)` / `initTrl` are the form (URL or manual view, `TRL_LEVELS`, `TRL_JOB`); `tldHTML` / `initTld` are the tailoring card in the route's `process` pane: four steps (`TLD_STEPS`, `TLD_STEP_MS` each, about 30 s in the product) with CSS-animated pictures (`.tld-pic.p1`–`p4`, keyframes from Figma's motion data), then Done! or Something went wrong from `procResult`. Its pictures' templates are in `assets/tailor/`, the job's logo in `assets/jobs/`. In the flows, `trlRun(path)` makes that card the processing and the processing state; Tailor Now, Retry and × move the flow bar with `flowTo` instead of opening the screen again.

## Route screens (recreated product screens)

The user sends screenshots of product screens (mostly modals) to recreate pixel for pixel, each under a URL path such as `/dashboard/create-ai-resume/` or `/ai-career-map`. They live in `src/prototype.html`:

- Register each one in `ROUTES` (`group` = its heading in the Screens list, `path`, `also` = more paths for the same screen, `title`, `html` = its markup function, `init` = its behaviour, `needsCv` = without a CV, show Add your resume (upload or create) and Upload your resume before it, `upload` = the screen is Upload your resume itself, then the building screen and the editor, `wire` = no design yet: its `html` returns a Wire wireframe from `WIRE`, `run` = do something instead of showing a screen, e.g. open the editor, `more` = panes that follow the main one, `{ name: markup function }`, such as Tailor resume's `process`). That alone adds its link under More options › Screens and makes `#<path>` open it (also on `hashchange`).
- A screenshot of a whole page with its own top bar (Sign up and Log in, `openAuth`; My Documents, `openDocs`; the resume tools, `openTool`) or its own background (the purple Upgrade and student pages, `openUpgrade`) can't sit in `#screen-route`: it is an app screen like the dashboard (`APPS.auth`, `APPS.upgrade`, `APPS.docs`, `APPS.tool`, which hide the logo bar and page) and its route uses `run`. `enterApp` opens one; give it the URL it shows. Images live in `assets/`; write `__ASSET:<path under assets/>__` where the page needs one and `build.py` inlines it as a data URI (the auth photos still use their own placeholders).
- A design may come as a Figma link instead of a screenshot. Read it with the Figma MCP tools (`get_design_context`, `get_metadata`, `get_screenshot` at `maxDimension` 1440 for the compare). When www.figma.com is blocked for downloads, export assets through `use_figma` (`exportAsync` as SVG strings, or PNG/WebP bytes base64-encoded in chunks under its 48 KB return limit). Figma's code export can flatten a gradient stroke to its first colour: sample the screenshot (the Upgrade card and the ISIC tab borders are gradients). The local `dist` file has no doctype (quirks mode) while the published artifact does, so set margins on `p`/`form` explicitly and compare a copy with `<!doctype html>` prepended.
- Steps inside a screen (upload → tool, step 1 → step 2) are `.rt-pane`s switched with `showPane(root, name, dir)`; a height change inside a card uses `morphHeight`. Reuse `uploadHTML`/`initUpload`, `selectHTML`/`refreshSel`, `langHTML`/`initLang`, `needFilled`, `xBtn` and the `.rt-btn` / `.rt-ai` / `.rt-coral` / `.rt-ghost` buttons.
- The screenshots carry the Mac's display-P3 colour profile: convert sampled colours to sRGB before using them (the coral then reads exactly `#ff5e59`, the AI gradient `#5345ff → #9b3eff`). Check new class names against existing ones (`.mini` and `.lbl` were already taken).
- They are full screens, never pop-ups with an overlay (the user asked for this to keep the flow unified): `openRoute` fills `#screen-route` inside the page and moves there with `go('route')`, so they get the logo bar, page background, top line and slide transitions of the other screens. A modal's card keeps its inside exactly as in the screenshot, but its surface matches the goal and method cards (1px `--kr-grey-60` outline, `--radius-card` corners, no drop shadow; reduce the padding by 1px for the outline). Wrap animated content in `.rt-item`.
- Give each screen its own class prefix (the AI screen uses `.aim-*`) and its own CSS block under "Route screens".
- Match the screenshots exactly: measure them (they are usually 2x), use the product's sizes rather than the onboarding's height-aware spacing, and compare a 2x render against the screenshot pixel by pixel before publishing.
- Later the user will say which buttons (goal screen, method screen, dashboard) lead to which route; wire those with `openRoute(findRoute(path))`.

## The app menu

Every page inside the app uses the editor's left menu (`appNavHTML(at)`: `.ed-side`, and `.ed-mbar` on phones), never a page's own top bar or side menu from a design; `at` marks the page. Its links carry `data-nav` (one click handler opens the page). Put it first in the page's grid (column 1); `enterApp` and `openDashboard` keep it in place when moving between app pages.

## Latest resume and My Documents

- `/latest-resume/…` routes depend on the CV (`cvUploaded`): with one, `/latest-resume/` opens the editor at `/edit/` (`openEdit`) and analyze, proofread and recruiter-feedback open the ATS, Proofreading and Career Coach pages (`openTool('ats' | 'proof' | 'coach')`, URL kept as the latest-resume path, `TOOL_PATH`); without one they all go to My Documents (`/dashboard/resumes/`). My Documents lists the resumes only with a CV and is redrawn when the CV is switched.
- The designs' icons are inline SVG from the Figma file in `TL_IC` (one-colour ones use `currentColor`); their images are in `assets/docs/` and `assets/tools/` (`TL_IMG`).

## Wireframes and flow templates

- Screens without a design are wireframes built with Wire (the `anthropic-skills:wire-wireframes` skill; its CSS is copied in with tokens scoped to `.wf`). Write them as `WIRE.<id>` markup functions using Wire classes only; buttons carry `data-wire` (they move a running flow on, otherwise do the obvious thing). Keep them shades of grey only (Wire's accent, status and note tokens are set to greys). A screen's note goes in `wNote(text)`: it is kept out of the screen and shown in the chrome note at the bottom (`syncNote`), so it never reads as part of the design. When the user sends the real design, replace the route's `html` with a recreated screen and drop `wire`.
## The four flows

- Every URL follows one of four flow templates (`FLOW_T`, from the user's flow board in Figma): 1 intent collection → feature personalization → data processing → processing state → destination (Skip personalization → dashboard); 2 personalization → processing → state → destination; 3 processing → state → destination; 4 destination. Sign up, Log in or a landing page can come first (`entry`). The user's idea: a new URL only pairs to one of the four and fills in its own screens.
- `FEATURES` pairs every URL with its flow: `flow`, `group` (the URL checklist's group), `title`, `path` (`url` when the shown URL has a placeholder such as `{template}`), `entry`, `prep` (the feature personalization), `process` (default: the shared processing wireframe worded by `verb` and `psteps`), `dest` (the destination), `noun` (what the result is called), `cv` (start with or without a CV), `guest` (adds the sign-up wall after the result), `state` (the feature's own processing state instead of the shared `WIRE.state`). `prep`, `process` and `dest` are steps from the `S.*` helpers (`wire`, `route`, `wireTool`, `screen`, `build`, `editor`, `dash`, `docs`, `tool`, `auth`, `upgrade`, `latest`, `dest`), or a function returning them when they depend on the CV (`toolPrep`). `buildFlow(f)` lays them out in the flow's stages. To add a URL, add a `FEATURES` entry (and a `ROUTES` entry if its screen should be in the Screens list).
- Processing moves on by itself (`processDone`; the building screen through `afterBuild`). More options › Result sets `procResult`: Completed skips the processing state and goes straight to the destination; Failed and Error show it (`WIRE.state`), with a way back to the personalization or the processing.
- Flow 1's goal screen switches the run to the goal picked (`flowGoal`). A screen's own button moves a run on with `flowOn()` / `flowNext()`.
- The More options panel renders the four flows from `FLOW_T` and `FEATURES` (`renderFlowsPanel`); the bar groups the run's dots by stage.

