import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/display.vue')
    },
    {
      path: '/alert',
      name: 'alert',
      component: () => import('./views/alert.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('./views/table-render.vue')
    },
    {
      path: '/table-slot',
      name: 'table-slot',
      component: () => import('./views/table-slot.vue')
    },
    {
      path: '/table-render-slot',
      name: 'table-render-slot',
      component: () => import('./views/table-render-slot.vue')
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: () => import('./views/dynamic.vue')
    }
  ]
})
