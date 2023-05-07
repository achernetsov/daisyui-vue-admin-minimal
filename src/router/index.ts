import { createRouter, createWebHistory } from 'vue-router'
import HelloView from '@/views/HelloView.vue'
import ItemView from '@/views/ItemView.vue'
import ItemInfo from '@/components/item/ItemInfo.vue'
import ItemProps from '@/components/item/ItemProps.vue'
import LogoutView from '@/views/LogoutView.vue'

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
      component: ItemView,
      children: [
        {
          path: '',
          name: 'newItemHome',
          redirect: { name: 'itemInfo' },
        },
        {
          name: 'itemInfo',
          path: 'info',
          component: ItemInfo,
        },
        {
          name: 'itemProps',
          path: 'props',
          component: ItemProps,
        },
      ],
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView
    }
  ]
})

export default router
