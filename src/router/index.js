import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from '@/views/weather/Weather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/weather'
  },
  // {
  //     path: '/home',
  //     name: 'Home',
  //     component: Home
  // },
  // {
  //     path: '/category',
  //     name: 'Category',
  //     component: () => import('../views/category/Category.vue')
  // },
  // {
  //     path: '/shopcart',
  //     name: 'Shopcart',
  //     component: () => import('../views/shopcart/Shopcart.vue')
  // },
  {
    path: '/weather',
    component: Weather
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
