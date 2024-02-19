import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/user/register',
      name: 'Register',
      component: () => import('@/views/register/index.vue')
    }
  ]
})

export default router
