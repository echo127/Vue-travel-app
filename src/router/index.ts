import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import uuid from 'uuid';

Vue.use(VueRouter);
const newId = uuid.v4();
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
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
