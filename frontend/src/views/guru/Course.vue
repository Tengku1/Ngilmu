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
                  <a href="#" class="btn btn-primary">Tambah</a>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered table-md">
                      <tbody>
                        <tr>
                          <th>#</th>
                          <th>Course</th>
                          <th>Tanggal Dibuat</th>
                          <th>Status</th>
                          <th>Edit</th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Bahasa Jepang</td>
                          <td>2017-01-09</td>
                          <td><div class="badge badge-success">Active</div></td>
                          <td>
                            <a href="#" class="btn btn-secondary">Detail</a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Piano</td>
                          <td>2017-01-11</td>
                          <td>
                            <div class="badge badge-danger">Not Active</div>
                          </td>
                          <td>
                            <a href="#" class="btn btn-secondary">Detail</a>
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
import Navbar from "@/components/guru/Navbar.vue";
import Sidebar from "@/components/guru/Sidebar.vue";

export default {
  name: "CourseGuru",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
