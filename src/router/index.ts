import { createRouter, createWebHistory } from 'vue-router'
import HelloView from '@/views/HelloView.vue'
import CreateItemView from '@/views/CreateItemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloView
    },
    {
      path: '/new',
      name: 'newItem',
      component: CreateItemView
    },
  ]
})

export default router
