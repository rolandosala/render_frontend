import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Create from '../components/Create.vue'

const routes = [
  { path: '/', name: 'Home', component: Dashboard },
  { path: '/create', name: 'About', component: Create },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
