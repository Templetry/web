<script lang="ts">
  import { greet } from "./lib/greet";

  let count = $state(0);
</script>

<main class="page">
  <h1>TemplateApp</h1>
  <p>{greet("world")}</p>
  <button onclick={() => count++}>clicked {count} times</button>
  <p class="hint">Edit <code>src/App.svelte</code> to start building.</p>
</main>
