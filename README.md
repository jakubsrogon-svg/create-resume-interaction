# Create-resume interaction prototype

Interactive prototype of the Kickresume onboarding start flow, built on the Kickresume design system.

1. **Intent screen** – "What do you want to get done first?" Only *Create a resume* is active; the rest are marked *Coming soon*. Two layouts, switchable from the side rail: **Grid** (illustrated cards in a row) and **List** (500px cards stacked like the second screen).
2. **Creation screen** – "How do you want to start?" with four methods (LinkedIn, AI, Upload, Paste text), in three variants switchable from the side rail:
   - **A · Expand in place** – all methods stay on one screen; clicking a card expands it (accordion, one open at a time), with B's reassurance row tucked under the open card. On phones A uses the same two steps as B and C (list, then the method on its own screen with Back), so there it matches B.
   - **B · Separate screens** – clicking a card slides to its own screen with a Back button; the other options are hidden. A quiet row of three short reassurances sits under the open card: how long it takes, the one risk people worry about for that method, and that everything stays editable. On phones they sit side by side as icon-over-label columns, each on one line (time shortened to "30 sec").
   - **C · Picture on top** – B's list and navigation; each method screen opens with an illustration in the style of the goal-screen cards, showing what you give and what you get (LinkedIn profile → resume, your answers → AI → resume, old PDF/DOC → fresh template, messy notes → sorted sections). It shrinks on shorter screens so the page still fits. No reassurance row or extra help text. Errors stay inline with links to another method (Back always returns to the list). Prototype triggers: a LinkedIn link containing `private` fails the import; a file name containing `scan` can't be read.

3. **Building screen** – after you submit a method, the resume visibly takes shape step by step.
4. **Editor** – the built page travels into the preview pane of the resume editor (sidebar, Fill In form, live preview). Editing fields updates the preview; clicking a preview section opens it in the form.
5. **Dashboard** – where people land if they skip personalization (“Skip personalization” or “I’m just looking around”). Its LinkedIn, PDF import and resume builder shortcuts drop you into the creation flow with that method already open.

Content column is 950px, method cards are 500px.

The side rail lists its settings in flow order: goal-screen layout (grid/list), method-screen variant (A/B/C), desktop/mobile, restart. A setting that doesn't affect the current screen is dimmed; clicking it applies it and takes you to the screen it changes.

- Source: `src/prototype.html`
- Build (inlines brand fonts + logo): `python3 build.py` → `dist/create-resume-prototype.html` (self-contained, open in any browser)
- Version: shown bottom left (v1.3, v1.3.1, …); small changes bump the patch number, bigger ones the minor, the major only on request (see `CLAUDE.md`).
- Deep links: `#a` / `#b` / `#c` open a variant, add `-mobile` for the phone view and `-list` for the list layout, `#editor` / `#dashboard` jump straight to those screens.
