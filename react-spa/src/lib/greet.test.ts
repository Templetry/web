import { expect, test } from "vitest";
import { greet } from "./greet";

test("greet greets", () => {
  expect(greet("world")).toBe("Hello, world!");
});
