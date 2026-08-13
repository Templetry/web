# TemplateApp

React SPA generated with [Templetry](https://github.com/Templetry): Vite + TypeScript, strict compiler settings, optional React Router and Vitest.

## Scripts

```sh
npm install
npm run dev       # Vite dev server
npm run build     # tsc + vite build
npm test          # vitest (when the vitest feature is on)
```

## Structure

```
src/
  App.tsx         home page
  lib/            shared logic (greet.ts is the sample)
  routes/         React Router config and pages (router feature)
```

Note: `react-router-dom` is declared even when the router feature is off — the bundler tree-shakes it out; remove it from `package.json` if you want a spotless manifest.
