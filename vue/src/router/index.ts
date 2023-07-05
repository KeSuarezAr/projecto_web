import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ViewsLogin from "../views/ViewsLogin.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: ViewsLogin,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
