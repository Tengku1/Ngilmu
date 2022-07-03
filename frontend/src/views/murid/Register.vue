<template>
  <div id="app">
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div
            class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2"
          >
            <div class="login-brand">
              <img
                src="assets/img/stisla-fill.svg"
                alt="logo"
                width="100"
                class="shadow-light rounded-circle"
              />
            </div>

            <div class="card card-primary">
              <div class="card-header"><h4>Daftar Sebagai Murid</h4></div>

              <div class="card-body">
                <form @submit.prevent="register">
                  <div class="form-group">
                    <label for="name">Nama Lengkap</label>
                    <input
                      id="name"
                      v-model="fullName"
                      type="text"
                      class="form-control"
                      name="name"
                      autofocus=""
                    />
                  </div>

                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      v-model="email"
                      type="email"
                      class="form-control"
                      name="email"
                    />
                    <div class="invalid-feedback"></div>
                  </div>

                  <div class="form-group">
                    <label for="nomer">Nomer Whatsapp</label>
                    <input
                      id="nomer"
                      v-model="phoneNumber"
                      type="number"
                      class="form-control"
                      name="nomer"
                      autofocus=""
                    />
                  </div>

                  <div class="form-group">
                    <label for="password" class="d-block">Password</label>
                    <input
                      id="password"
                      v-model="password"
                      type="password"
                      class="form-control pwstrength"
                      data-indicator="pwindicator"
                      name="password"
                    />
                    <div id="pwindicator" class="pwindicator">
                      <div class="bar"></div>
                      <div class="label"></div>
                    </div>
                  </div>

                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg btn-block"
                    >
                      Daftar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="simple-footer">Copyright © Ngilmu 2022</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import register from '../../helper/register';
import router from '../../router/index';
export default {
  name: 'RegisterMurid',
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      phoneNumber: '',
      roles: 'Murid',
    };
  },
  methods: {
    async register() {
      const password = this.password.toString();
      const phone = this.phoneNumber.toString();
      try {
        const response = await register(
          this.email,
          this.fullName,
          phone,
          password,
          this.roles
        );
        if (response) {
          router.push('/murid/login');
        }
      } catch (error) {
        alert('Telah terjadi kesalahan..');
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>
