import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { expect, test } from "vitest";
import { ENVIRONMENTS, readConfig } from "./config";

/** Reads a committed profile the way Vite would, so the files are tested. */
function profile(name: string): Record<string, string> {
  const text = readFileSync(resolve(import.meta.dirname, "..", "..", `.env.${name}`), "utf8");
  const out: Record<string, string> = {};
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq > 0) out[trimmed.slice(0, eq)] = trimmed.slice(eq + 1);
  }
  return out;
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
  expect(() => readConfig({ NEXT_PUBLIC_ENVIRONMENT: "staging" })).toThrow(/NEXT_PUBLIC_API_BASE_URL/);
});

test("an unknown environment name fails loudly", () => {
  expect(() => readConfig({ NEXT_PUBLIC_ENVIRONMENT: "qa", NEXT_PUBLIC_API_BASE_URL: "x" })).toThrow(
    /unknown NEXT_PUBLIC_ENVIRONMENT/,
  );
});
