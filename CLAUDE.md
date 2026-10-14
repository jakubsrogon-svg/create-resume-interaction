# Notes for Claude

## Prototype version number

The prototype shows its version in the bottom-left corner: the `.proto-ver` element in `src/prototype.html` (its text and its `aria-label`). Format: `vMAJOR.MINOR` or `vMAJOR.MINOR.PATCH`.

Every update the user asks for bumps the version before it is committed and published. Claude decides whether the update is small or bigger:

- **Small → patch** (v1.3 → v1.3.1 → v1.3.2): tweaks and fixes to what already exists, such as copy edits, spacing, sizes, colours, alignment, a bug fix, or polishing one element.
- **Bigger → minor** (v1.3.2 → v1.4): new or reworked behaviour or layout, such as a new screen, state, variant, feature or interaction, a restructured layout, or a change that spans several screens. The patch number is dropped: v1.4, not v1.4.0. After v1.9 comes v1.10.
- **Major** (v1.x → v2.0): only when the user explicitly says so (e.g. "increase to v2"). Minor and patch reset: v2.0.

Changes that don't touch the prototype itself (README, these notes) don't bump the version.

Start the commit subject with the new version (e.g. `v1.3.1: …`) and mention it in the reply.

## Hidden variant C

Variant C ("picture on top") is hidden, not removed. `SHOW_C = false` in `src/prototype.html` hides its rail button and sends `#c` links and a remembered C choice to A; all of C's markup, styles and logic stay in place. When the user asks to bring C back, set `SHOW_C = true` (and drop the "hidden for now" note in the README); nothing else needs to change.

## Hidden decorations in variant D

D's resume fragments (the four faded pages in the side margins) are hidden, not removed. `SHOW_D_PAPERS = false` in `src/prototype.html` adds `no-papers` to the backdrop, which hides them; their markup and styles stay in place. To bring them back, set `SHOW_D_PAPERS = true` (and update the README's D description); nothing else needs to change.
