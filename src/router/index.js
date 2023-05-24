import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from '@/views/weather/Weather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // redirect: '/weather'
    component: Weather
  },
  {
    path: '/weather',
    component: Weather
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
