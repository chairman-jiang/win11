import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Desktop',
    component: () => import('../views/Desktop.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
