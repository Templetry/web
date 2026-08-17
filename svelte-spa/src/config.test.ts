import { loadEnv } from "vite";
import { expect, test } from "vitest";
import { ENVIRONMENTS, readConfig } from "./config";

/**
 * Loads a committed profile through Vite's own loader, so the test reads
 * exactly what a build would — including how `.env` and `.env.local` layer.
 */
function profile(name: string): Record<string, string> {
  return loadEnv(name, process.cwd(), "VITE_");
}

test.each(ENVIRONMENTS)("%s declares its own name", (name) => {
  expect(readConfig(profile(name)).environment).toBe(name);
});

test("development points at a local API and keeps detail on", () => {
  const config = readConfig(profile("development"));
  expect(config.apiBaseUrl).toMatch(/^http:\/\/localhost/);
  expect(config.verboseErrors).toBe(true);
});

test("production points elsewhere and turns detail off", () => {
  const config = readConfig(profile("production"));
  expect(config.apiBaseUrl).toMatch(/^https:\/\//);
  expect(config.verboseErrors).toBe(false);
});

test("staging differs from both neighbours", () => {
  // Staging exists to be production-like while still debuggable, so it is
  // the one profile whose values must not equal either neighbour's.
  const staging = readConfig(profile("staging"));
  expect(staging.apiBaseUrl).not.toBe(readConfig(profile("production")).apiBaseUrl);
  expect(staging.verboseErrors).toBe(true);
});

test("a profile missing its API base URL fails loudly", () => {
  expect(() => readConfig({ VITE_ENVIRONMENT: "staging" })).toThrow(/VITE_API_BASE_URL/);
});

test("an unknown environment name fails loudly", () => {
  expect(() => readConfig({ VITE_ENVIRONMENT: "qa", VITE_API_BASE_URL: "x" })).toThrow(
    /unknown VITE_ENVIRONMENT/,
  );
});
