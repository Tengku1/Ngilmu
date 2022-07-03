import { createRouter, createWebHashHistory } from 'vue-router';
import DashboardGuru from '../views/guru/Dashboard.vue';
import CourseGuru from '../views/guru/Course.vue';
import TambahCourseGuru from '../views/guru/TambahCourse.vue';
import EditCourseGuru from '../views/guru/EditCourse.vue';
import AmbilCourse from '../views/murid/AmbilCourse.vue';
import DetailCourse from '../views/murid/DetailCourse.vue';
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
    path: '/guru/:teacherId/dashboard',
    name: 'dashboardguru',
    component: DashboardGuru,
    props: true,
  },
  {
    path: '/guru/:teacherId/course',
    name: 'courseguru',
    component: CourseGuru,
    props: true,
  },
  {
    path: '/guru/:teacherId/tambahcourse',
    name: 'tambahcourseguru',
    component: TambahCourseGuru,
    props: true,
  },
  {
    path: '/guru/:teacherId/editcourse/:id',
    name: 'editcourseguru',
    component: EditCourseGuru,
    props: true,
  },
  {
    path: '/murid/ambilcourse',
    name: 'ambilcourse',
    component: AmbilCourse,
  },
  {
    path: '/murid/detailcourse/:id',
    name: 'detailcourse',
    component: DetailCourse,
    props: true,
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
