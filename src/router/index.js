import { createRouter, createWebHistory } from 'vue-router'
import Catalog from "@/views/Catalog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Каталог',
      component: Catalog
    },
    {
      path: '/cart',
      name: 'Корзина',
      component: () => import('../views/Cart.vue')
    }
  ]
})

export default router
