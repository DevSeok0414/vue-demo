import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/MainView.vue";
import Posts from "@/views/PostView.vue";

const routes = [
  {
    path: "/posts",
    alias: ['/', '/movies'],
    name: "posts",
    component: Posts,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
