/**
 * The active environment profile.
 *
 * Next.js loads `.env.$(NODE_ENV)`, which only ever takes three values and
 * has no room for staging. So the profile is chosen by `APP_ENV` and read in
 * `next.config.ts`, which inlines it into the bundle — the same shape Next
 * uses for its own `env` option, without a dotenv dependency.
 */
export const ENVIRONMENTS = ["development", "staging", "production"] as const;
export type Environment = (typeof ENVIRONMENTS)[number];

export type AppConfig = {
  environment: Environment;
  apiBaseUrl: string;
  verboseErrors: boolean;
};

/**
 * Validates a raw environment bag. Exported so tests can feed it the
 * committed profile files instead of running a build per mode.
 */
export function readConfig(env: Record<string, unknown>): AppConfig {
  const environment = String(env.NEXT_PUBLIC_ENVIRONMENT ?? "");
  if (!ENVIRONMENTS.includes(environment as Environment)) {
    throw new Error(`config: unknown NEXT_PUBLIC_ENVIRONMENT ${JSON.stringify(environment)}`);
  }
  const apiBaseUrl = String(env.NEXT_PUBLIC_API_BASE_URL ?? "");
  if (!apiBaseUrl) {
    throw new Error("config: NEXT_PUBLIC_API_BASE_URL is missing from the active profile");
  }
  return {
    environment: environment as Environment,
    apiBaseUrl,
    verboseErrors: String(env.NEXT_PUBLIC_VERBOSE_ERRORS) === "true",
  };
}
