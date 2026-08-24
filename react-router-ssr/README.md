# Template App

React Router 8 with **server rendering on Cloudflare Workers**. Pages are rendered on the server and are indexable; bindings are typed.

## Run it

```sh
npm install
npm run cf-typegen   # generates worker-configuration.d.ts — Env lives there
npm run dev
```

## Build and deploy

```sh
npm run build
npm run deploy
```

## The one failure mode worth knowing about

`build/server/index.js` must exist after a build. If it does not, the site is being rendered in the browser rather than on the server — and nothing will tell you: the build goes green.

The usual cause is `main` having been removed from `wrangler.jsonc`. That is why the template's own verification asserts the file exists rather than trusting the exit code.

## Cloudflare bindings

React Router 8 replaced the untyped `AppLoadContext` with a typed registry:

```ts
// workers/app.ts exports it
export const cloudflareContext = createContext<{ env: Env; ctx: ExecutionContext }>();

// a loader reads it
export async function loader({ context }: Route.LoaderArgs) {
  const { env } = context.get(cloudflareContext);
}
```

## Profiles

Per ADR-0018: `development`, `staging`, `production`, selected by Vite's mode.

```sh
npm run build:staging
```

Read through `app/config.ts`, which falls back to development on an unknown mode rather than throwing — a typo in a build flag should not take the site down at boot.

## Tests

```sh
npm test
```

Vitest runs against `vitest.config.ts`, deliberately not the app's Vite config: that one installs the Cloudflare plugin and Vitest would try to run node tests inside a workers runtime.
