# AGENTS

Operating contract for AI agents and automation helpers working in this project.

## Mission

- Keep this SPA lean: Vite + React + TypeScript, no state-management or CSS frameworks until the app actually needs them.

## Core Rules

- Strict TypeScript stays on (`noUnusedLocals`, `noUnusedParameters`) — fix the cause, never loosen the config.
- Routes live under `src/routes/`; shared logic under `src/lib/`.
- Components are function components with hooks; no classes.
- Update docs in the same change when behavior or process changes.

## Required Checks Before Finishing

- `npm run build` compiles clean (tsc + vite).
- `npm test` passes when tests exist.

## Safe Change Workflow

1. Read the affected files fully before editing.
2. Make the smallest change that solves the task.
3. Build and test, then review the diff with git before committing.
