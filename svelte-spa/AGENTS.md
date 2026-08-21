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

```sh templetry:checks
npm install
npm run build
```

## Safe Change Workflow

1. Read the affected files fully before editing.
2. Make the smallest change that solves the task.
3. Build and test, then review the diff with git before committing.

## This project came from a template

Four facts you cannot infer from the code in front of you:

- **Never hand-edit `.templetry-answers.yml`.** It records what generated this project. Editing it makes the next update merge against a state that never existed.
- **Before writing a capability by hand, run `templetry pieces`.** Auth, RBAC, audit trails, API keys and whole CRUD resources may already exist as pieces for this template. Adopting one is `templetry add <name>`, and it brings its own tests.
- **`templetry update` pulls improvements from the template** through a three-way merge that keeps your edits. Use it instead of copying files from the template by hand.
- **Directives like `tpl:if` belong to the template, not here.** If you find one in this project, it is a rendering bug worth reporting — do not try to interpret it.
