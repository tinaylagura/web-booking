import { createRouter, createWebHistory } from 'vue-router'
import loginView from '@/views/loginView.vue'
import registerView from '@/views/registerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginView
    },
    {
      path: '/register',
      name: 'register',
      component: registerView
    },
  ]
})

export default router
