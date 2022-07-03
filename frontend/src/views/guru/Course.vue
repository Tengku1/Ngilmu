<template>
  <div id="app">
    <div class="main-wrapper">
      <Navbar />
      <sidebar :teacherId="teacherId"></sidebar>
      <div class="main-content" style="min-height: 757px">
        <section class="section">
          <div class="section-header">
            <h1>Course</h1>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 col-lg-12">
              <div class="card">
                <div class="card-header">
                  <h4>Tabel Course</h4>
                  <router-link
                    class="btn btn-info"
                    :to="`/guru/${teacherId}/tambahcourse`"
                    >Tambah Course</router-link
                  >
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered table-md">
                      <tbody>
                        <tr>
                          <th>ID</th>
                          <th>Course</th>
                          <th>Tipe</th>
                          <th>Biaya (1 jam)</th>
                          <th></th>
                        </tr>
                        <course-table
                          v-for="(course, index) in courses"
                          :key="course.id"
                          :course="course"
                          :index="index"
                          :teacherId="teacherId"
                        ></course-table>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/guru/Navbar.vue';
import Sidebar from '@/components/guru/Sidebar.vue';
import CourseTable from './CourseTable.vue';
import CourseApiHelper from '../../helper/courses';

export default {
  name: 'CourseGuru',
  props: ['teacherId'],
  data() {
    return {
      courses: [],
    };
  },
  components: {
    Navbar,
    Sidebar,
    CourseTable,
  },
  async created() {
    try {
      const responseData = await CourseApiHelper.getCoursesByTeacherId(
        this.teacherId
      );
      if (responseData) {
        this.courses = responseData;
      }
    } catch (error) {
      alert('Telah terjadi kesalahan..');
    }
  },
};
</script>
