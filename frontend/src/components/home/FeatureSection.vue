<template>
  <section>
    <p>Discover</p>
    <h2>Our Features</h2>
    <div class="grid">
      <feature-card featureName="Temukan Guru">
        <template #default
          ><i class="fa-solid fa-person-chalkboard fa-xl"></i
        ></template>
        <template #description
          >Temukan berbagai guru yang kompeten di bidangnya</template
        >
      </feature-card>
      <feature-card featureName="Harga Transparan">
        <template #default
          ><i class="fa-solid fa-hand-holding-dollar fa-xl"></i
        ></template>
        <template #description
          >Harga transparan, bahkan dapat dinegosiasikan dengan masing-masing
          guru</template
        >
      </feature-card>
      <feature-card featureName="Direct Contact">
        <template #default><i class="fa-solid fa-message fa-xl"></i></template>
        <template #description
          >Kontak langsung dengan guru dapat dilakukan sebelum melakukan
          pembayaran</template
        >
      </feature-card>
      <feature-card featureName="Harga Terjangkau">
        <template #default
          ><i class="fa-solid fa-money-bill-1-wave fa-xl"></i
        ></template>
        <template #description
          >Harga yang dapat dijangkau oleh masyarakat Indonesia</template
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
