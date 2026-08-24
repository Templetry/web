import { defineConfig } from "vitest/config";

// Deliberately NOT the app's vite.config.ts. That one installs the Cloudflare
// plugin, and Vitest then tries to run plain unit tests inside a workers
// runtime — it fails with "require_react is not a function" before reaching a
// single assertion. Unit tests here are node tests; anything that genuinely
// needs the worker runtime belongs in an integration test against `wrangler dev`.
export default defineConfig({
  test: {
    environment: "node",
    include: ["app/**/*.test.ts"],
  },
});
