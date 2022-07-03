<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ course.name }}</td>
    <td>{{ course.type }}</td>
    <td>{{ course.price }}</td>
    <td>
      <router-link
        class="btn btn-primary"
        :to="`/guru/${teacherId}/editcourse/${course.id}`"
        >Ubah</router-link
      >
    </td>
    <td><button class="btn btn-primary">Hapus</button></td>
  </tr>
</template>

<script>
export default {
  props: ['course', 'index', 'teacherId'],
};
</script>
