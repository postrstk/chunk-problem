import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routerOptions = {
  mode: "history",
  base: process.env.VUE_APP_BASE_PATH,
}

const appModuleName = process.env.VUE_APP_MODULE_TAG;

const routes = require(`./${appModuleName}.routes`).default;

const router = new VueRouter({
  ...routerOptions,
  routes,
});

export default router;
