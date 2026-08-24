import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

// Plugin order is the documented one: cloudflare first, claiming the ssr
// environment, then reactRouter.
//
// Worth knowing before you rearrange this. Under React Router 7 with Vite 7 the
// same configuration failed with "[commonjs--resolver] id.endsWith is not a
// function": the ssr environment inherited the client inputs and the worker
// entry arrived as an object Rollup could not resolve. The configuration was
// never wrong — the fix lived in React Router 8 and a ^7 range could not reach
// it. If this breaks again, check the dependency ranges before the config.
export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    reactRouter(),
  ],
});
