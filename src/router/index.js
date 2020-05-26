import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Secret from '../views/Secret.vue'
import Callback from '../views/Callback.vue'
import NotAuthorized from '../views/NotAuthorized.vue'

import { isLoggedIn } from '../../utils/auth'

function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/notauthorized'
    });
  } else {
    next();  
  }
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/secret',
    name: 'Secret',
    beforeEnter: requireAuth,
    component: Secret
  },
  {
    path: '/auth0callback',
    name: 'Callback',
    component: Callback
  },
  {
    path: '/notauthorized',
    name: 'NotAuthorized',
    component: NotAuthorized
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
