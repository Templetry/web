// tpl:if environments
import { readConfig, type AppConfig } from "./config";

/**
 * Resolved once, here rather than in config.ts: that module stays free of
 * side effects, so a test can import it without a Next build around it.
 *
 * The values were inlined by next.config.ts from the active profile.
 */
export const config: AppConfig = readConfig({
  NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_VERBOSE_ERRORS: process.env.NEXT_PUBLIC_VERBOSE_ERRORS,
});
// tpl:endif

/**
 * The active profile, or null when this project has none. The seam keeps
 * directives out of the components.
 */
export function activeEnvironment(): string | null {
  // tpl:if environments
  return config.environment;
  // tpl:endif
  // tpl:if !environments
  return null;
  // tpl:endif
}
