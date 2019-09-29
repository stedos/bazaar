import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Bazaar from "./views/Bazaar.vue";
import store from '@/store'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/bazaar/:id",
      name: "Bazaar",
      component: Bazaar
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  await store.restored
  next()
});

export default router;