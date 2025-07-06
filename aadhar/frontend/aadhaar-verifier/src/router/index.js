import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    beforeEnter: (to, from, next) => {
      const user = localStorage.getItem('aadhaar-user')
      if (user) {
        next()
      } else {
        next('/') // redirect to Home if not verified
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
