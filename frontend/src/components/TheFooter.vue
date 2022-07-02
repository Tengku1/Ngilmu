<template>
  <footer :class="classObject">
    <a href="https://github.com/Tengku1/Ngilmu">Project Github Link</a>
  </footer>
</template>

<script>
export default {
  props: {
    type: {
      required: false,
      default: 'normal',
    },
  },
  computed: {
    classObject() {
      return {
        light: this.type === 'light',
      };
    },
  },
};
</script>

<style scoped>
footer {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  background-color: rgb(110, 17, 110);
}

footer.light {
  background-color: #6777ef;
}

footer a {
  font-size: large;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

footer.light a {
  color: white;
}

footer a:hover {
  font-weight: 900;
}
</style>
