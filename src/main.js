import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue3Lottie from 'vue3-lottie';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faMagnifyingGlass, faDeleteLeft, faAngleLeft, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faLocationDot, faMagnifyingGlass, faDeleteLeft, faAngleLeft, faWheelchair);

createApp(App).use(store).use(router).use(Vue3Lottie).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
