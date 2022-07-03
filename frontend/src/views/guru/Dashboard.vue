<template>
  <div id="app">
    <div class="main-wrapper">
      <Navbar />
      <sidebar :teacherId="teacherId"></sidebar>
      <div class="main-content" style="min-height: 757px">
        <section class="section">
          <div class="section-header">
            <h1>Dashboard</h1>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="card card-statistic-1">
                <div class="card-icon bg-primary">
                  <i class="fas fa-bookmark"></i>
                </div>
                <div class="card-wrap">
                  <div class="card-header">
                    <h4>Total Course</h4>
                  </div>
                  <div class="card-body">2</div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="card card-statistic-1">
                <div class="card-icon bg-success">
                  <i class="fas fa-check"></i>
                </div>
                <div class="card-wrap">
                  <div class="card-header">
                    <h4>Course Aktif</h4>
                  </div>
                  <div class="card-body">1</div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="card card-statistic-1">
                <div class="card-icon bg-danger">
                  <i class="fas fa-close"></i>
                </div>
                <div class="card-wrap">
                  <div class="card-header">
                    <h4>Course Tidak Aktif</h4>
                  </div>
                  <div class="card-body">1</div>
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

export default {
  props: ['teacherId'],
  name: 'DashboardGuru',
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
