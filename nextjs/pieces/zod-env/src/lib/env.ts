import { z } from "zod";

// Environment contract for TemplateApp: fail fast at startup instead of
// discovering a missing variable in production.
const schema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  APP_URL: z.string().url().default("http://localhost:3000"),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment:", parsed.error.flatten().fieldErrors);
  throw new Error("Invalid environment");
}

export const env = parsed.data;

// Client-side variables must carry the public prefix to reach the browser.
export const publicPrefix = "NEXT_PUBLIC_"; // tpl:var env_prefix NEXT_PUBLIC_
