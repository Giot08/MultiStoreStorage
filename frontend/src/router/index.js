import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/pis',
      name: 'pick in store',
      component: () => import('../views/PISView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/dad',
      name: 'delivery at door',
      component: () => import('../views/DADView.vue')
    },
    {
      path: '/storage',
      name: 'storage',
      component: () => import('../views/StorageView.vue')
    },
    {
      path: '/stores',
      name: 'stores',
      component: () => import('../views/StoresView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    }
  ]
})

export default router
