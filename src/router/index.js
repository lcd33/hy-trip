import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    name: 'favor',
    path: '/favor',
    component: () => import('@/views/favor/Favor.vue')
  },
  {
    name: 'order',
    path: '/order',
    component: () => import('@/views/orders/Oreder.vue')
  },
  {
    name: 'message',
    path: '/message',
    component: () => import('@/views/message/Message.vue'),

  },
  {
    name: 'city',
    path: '/city',
    component: () => import('@/views/city/City.vue'),
    meta: {
      hide: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router