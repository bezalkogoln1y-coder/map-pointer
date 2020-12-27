import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Auth from '../views/Auth.vue';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
         layout: 'BaseLayout',
      },
   },
   {
      path: '/auth',
      name: 'Auth',
      component: Auth,
      meta: {
         layout: 'BaseLayout',
      },
   },
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes,
});

export default router;
