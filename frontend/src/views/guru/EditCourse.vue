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
                  <button @click="editCourse" class="btn btn-primary">
                    Simpan
                  </button>
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
import router from '../../router/index';

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
        console.log(response);

        if (response.status === 200) {
          alert('Data course berhasil diubah');
          router.push(`/guru/${this.teacherId}/course`);
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
  async created() {
    const response = await CourseApiHelper.getCourseById(this.id);
    if (response) {
      this.course = response;
      this.name = this.course.name;
      this.description = this.course.description;
      this.type = this.course.type;
      this.price = this.course.price;
      this.imageUrl = this.course.img;
    } else {
      alert('gagal');
    }
  },
};
</script>
