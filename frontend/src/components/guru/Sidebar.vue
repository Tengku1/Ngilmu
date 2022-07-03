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
        <a href="index.html"></a>
      </div>
      <ul class="sidebar-menu">
        <li>
          <a class="nav-link"
            ><i class="fa fa-home"></i
            ><router-link class="nav-link" :to="`/guru/${teacherId}/dashboard`"
              >Dashboard</router-link
            ></a
          >
        </li>
        <li>
          <a class="nav-link" href="blank.html"
            ><i class="fa fa-book"></i
            ><router-link class="nav-link" :to="`/guru/${teacherId}/course`"
              >Course</router-link
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
  props: ['teacherId'],
};
</script>

<style></style>
