<template>
<div id="app">
    <section class="section">
      <div class="d-flex flex-wrap align-items-stretch">
        <div
          class="
            col-lg-4 col-md-6 col-12
            order-lg-1
            min-vh-100
            order-2
            bg-white
          "
        >
          <div class="p-4 m-3">
            <h4 class="text-dark font-weight-normal">
              Selamat Datang di <span class="font-weight-bold">Ngilmu</span>
            </h4>
            <h6 class="text-dark font-weight-bold mt-3">
              Login Sebagai Guru
            </h6>
            <p class="text-muted">
              Kamu harus login terlebih dahulu sebelum memulai menyediakan informasi course yang ingin diberikan.
            </p>
            <form
              method="POST"
              action="#"
              class="needs-validation"
              novalidate=""
            >
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  name="email"
                  tabindex="1"
                  required=""
                  autofocus=""
                />
                <div class="invalid-feedback">Please fill in your email</div>
              </div>

              <div class="form-group">
                <div class="d-block">
                  <label for="password" class="control-label">Password</label>
                </div>
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  name="password"
                  tabindex="2"
                  required=""
                />
                <div class="invalid-feedback">please fill in your password</div>
              </div>

              <div class="form-group text-right">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg btn-icon icon-right"
                  tabindex="4"
                >
                  Masuk
                </button>
              </div>
              <div class="mt-5 text-center">
                Sebagai
                <router-link class="text" to="/guru/login">Guru</router-link>
                /
                <router-link class="text" to="/murid/login">Murid</router-link>
              </div>
              <div class="mt-2 text-center">
                Belum memiliki akun?
                <router-link class="text" to="/murid/register">Buat akunmu disini</router-link>
              </div>
            </form>
          </div>
        </div>
        <div
          class="
            col-lg-8 col-12
            order-lg-2 order-1
            min-vh-100
            background-walk-y
            position-relative
            overlay-gradient-bottom
          "
          data-background="https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          style="background-image: url('../assets/img/unsplash/login-bg.jpg')"
        >
          <div class="absolute-bottom-left index-2">
            <div class="text-light p-5 pb-2">
              <div class="mb-5 pb-3">
                <h1 class="mb-2 display-4 font-weight-bold">Hello</h1>
                <h5 class="font-weight-normal text-muted-transparent">
                  Bali, Indonesia
                </h5>
              </div>
              Photo by
              <a
                class="text-light bb"
                target="_blank"
                href="@/assets/img/avatar/avatar-1.png"
                >Justin Kauffman</a
              >
              on
              <a
                class="text-light bb"
                target="_blank"
                href="https://unsplash.com"
                >Unsplash</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginGuru",

}
</script>

<style>

</style>