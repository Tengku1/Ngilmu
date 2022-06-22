<template>
  <section>
    <h2>Team of Ngilmu</h2>
    <div class="team__img__container">
      <figure>
        <img src="../../../src/assets/img/misc/avatar-1.png" alt="" />
        <figcaption>John Doe</figcaption>
        <p>Front End Developer</p>
      </figure>
      <figure>
        <img src="../../../src/assets/img/misc/avatar-1.png" alt="" />
        <figcaption>John Doe</figcaption>
        <p>Front End Developer</p>
      </figure>
      <figure>
        <img src="../../../src/assets/img/misc/avatar-1.png" alt="" />
        <figcaption>John Doe</figcaption>
        <p>Back End Developer</p>
      </figure>
      <figure>
        <img src="../../../src/assets/img/misc/avatar-1.png" alt="" />
        <figcaption>John Doe</figcaption>
        <p>Back End Developer</p>
      </figure>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #f0f4fd;
  padding-top: 1rem;
  min-height: 435px;
}

figure {
  text-align: center;
}

figure img {
  width: 300px;
  height: 300px;
  margin-bottom: 4px;
}

figure figcaption {
  font-size: large;
  font-weight: bold;
  color: black;
}

.team__img__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px 60px;
  margin-top: 3rem;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

@media screen and (min-width: 580px) {
  figure img {
    width: 225px;
    height: 225px;
  }
}

@media screen and (min-width: 780px) {
  figure img {
    width: 330px;
    height: 330px;
  }
}

@media screen and (min-width: 1026px) {
  figure img {
    width: 210px;
    height: 210px;
  }
}
</style>
