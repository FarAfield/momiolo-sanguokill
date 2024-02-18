import { createRouter, createWebHashHistory } from "vue-router";

const appRoutes = [
  {
    path: "/",
    redirect: "game",
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: appRoutes,
});

export default router;
