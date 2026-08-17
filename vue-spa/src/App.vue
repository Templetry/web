<script setup lang="ts">
import { greet } from "./lib/greet";
import { activeEnvironment } from "./lib/environment";

// Null when this project has no profiles, and hidden in production — a
// badge that is always visible stops being information.
const environment = activeEnvironment();
</script>

<template>
  <main class="page">
    <h1>TemplateApp</h1>
    <p v-if="environment && environment !== 'production'" class="envbadge">
      {{ environment }}
    </p>
    <p>{{ greet("world") }}</p>
    <p class="hint">Edit <code>src/App.vue</code> to start building.</p>
  </main>
</template>
