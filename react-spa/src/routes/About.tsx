import { Link } from "react-router-dom";

export function About() {
  return (
    <main className="page">
      <h1>About</h1>
      <p>TemplateApp — generated with Templetry.</p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </main>
  );
}
