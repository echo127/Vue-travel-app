import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DestinationDetails/:slug',
    name: 'DestinationDetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ '../views/DestinationDetails.vue'
      ),

    children: [
      {
        path: `/DestinationDetails/:slug/:experienceSlug`,
        name: 'ExperienceDetails',
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ '../views/ExperienceDetails.vue'
          )
      }
    ],
    beforeEnter(to, from, next) {
      const exist = store.destinations.find(
        destination => destination.slug === to.params.slug
      );
      if (exist) {
        next();
      } else {
        next({ name: 'noFound' });
      }
    }
  },
  {
    path: '*',
    name: 'noFound',
    component: () =>
      import(/* webpackChunkName: "NoFound" */ '../views/NoFound.vue')
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
