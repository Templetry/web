# AGENTS

Operating contract for AI agents and automation helpers working in this project.

## Mission

- Keep this SPA lean: Vue 3 + Vite + TypeScript, no state-management or UI framework until the app actually needs one.

## Core Rules

- Components use `<script setup lang="ts">`; strict TypeScript stays on.
- Routes live under `src/routes/`; shared logic under `src/lib/`.
- Update docs in the same change when behavior or process changes.

## Required Checks Before Finishing

- `npm run build` compiles clean (vue-tsc + vite).
- `npm test` passes when tests exist.

## Safe Change Workflow

1. Read the affected files fully before editing.
2. Make the smallest change that solves the task.
3. Build and test, then review the diff with git before committing.
