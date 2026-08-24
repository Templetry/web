import { describe, expect, it } from "vitest";
import { profileFrom } from "./config";

describe("profileFrom", () => {
  it("recognises the three profiles", () => {
    expect(profileFrom("staging")).toBe("staging");
    expect(profileFrom("production")).toBe("production");
    expect(profileFrom("development")).toBe("development");
  });

  it("falls back to development rather than throwing", () => {
    expect(profileFrom("nonsense")).toBe("development");
    expect(profileFrom(undefined)).toBe("development");
  });
});
