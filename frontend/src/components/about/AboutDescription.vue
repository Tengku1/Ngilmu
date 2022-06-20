<template>
  <section>
    <div class="item">
      <img src="../../../public/misc/1.png" alt="" />
    </div>
    <div class="item desc__container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
        voluptatum? Magni, vel aliquid. Cupiditate ipsa officiis eius laudantium
        perferendis inventore incidunt saepe sapiente, consequatur impedit aut
        dolores! Eveniet voluptatum doloremque ex id fugiat vitae nulla nobis
        accusamus delectus, dolore tempore, obcaecati expedita mollitia!
        Incidunt, rem explicabo eius sed soluta ipsa beatae deserunt similique
        molestiae amet officiis est, dignissimos dicta fuga. Minus libero
        quibusdam architecto repellat incidunt eum, at sunt sint debitis quas
        repellendus facilis assumenda?
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  flex: 1;
  text-align: center;
}

.desc__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.desc__container p {
  padding: 0 24px 0 0;
  font-size: large;
}
</style>
