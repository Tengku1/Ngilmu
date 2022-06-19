import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardGuru from '../views/guru/Dashboard.vue'
import CourseGuru from '../views/guru/Course.vue'

const routes = [
  {
    path: '/guru/dashboard',
    name: 'dashboardguru',
    component: DashboardGuru
  },
  {
    path: '/guru/course',
    name: 'courseguru',
    component: CourseGuru
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
