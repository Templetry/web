import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import About from "./About.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: App },
    { path: "/about", component: About },
  ],
});
