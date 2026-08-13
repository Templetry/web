import { greet } from "./lib/greet";

export default function App() {
  return (
    <main className="page">
      <h1>TemplateApp</h1>
      <p>{greet("world")}</p>
      <p className="hint">
        Edit <code>src/App.tsx</code> to start building.
      </p>
    </main>
  );
}
