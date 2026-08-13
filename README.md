# Templetry parent: web

Web templates for [Templetry](https://github.com/Templetry). One **parent repo**, multiple **forms** — each form is a subdirectory that compiles on its own and carries its own `template.yml` ([ADR-0011](https://github.com/Templetry/wiki/blob/main/adr/0011-template-forms.md)).

| Form | What it is | Status |
|---|---|---|
| [`react-spa/`](react-spa/) | React SPA — Vite + TypeScript, optional Router and Vitest, presets `full`/`minimal` | ✅ ready |

## Usage

```sh
templetry init web/react-spa --out ./my-app --set "project_name=My App" --preset full
```

Forms are **chosen**, not combined. Inside a form, the manifest's features (and presets) are the combinable axis.
