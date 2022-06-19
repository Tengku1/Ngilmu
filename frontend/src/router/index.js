import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardGuru from '../views/guru/Dashboard.vue'
import CourseGuru from '../views/guru/Course.vue'
import TambahCourseGuru from '../views/guru/TambahCourse.vue'
import AmbilCourse from '../views/murid/AmbilCourse.vue'


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
  {
    path: '/guru/tambahcourse',
    name: 'tambahcourseguru',
    component: TambahCourseGuru
  },
  {
    path: '/murid/ambilcourse',
    name: 'ambilcourse',
    component: AmbilCourse
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
