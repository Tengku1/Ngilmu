<template>
  <section>
    <p>Discover</p>
    <h2>Our Features</h2>
    <div class="grid">
      <feature-card featureName="Temukan Guru">
        <template #default
          ><i class="fa-solid fa-person-chalkboard"></i
        ></template>
        <template #description
          >Temukan berbagai guru yang kompeten di bidangnya</template
        >
      </feature-card>
      <feature-card featureName="Temukan Guru">
        <template #default
          ><i class="fa-solid fa-person-chalkboard"></i
        ></template>
        <template #description
          >Temukan berbagai guru yang kompeten di bidangnya</template
        >
      </feature-card>
      <feature-card featureName="Temukan Guru">
        <template #default
          ><i class="fa-solid fa-person-chalkboard"></i
        ></template>
        <template #description
          >Temukan berbagai guru yang kompeten di bidangnya</template
        >
      </feature-card>
      <feature-card featureName="Temukan Guru">
        <template #default
          ><i class="fa-solid fa-person-chalkboard"></i
        ></template>
        <template #description
          >Temukan berbagai guru yang kompeten di bidangnya</template
        >
      </feature-card>
    </div>
  </section>
</template>

<script>
import FeatureCard from './FeatureCard.vue';
export default {
  components: {
    FeatureCard,
  },
};
</script>

<style scoped>
section {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 2rem;
}

@media screen and (min-width: 780px) {
  .grid {
    grid-template-columns: repeat(2, minmax(330px, 1fr));
    grid-template-rows: repeat(2, 1fr);
  }
}
</style>
