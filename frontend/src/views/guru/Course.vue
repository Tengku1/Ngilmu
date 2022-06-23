<template>
  <div id="app">
    <div class="main-wrapper">
      <Navbar />
      <Sidebar />
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
                  <router-link class="btn btn-info" to="/guru/tambahcourse"
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
                          <th>Tingkat</th>
                          <th>Biaya (1 jam)</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Bahasa Jepang</td>
                          <td>Akademik</td>
                          <td>Beginner</td>
                          <td>Rp. 10000</td>
                          <td><div class="badge badge-success">Aktif</div></td>
                          <td>
                            <router-link
                              class="btn btn-primary"
                              to="/guru/editcourse"
                              >Ubah</router-link
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Piano</td>
                          <td>Non-Akademik</td>
                          <td>Advanced</td>
                          <td>Rp. 10000</td>
                          <td>
                            <div class="badge badge-danger">Tidak Aktif</div>
                          </td>
                          <td>
                            <router-link
                              class="btn btn-primary"
                              to="/guru/editcourse"
                              >Ubah</router-link
                            >
                          </td>
                        </tr>
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

export default {
  name: 'CourseGuru',
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
