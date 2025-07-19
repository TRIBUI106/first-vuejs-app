import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "Home",
      component: () => import("../views/home.vue"),
      // Định nghĩa đường dẫn gốc của ứng dụng
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/about.vue"),
    }
  ],
});

export default router;
