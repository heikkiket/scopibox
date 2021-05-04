import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";

import { MdButton, MdField } from "vue-material/dist/components";
import {
  MdApp,
  MdToolbar,
  MdDrawer,
  MdList,
  MdTabs,
  MdContent,
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "./styles/theme.scss";
import router from "./router";

Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdApp);
Vue.use(MdToolbar);
Vue.use(MdDrawer);
Vue.use(MdList);
Vue.use(MdTabs);
Vue.use(MdContent);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
