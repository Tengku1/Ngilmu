<template>
  <div id="app">
    <div class="main-wrapper">
      <Navbar />
      <Sidebar />
      <div class="main-content" style="min-height: 757px">
        <section class="section">
          <div class="section-header">
            <h1>User</h1>
          </div>

          <div class="section-body">
            <h2>
              <router-link class="btn btn-primary" to="/murid/ambilcourse"
                ><i class="fa fa-angle-left"></i
              ></router-link>
            </h2>
            <div class="row">
              <div class="col-12 col-sm-12 col-lg-12">
                <div class="card author-box card-primary">
                  <div class="card-body">
                    <div class="author-box-left">
                      <img
                        alt="image"
                        :src="courseDetail.imageUrl"
                        class="rounded-circle author-box-picture"
                      />
                      <div class="clearfix"></div>
                      <a
                        href="#"
                        class="btn btn-success mt-3 follow-btn"
                        data-follow-action="alert('follow clicked');"
                        data-unfollow-action="alert('unfollow clicked');"
                        >Whatsapp</a
                      >
                    </div>
                    <div class="author-box-details">
                      <div class="author-box-name">
                        <a>{{ courseDetail.name }}</a>
                      </div>
                      <div class="author-box-job">{{ courseDetail.type }}</div>
                      <div class="author-box-description">
                        <p>Deskripsi : {{ courseDetail.description }}</p>
                        <p>Biaya : {{ courseDetail.price }}</p>
                      </div>
                      <div class="w-100 d-sm-none"></div>
                    </div>
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
import Navbar from '@/components/murid/Navbar.vue';
import Sidebar from '@/components/murid/Sidebar.vue';
import CourseApiHelper from '../../helper/courses';

export default {
  name: 'DetailCourse',
  props: ['id'],
  data() {
    return {
      courseDetail: {},
    };
  },
  components: {
    Navbar,
    Sidebar,
  },
  async created() {
    const response = await CourseApiHelper.getCourseById(this.id);
    if (!response) {
      alert(`Course dengan id ${this.id} tidak ditemukan`);
      return;
    }

    this.courseDetail = Object.assign(this.courseDetail, response);
  },
};
</script>
