import Vue from 'vue'
import Router from 'vue-router'
import Main from "./views/Main";
import About from "./views/About"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
