import { createRouter, createWebHashHistory } from "vue-router";

const appRoutes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/extract",
    name: "extract",
    component: () => import("@/views/extract/index.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: () => import("@/views/game/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/source",
    name: "source",
    component: () => import("@/views/source/index.vue"),
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

export { appRoutes };

export default router;
