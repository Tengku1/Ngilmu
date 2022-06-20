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
            <div class="card">
              <div class="card-header">
                <h4>My Picture</h4>
                <div class="card-header-action">
                  <a href="#" class="btn btn-primary">Detail</a>
                </div>
              </div>
              <div class="card-body">
                <div class="chocolat-parent">
                  <a
                    href="assets/img/example-image.jpg"
                    class="chocolat-image"
                    title="Just an example"
                  >
                    <div
                      data-crop-image="285"
                      style="
                        overflow: hidden;
                        position: relative;
                        height: 285px;
                      "
                    >
                      <img
                        alt="image"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Steinway_%26_Sons_concert_grand_piano%2C_model_D-274%2C_manufactured_at_Steinway%27s_factory_in_Hamburg%2C_Germany.png/1200px-Steinway_%26_Sons_concert_grand_piano%2C_model_D-274%2C_manufactured_at_Steinway%27s_factory_in_Hamburg%2C_Germany.png"
                        class="img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <p>Write something here</p>
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
import Navbar from "@/components/murid/Navbar.vue";
import Sidebar from "@/components/murid/Sidebar.vue";

export default {
  name: "AmbilCourse",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
