<template>
  <div class="wrapper">
    <header>
      <div>
        <h2>Ngilmu</h2>
      </div>
      <ul class="navbar__list__container">
        <li><button>Home</button></li>
        <li><button>Company</button></li>
        <li><button>Products</button></li>
      </ul>
      <nav>
        <router-link class="login__link" to="/login">Login</router-link>
        <button class="hamburger" @click="toggleBurger">=</button>
      </nav>
    </header>
    <transition name="burgerNav">
      <nav v-if="isBurgerOpen" class="burgerNav">
        <ul>
          <li><button>Home</button></li>
          <li><button>Company</button></li>
          <li><button>Products</button></li>
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
.wrapper {
}
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
}

li button {
  width: 100%;
  border: none;
  background: none;
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
}
</style>
