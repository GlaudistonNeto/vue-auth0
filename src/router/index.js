import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Members from '../views/Members.vue'
import Login from '../views/Login.vue'
import Store from '../store/index'

Vue.use(VueRouter)

  const router = new VueRouter ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {} // protected
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/members',
      name: 'Members',
      component: Members,
      meta: { requiresAuth: true }
    },
  ] 
});

router.beforeEach( (to, from, next) => {
  let routerAuthCheck = false;
  if (routerAuthCheck) {
    Store.commit('setUserIsAuthenticated', true);
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (routerAuthCheck) {
      next();
    }
    else {
      router.replace('/login');
    }
  }
  else {
    next();
  }
});

export default router