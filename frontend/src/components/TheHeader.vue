<template>
  <div class="wrapper">
    <header>
      <div>
        <h2>Ngilmu</h2>
      </div>
      <ul class="navbar__list__container">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
      </ul>
      <nav>
        <router-link class="login__link" to="/murid/login">Login</router-link>
        <button class="hamburger" @click="toggleBurger">=</button>
      </nav>
    </header>
    <transition name="burgerNav">
      <nav v-if="isBurgerOpen" class="burgerNav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBurgerOpen: false,
    };
  },
  methods: {
    toggleBurger() {
      this.isBurgerOpen = !this.isBurgerOpen;
    },
  },
};
</script>

<style scoped>
header {
  padding: 2rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}

ul {
  padding: 0;
  list-style-type: none;
  text-decoration: none;
}

li {
  border-bottom: 1px solid lightgray;
  text-align: center;
}

li a {
  width: 100%;
}

.burgerNav-enter-active {
  animation: burger-slide-down 1s ease-out;
}

.burgerNav-leave-active {
  animation: burger-slide-down 0.5s ease-in reverse;
}

.navbar__list__container {
  display: none;
}

.login__link {
  margin-right: 50px;
}

@keyframes burger-slide-down {
  from {
    opacity: 0;
    transform: translateY(-24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (min-width: 1000px) {
  .hamburger {
    display: none;
  }

  .navbar__list__container {
    display: flex;
    gap: 20px;
  }

  li {
    border-bottom: none;
  }

  a {
    font-size: 1.2em;
    font-weight: bold;
  }
}
</style>
