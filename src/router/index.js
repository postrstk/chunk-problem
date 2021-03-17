import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routerOptions = {
  mode: "history",
  base: process.env.VUE_APP_BASE_PATH,
};

const appModuleName = process.env.VUE_APP_MODULE_TAG;
// const validPaths = {
//   dashboard: './dashboard.routes.js',
//   public: './public.routes.js'
// };
// const routes = require(`${validPaths[appModuleName]}`).default;

const routes = require(`./${appModuleName}.routes`).default;
const commonRoutes = require('./common.routes.js').default;
// const routes = require(`./public.routes`).default;

const router = new VueRouter({
  ...routerOptions,
  routes: [...routes, ...commonRoutes],
});

export default router;
