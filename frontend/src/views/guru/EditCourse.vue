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
                  <h4>Formulir Ubah Course</h4>
                </div>
                <div class="card-body">
                  <div class="form-group">
                    <label>Nama Course</label>
                    <input type="text" class="form-control" v-model="name" />
                  </div>
                  <div class="form-group">
                    <label
                      >Deskripsi Course (deskripsi mengenai course, daerah
                      cakupan untuk belajar langsung ke rumah, dll.)</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="description"
                    />
                  </div>
                  <div class="form-group">
                    <label>Tipe</label>
                    <select
                      class="form-control select2 select2-hidden-accessible"
                      tabindex="-1"
                      aria-hidden="true"
                      v-model="type"
                    >
                      <option value="akademik">Akademik</option>
                      <option value="non-akademik">Non-Akademik</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label>Biaya (1 jam)</label>
                    <input type="number" v-model="price" class="form-control" />
                  </div>

                  <div class="form-group">
                    <label>Link url gambar course</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="imageUrl"
                    />
                  </div>
                </div>
                <div class="card-footer text-right">
                  <router-link class="btn btn-danger mr-2" to="/guru/course"
                    >Delete</router-link
                  >
                  <router-link class="btn btn-primary" to="/guru/course"
                    >Ubah</router-link
                  >
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
import CourseApiHelper from '../../helper/courses';

export default {
  props: ['teacherId', 'id'],
  name: 'EditCourseGuru',
  data() {
    return {
      course: null,
      name: '',
      description: '',
      type: '',
      price: '',
      imageUrl: '',
    };
  },
  components: {
    Navbar,
    Sidebar,
  },
  methods: {
    async editCourse() {
      try {
        const response = await CourseApiHelper.editCourse(
          this.id,
          this.name,
          this.type,
          this.imageUrl,
          this.description,
          this.price
        );
        if (response.status === 200) {
          alert('Data course berhasil diubah');
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
  async created() {
    const response = await CourseApiHelper.getCourseById(this.id);
    console.log(response);
    if (response) {
      this.course = response;
    } else {
      alert('gagal');
    }
  },
};
</script>
