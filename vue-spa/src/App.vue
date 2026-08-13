<script setup lang="ts">
import { greet } from "./lib/greet";
</script>

<template>
  <main class="page">
    <h1>TemplateApp</h1>
    <p>{{ greet("world") }}</p>
    <p class="hint">Edit <code>src/App.vue</code> to start building.</p>
  </main>
</template>
