import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/table",
    component: () => import("@/views/table/index.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/test/index.vue"),
  },
  {
    path: "/emit",
    component: () => import("@/views/emit/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: routes,
});

export default router;
