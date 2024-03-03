import { createRouter, createWebHashHistory } from "vue-router";

const appRoutes = [
  {
    path: "/",
    redirect: "test",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("@/views/game/index.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/test/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: appRoutes,
});

export default router;
