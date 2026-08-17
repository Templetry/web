import { greet } from "@/lib/greet";
import { activeEnvironment } from "@/lib/environment";

export default function Home() {
  // Null when this project has no profiles, and hidden in production —
  // a badge that is always visible stops being information.
  const environment = activeEnvironment();

  return (
    <main className="page">
      <h1>TemplateApp</h1>
      {environment && environment !== "production" && (
        <p className="envbadge">{environment}</p>
      )}
      <p>{greet("world")}</p>
      <p className="hint">
        Edit <code>src/app/page.tsx</code> to start building.
      </p>
    </main>
  );
}
