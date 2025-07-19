import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,

      // Định nghĩa đường dẫn gốc của ứng dụng
    },
  ],
});

export default router;
