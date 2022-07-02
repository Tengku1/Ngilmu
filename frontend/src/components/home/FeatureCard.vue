<template>
  <div class="feature__card">
    <slot></slot>
    <h3>{{ featureName }}</h3>
    <slot name="description"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovering: false,
    };
  },
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
  transition: all 0.3s ease-out;
}

.feature__card:hover {
  background-color: #6777ef;
  transform: translate(0) scale(1.1);
  color: white;
}
</style>
