<template>
  <section>
    <div class="item">
      <img src="../../../src/assets/img/misc/1.png" alt="" />
      <!-- Ganti jadi gambar yang sesuai -->
    </div>
    <div class="item desc__container">
      <p>
        Ngilmu adalah sebuah website yang didedikasikan untuk mempertemukan guru
        les privat dengan siswa yang membutuhkannya. Biasanya, orang tua siswa
        yang ingin mencarikan anaknya guru les privat hanya dapat mengetahui
        informasinya dari mulut ke mulut. Platform ini diharapkan dapat membantu
        orang tua siswa, serta guru yang ingin menawarkan jasa les privatnya
        sebagai pendapatan tambahan.
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #6777ef;
  color: white;
}

.item {
  flex: 1 1 328px;
  text-align: center;
}

.desc__container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.desc__container p {
  margin-bottom: 0;
  font-size: large;
}

@media screen and (max-width: 450px) {
  .item img {
    width: 300px;
    height: 400px;
  }
}

@media screen and (max-width: 600px) {
  .item img {
    width: 400px;
    height: 500px;
  }
}
</style>
