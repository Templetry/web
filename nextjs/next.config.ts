import type { NextConfig } from "next";
// tpl:if environments
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Next loads `.env.$(NODE_ENV)`, and NODE_ENV only ever means development,
 * production or test — there is no room for staging. So the profile is
 * chosen by APP_ENV here and inlined through Next's own `env` option.
 *
 * `.env.local` still layers on top the way Next always does it.
 */
function profileEnv(): Record<string, string> {
  const name = process.env.APP_ENV ?? "development";
  const path = resolve(process.cwd(), `.env.${name}`);
  if (!existsSync(path)) {
    throw new Error(`next.config: no profile at .env.${name}`);
  }
  const out: Record<string, string> = {};
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    // A real environment variable wins, which is what lets a container run
    // without shipping a profile file.
    if (eq > 0) {
      const key = trimmed.slice(0, eq).trim();
      out[key] = process.env[key] ?? trimmed.slice(eq + 1).trim();
    }
  }
  return out;
}
// tpl:endif

const nextConfig: NextConfig = {
  // tpl:if environments
  env: profileEnv(),
  // tpl:endif
};

export default nextConfig;
