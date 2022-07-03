<template>
  <div class="card">
    <div class="card-header">
      <h4>{{ name }}</h4>
      <div class="card-header-action">
        <router-link class="btn btn-primary" :to="`/murid/detailcourse/${id}`"
          ><i class=""></i>Detail</router-link
        >
      </div>
    </div>
    <div class="card-body">
      <div class="chocolat-parent">
        <a
          href="assets/img/example-image.jpg"
          class="chocolat-image"
          title="Just an example"
        >
          <div
            data-crop-image="285"
            style="overflow: hidden; position: relative; height: 285px"
          >
            <img alt="image" :src="imageUrl" class="img-fluid" />
          </div>
        </a>
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageUrl', 'description', 'name', 'id'],
};
</script>
