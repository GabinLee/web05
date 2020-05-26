import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children : [
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
        path: '/menu',
        name: 'Menu',
        component: () => import('../views/Menu.vue')
      },
      {
        path: '/events',
        name: 'Events',
        component: () => import('../views/Events.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
      }
    ]
    
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
