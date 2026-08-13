# TemplateApp

Vue 3 SPA generated with [Templetry](https://github.com/Templetry): Vite + TypeScript, `<script setup>`, optional Vue Router and Vitest.

```sh
npm install
npm run dev
npm run build     # vue-tsc + vite build
npm test          # vitest feature
```

Note: `vue-router` is declared even when the router feature is off — the bundler tree-shakes it out; remove it from `package.json` for a spotless manifest.
