import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
      import(/* webpackChunkName: "inquire-bus" */ "../views/InquireBus.vue")
  },
  {
    path: "/bus-dynamic-info",
    name: "BusDynamicInfo",
    component: () =>
      import(/* webpackChunkName: "bus-dynamic-info" */ "../views/BusDynamicInfo.vue")
  },
  {
    path: "/nearby-bus-stop",
    name: "NearbyBusStop",
    component: () =>
      import(/* webpackChunkName: "nearby-bus-stop" */ "../views/NearbyBusStop.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
