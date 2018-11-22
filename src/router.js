import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/how-it-works',
      name: 'how-it-works',
      // route level code-splitting
      // this generates a separate chunk (how-it-works.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "how-it-works" */ './views/HowItWorks.vue'),
    },
  ],
});
