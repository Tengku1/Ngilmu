<template>
  <about-header></about-header>
  <about-jumbotron></about-jumbotron>
  <main>
    <about-team></about-team>
  </main>
  <about-footer></about-footer>
</template>

<style scoped></style>

<script>
import AboutHeader from '../../components/about/AboutHeader.vue';
import AboutJumbotron from '@/components/about/AboutJumbotron.vue';
import AboutDescription from '@/components/about/AboutDescription.vue';
import AboutTeam from '@/components/about/AboutTeam.vue';
import AboutFooter from '@/components/about/AboutFooter.vue';
export default {
  components: {
    AboutHeader,
    AboutJumbotron,
    AboutDescription,
    AboutTeam,
    AboutFooter,
  },
};
</script>
