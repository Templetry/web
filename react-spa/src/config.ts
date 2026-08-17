/**
 * The active environment profile.
 *
 * Vite's own mechanism: `.env.<mode>` files, selected with `--mode`, with
 * only `VITE_`-prefixed values reaching the browser. Nothing else in the app
 * touches `import.meta.env`.
 */
export const ENVIRONMENTS = ["development", "staging", "production"] as const;
export type Environment = (typeof ENVIRONMENTS)[number];

export type AppConfig = {
  environment: Environment;
  apiBaseUrl: string;
  verboseErrors: boolean;
};

/**
 * Validates a raw environment bag.
 *
 * Separate from the import below so tests can feed it the committed profile
 * files directly, instead of re-running Vite once per mode.
 */
export function readConfig(env: Record<string, unknown>): AppConfig {
  const environment = String(env.VITE_ENVIRONMENT ?? "");
  if (!ENVIRONMENTS.includes(environment as Environment)) {
    throw new Error(`config: unknown VITE_ENVIRONMENT ${JSON.stringify(environment)}`);
  }
  const apiBaseUrl = String(env.VITE_API_BASE_URL ?? "");
  if (!apiBaseUrl) {
    throw new Error("config: VITE_API_BASE_URL is missing from the active profile");
  }
  return {
    environment: environment as Environment,
    apiBaseUrl,
    verboseErrors: String(env.VITE_VERBOSE_ERRORS) === "true",
  };
}
