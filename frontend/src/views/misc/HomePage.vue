<template>
  <the-header></the-header>
  <home-description></home-description>
  <feature-section></feature-section>
  <the-footer type="light"></the-footer>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import HomeDescription from '@/components/home/HomeDescription.vue';
import FeatureSection from '@/components/home/FeatureSection.vue';
import TheFooter from '@/components/TheFooter.vue';
export default {
  components: {
    TheHeader,
    HomeDescription,
    FeatureSection,
    TheFooter,
  },
};
</script>
