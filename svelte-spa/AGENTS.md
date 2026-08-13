# AGENTS

Operating contract for AI agents and automation helpers working in this project.

## Mission

- Keep this SPA lean: Svelte 5 + Vite + TypeScript, no store library or UI kit until the app actually needs one.

## Core Rules

- Use runes (`$state`, `$derived`, `$effect`); do not reintroduce Svelte 4 store syntax.
- Components are `.svelte` files with `<script lang="ts">`; shared logic lives under `src/lib/`.
- Strict TypeScript stays on.
- Update docs in the same change when behavior or process changes.

## Required Checks Before Finishing

- `npm run build` compiles clean (svelte-check + vite).
- `npm test` passes when tests exist.

## Safe Change Workflow

1. Read the affected files fully before editing.
2. Make the smallest change that solves the task.
3. Build and test, then review the diff with git before committing.
