# Create-resume interaction prototype

Interactive prototype of the Kickresume onboarding start flow, built on the Kickresume design system.

1. **Intent screen** – "What do you want to get done first?" Only *Create a resume* is active; the rest are marked *Coming soon*.
2. **Creation screen** – "How do you want to start?" with four methods (LinkedIn, AI, Upload, Paste text), in two variants switchable from the floating bar:
   - **A · Expand in place** – all methods stay on one screen; clicking a card expands it (accordion, one open at a time).
   - **B · Separate screens** – clicking a card slides to its own screen with a Back button; the other options are hidden.

Content column is 950px, method cards are 400px.

- Source: `src/prototype.html`
- Build (inlines brand fonts + logo): `python3 build.py` → `dist/create-resume-prototype.html` (self-contained, open in any browser)
- Deep links: `#a` / `#b` open a specific variant.
