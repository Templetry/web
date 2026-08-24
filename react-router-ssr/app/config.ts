/**
 * ADR-0018 profiles.
 *
 * Read from import.meta.env at build time, so the value is baked into both the
 * client bundle and the worker rather than looked up per request.
 */
export type Profile = "development" | "staging" | "production";

export function profileFrom(raw: string | undefined): Profile {
  switch (raw) {
    case "staging":
      return "staging";
    case "production":
      return "production";
    default:
      // An unknown mode falls back rather than throwing: a typo in a build flag
      // should not take the whole site down at boot.
      return "development";
  }
}

export const profile: Profile = profileFrom(import.meta.env.MODE);
