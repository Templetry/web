import { createRequestHandler, RouterContextProvider, createContext } from "react-router";

/**
 * React Router 8 replaced the untyped `AppLoadContext` bag with a typed context
 * registry. A loader reaches the Cloudflare bindings with
 * `context.get(cloudflareContext)` rather than `context.cloudflare`.
 */
export const cloudflareContext = createContext<{
  env: Env;
  ctx: ExecutionContext;
}>();

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const context = new RouterContextProvider();
    context.set(cloudflareContext, { env, ctx });
    return requestHandler(request, context);
  },
} satisfies ExportedHandler<Env>;
