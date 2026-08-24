import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Template App" }];
}

export default function Home() {
  return (
    <main>
      <h1>Template App</h1>
      <p>Server-rendered on Cloudflare Workers.</p>
    </main>
  );
}
