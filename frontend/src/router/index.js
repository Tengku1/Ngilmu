import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardGuru from '../views/guru/Dashboard.vue'

const routes = [
  {
    path: '/dashboardguru',
    name: 'dashboardguru',
    component: DashboardGuru
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
