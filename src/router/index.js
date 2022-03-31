import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
  },
  {
    path: "/inter-bus-search",
    name: "InterBusSearch",
    component: () =>
      import(/* webpackChunkName: "inter-bus-search" */ "../views/InterBusSearch.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
