import { createPinia } from "pinia";

// Install with: createApp(App).use(pinia).mount("#app")
export const pinia = createPinia();

export { useCounterStore } from "./counter";
