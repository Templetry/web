<script lang="ts">
  import { greet } from "./lib/greet";
  import { activeEnvironment } from "./lib/environment";

  let count = $state(0);

  // Null when this project has no profiles, and hidden in production — a
  // badge that is always visible stops being information.
  const environment = activeEnvironment();
</script>

<main class="page">
  <h1>TemplateApp</h1>
  {#if environment && environment !== "production"}
    <p class="envbadge">{environment}</p>
  {/if}
  <p>{greet("world")}</p>
  <button onclick={() => count++}>clicked {count} times</button>
  <p class="hint">Edit <code>src/App.svelte</code> to start building.</p>
</main>
