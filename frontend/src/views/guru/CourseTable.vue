<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ course.name }}</td>
    <td>{{ course.type }}</td>
    <td>{{ course.price }}</td>
    <td>
      <router-link class="btn btn-primary" :to="`/guru/${teacherId}/editcourse/${course.id}`">Ubah</router-link>
    </td>
    <td>
      <button @click="deleteCourse" class="btn btn-primary">Hapus</button>
    </td>
  </tr>
</template>

<script>
import CourseApiHelper from '../../helper/courses';
import router from '../../router/index';
export default {
  props: ['course', 'index', 'teacherId'],
  methods: {
    async deleteCourse() {
      const response = await CourseApiHelper.deleteCourse(
        this.course.id,
        this.teacherId
      );
      alert('Course berhasil dihapus');
    },
  },
};
</script>
