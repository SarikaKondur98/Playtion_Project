import Vue from 'vue'
import VueRouter from 'vue-router'
import UserDetails from '../components/User/UserDetails.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/UserDetail',
    name: 'UserDetails',
    component: UserDetails
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
