import { createRouter, createWebHashHistory } from 'vue-router';
import DashboardGuru from '../views/guru/Dashboard.vue';
import CourseGuru from '../views/guru/Course.vue';
import TambahCourseGuru from '../views/guru/TambahCourse.vue';
import AmbilCourse from '../views/murid/AmbilCourse.vue';
import LoginGuru from '../views/guru/Login.vue';
import RegisterGuru from '../views/guru/Register.vue';
import LoginMurid from '../views/murid/Login.vue';
import RegisterMurid from '../views/murid/Register.vue';
import AboutPage from '../views/misc/AboutPage.vue';
import HomePage from '../views/misc/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/guru/dashboard',
    name: 'dashboardguru',
    component: DashboardGuru,
  },
  {
    path: '/guru/course',
    name: 'courseguru',
    component: CourseGuru,
  },
  {
    path: '/guru/tambahcourse',
    name: 'tambahcourseguru',
    component: TambahCourseGuru,
  },
  {
    path: '/murid/ambilcourse',
    name: 'ambilcourse',
    component: AmbilCourse,
  },
  {
    path: '/guru/login',
    name: 'loginguru',
    component: LoginGuru,
  },
  {
    path: '/guru/register',
    name: 'registerguru',
    component: RegisterGuru,
  },
  {
    path: '/murid/login',
    name: 'loginmurid',
    component: LoginMurid,
  },
  {
    path: '/murid/register',
    name: 'registermurid',
    component: RegisterMurid,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
