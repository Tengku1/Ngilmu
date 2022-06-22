<template>
  <the-header></the-header>
  <home-description></home-description>
  <feature-section></feature-section>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import HomeDescription from '@/components/home/HomeDescription.vue';
import FeatureSection from '@/components/home/FeatureSection.vue';
export default {
  components: {
    TheHeader,
    HomeDescription,
    FeatureSection,
  },
};
</script>
