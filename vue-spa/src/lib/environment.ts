// tpl:if environments
import { readConfig, type AppConfig } from "../config";

/**
 * Resolved once, here rather than in config.ts: that module stays free of
 * side effects, so a test can import it without a Vite environment.
 */
export const config: AppConfig = readConfig(import.meta.env);
// tpl:endif

/**
 * The active profile, or null when this project has none.
 *
 * This seam exists because `.vue` and `.svelte` files cannot carry template
 * directives — Svelte is not in the engine's comment table at all, and an
 * HTML comment inside a Vue `<script setup>` block is invalid JavaScript.
 * Components import this and stay free of conditionals.
 */
export function activeEnvironment(): string | null {
  // tpl:if environments
  return config.environment;
  // tpl:endif
  // tpl:if !environments
  return null;
  // tpl:endif
}
