# Notes for Claude

## Prototype version number

The prototype shows its version in the bottom-left corner: the `.proto-ver` element in `src/prototype.html` (its text and its `aria-label`).

- Every update the user asks for bumps the minor number by one before it is committed and published: v1.3 → v1.4 → … → v1.9 → v1.10.
- The major number changes only when the user explicitly says so (e.g. "increase to v2"); the minor number then resets: v2.0.
- Start the commit subject with the new version (e.g. `v1.4: …`) and mention it in the reply.
