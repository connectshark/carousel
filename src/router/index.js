import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classic',
    name: 'classic',
    component: () => import('../views/classic.vue')
  },
  {
    path: '/listView',
    name: 'listView',
    component: () => import('../views/listView.vue')
  },
  {
    path: '*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
