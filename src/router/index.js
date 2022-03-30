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
    path: "/bus-search",
    name: "BusSearch",
    component: () =>
      import(/* webpackChunkName: "bus-search" */ "../views/BusSearch.vue")
  },
  {
    path: "/bus-dynamic-info",
    name: "BusDynamicInfo",
    component: () =>
      import(/* webpackChunkName: "bus-dynamic-info" */ "../views/BusDynamicInfo.vue")
  },
  {
    path: "/nearby-stations",
    name: "NearbyStations",
    component: () =>
      import(/* webpackChunkName: "nearby-stations" */ "../views/NearbyStations.vue")
  },
  {
    path: "/nearby-station-routes",
    name: "NearbyStationRoutes",
    component: () =>
      import(/* webpackChunkName: "nearby-station-routes" */ "../views/NearbyStationRoutes.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
