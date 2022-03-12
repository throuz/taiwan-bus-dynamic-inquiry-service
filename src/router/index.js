import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { navbar: false }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/inquire-bus",
    name: "InquireBus",
    component: () =>
      import(/* webpackChunkName: "inquire-bus" */ "../views/InquireBus.vue"),
    meta: { navbar: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
