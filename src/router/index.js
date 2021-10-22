import Vue from 'vue';
import VueRouter from 'vue-router';

import Authentication from './modules/authentication.router';
import Home from './modules/home.router';

Vue.use(VueRouter);

const routes = [
  ...Authentication,
  ...Home,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
