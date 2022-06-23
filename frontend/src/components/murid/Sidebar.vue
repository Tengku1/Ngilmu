<template>
  <div
    class="main-sidebar sidebar-style-2"
    style="overflow: hidden; outline: none"
    tabindex="1"
  >
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="index.html">Ngilmu</a>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <a href="index.html">St</a>
      </div>
      <ul class="sidebar-menu">
        <li>
          <a class="nav-link"
            ><i class="fa fa-book"></i
            ><router-link class="nav-link" to="/murid/ambilcourse"
              >Ambil Course</router-link
            ></a
          >
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style>
</style>