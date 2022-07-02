<template>
  <div id="app">
    <div class="main-wrapper">
      <Navbar />
      <Sidebar />
      <div class="main-content" style="min-height: 757px">
        <section class="section">
          <div class="section-header">
            <h1>Ambil Course</h1>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <course-card
              v-for="course in courses"
              :key="course.id"
              :id="course.id"
              :name="course.name"
              :imageUrl="course.img"
              :description="course.description"
            ></course-card>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/murid/Navbar.vue';
import Sidebar from '@/components/murid/Sidebar.vue';
import CourseCard from '@/components/CourseCard.vue';
import CourseApiHelper from '../../helper/courses';
import CourseCard from '../../components/CourseCard.vue';

export default {
  name: 'AmbilCourse',
  data() {
    return {
      courses: [],
    };
  },
  components: {
    Navbar,
    Sidebar,
    CourseCard,
  },
  async created() {
    const data = await CourseApiHelper.getAllCourse();
    if (!data) {
      return;
    } else {
      this.courses = data;
    }
  },
};
</script>
