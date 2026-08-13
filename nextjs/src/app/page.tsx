import { greet } from "@/lib/greet";

export default function Home() {
  return (
    <main className="page">
      <h1>TemplateApp</h1>
      <p>{greet("world")}</p>
      <p className="hint">
        Edit <code>src/app/page.tsx</code> to start building.
      </p>
    </main>
  );
}
