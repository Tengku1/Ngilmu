<template>
  <div class="feature__card">
    <slot></slot>
    <h3>{{ featureName }}</h3>
    <slot name="description"></slot>
  </div>
</template>

<script>
export default {
  props: {
    featureName: {
      required: true,
    },
  },
};
</script>

<style scoped>
.feature__card {
  border-radius: 16px;
  background-color: white;
  padding: 50px;
  margin-right: 24px;
  margin-left: 24px;
}
</style>
