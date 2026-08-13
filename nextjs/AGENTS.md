# AGENTS

Operating contract for AI agents and automation helpers working in this project.

## Mission

- Keep this app on Next.js defaults: App Router, server components first; reach for client components only when interactivity demands them.

## Core Rules

- Pages and route handlers live under `src/app/`; shared logic under `src/lib/` (import via the `@/` alias).
- Mark client components explicitly with `"use client"`; keep them small and leaf-level.
- Strict TypeScript stays on.
- Update docs in the same change when behavior or process changes.

## Required Checks Before Finishing

- `npm run build` compiles clean (Next's build type-checks the project).
- `npm test` passes when tests exist.

## Safe Change Workflow

1. Read the affected files fully before editing.
2. Make the smallest change that solves the task.
3. Build and test, then review the diff with git before committing.
