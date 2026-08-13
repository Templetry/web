import { defineStore } from "pinia";
import { ref } from "vue";

// Counter store for TemplateApp. Add stores as the app grows.
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const increment = () => (count.value += 1);
  const reset = () => (count.value = 0);
  return { count, increment, reset };
});
