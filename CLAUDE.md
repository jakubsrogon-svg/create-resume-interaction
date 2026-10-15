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

## Route screens (recreated product screens)

The user sends screenshots of product screens (mostly modals) to recreate pixel for pixel, each under a URL path such as `/dashboard/create-ai-resume/` or `/ai-career-map`. They live in `src/prototype.html`:

- Register each one in `ROUTES` (`group` = its heading in the Screens list, `path`, `also` = more paths for the same screen, `title`, `html` = its markup function, `init` = its behaviour, `needsCv` = show Upload your resume first when no CV is uploaded, `wire` = no design yet: its `html` returns a Wire wireframe from `WIRE`, `run` = do something instead of showing a screen, e.g. open the editor). That alone adds its link under More options › Screens and makes `#<path>` open it (also on `hashchange`).
- Steps inside a screen (upload → tool, step 1 → step 2) are `.rt-pane`s switched with `showPane(root, name, dir)`; a height change inside a card uses `morphHeight`. Reuse `uploadHTML`/`initUpload`, `selectHTML`/`refreshSel`, `langHTML`/`initLang`, `needFilled`, `xBtn` and the `.rt-btn` / `.rt-ai` / `.rt-coral` / `.rt-ghost` buttons.
- The screenshots carry the Mac's display-P3 colour profile: convert sampled colours to sRGB before using them (the coral then reads exactly `#ff5e59`, the AI gradient `#5345ff → #9b3eff`). Check new class names against existing ones (`.mini` and `.lbl` were already taken).
- They are full screens, never pop-ups with an overlay (the user asked for this to keep the flow unified): `openRoute` fills `#screen-route` inside the page and moves there with `go('route')`, so they get the logo bar, page background, top line and slide transitions of the other screens. A modal's card keeps its inside exactly as in the screenshot, but its surface matches the goal and method cards (1px `--kr-grey-60` outline, `--radius-card` corners, no drop shadow; reduce the padding by 1px for the outline). Wrap animated content in `.rt-item`.
- Give each screen its own class prefix (the AI screen uses `.aim-*`) and its own CSS block under "Route screens".
- Match the screenshots exactly: measure them (they are usually 2x), use the product's sizes rather than the onboarding's height-aware spacing, and compare a 2x render against the screenshot pixel by pixel before publishing.
- Later the user will say which buttons (goal screen, method screen, dashboard) lead to which route; wire those with `openRoute(findRoute(path))`.

## Wireframes and flow templates

- Screens without a design are wireframes built with Wire (the `anthropic-skills:wire-wireframes` skill; its CSS is copied in with tokens scoped to `.wf`). Write them as `WIRE.<id>` markup functions using Wire classes only; buttons carry `data-wire` (they move a running flow on, otherwise do the obvious thing). When the user sends the real design, replace the route's `html` with a recreated screen and drop `wire`.
- The nine flow templates live in `FLOWS` (steps built with the `S.*` helpers: `wire`, `route`, `wireTool`, `screen`, `build`, `editor`, `dash`). Every URL belongs to one of them; the URL checklist doc maps them.

