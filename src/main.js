import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationDot, faMagnifyingGlass, faDeleteLeft, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLocationDot, faMagnifyingGlass, faDeleteLeft, faAngleLeft);

createApp(App).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
