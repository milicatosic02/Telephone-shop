import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrijavaView from '../views/PrijavaView.vue'
import TelefonView from '../views/TelefonView.vue'
import BrendView from '../views/BrendView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/telefon/:id',
    name: 'telefon',
    component: TelefonView
  },
  {
    path: '/brendovi',
    name: 'BrendView',
    component: BrendView
  },
  {
    path: '/prijavi-promenu',
    name: 'PrijavaView',
    component: PrijavaView
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
