<template>
  <div id="app">
    <div class="main-wrapper">
      <Navbar />
      <Sidebar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/guru/Navbar.vue";
import Sidebar from "@/components/guru/Sidebar.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Sidebar
  },
};
</script>
