import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";

import { MdButton, MdField } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdButton);
Vue.use(MdField);

Vue.config.productionTip = false;

new Vue({ 
  store,
  render: (h) => h(App),
}).$mount("#app");
