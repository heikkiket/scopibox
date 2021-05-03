import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import History from "../views/History.vue";
import Login from "../views/Login.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // Login is the only unauthenthicated route for now
  if (to.name === "Login") next();

  if (!store.state.loggedin) next({ name: "Login" });

  next();
});

export default router;
