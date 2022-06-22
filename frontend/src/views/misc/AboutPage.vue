<template>
  <the-header></the-header>
  <about-jumbotron></about-jumbotron>
  <main>
    <about-team></about-team>
  </main>
  <the-footer></the-footer>
</template>

<style scoped></style>

<script>
import TheHeader from '@/components/TheHeader.vue';
import AboutJumbotron from '@/components/about/AboutJumbotron.vue';
import AboutTeam from '@/components/about/AboutTeam.vue';
import TheFooter from '@/components/TheFooter.vue';
export default {
  components: {
    TheHeader,
    AboutJumbotron,
    AboutTeam,
    TheFooter,
  },
};
</script>
