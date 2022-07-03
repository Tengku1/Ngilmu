import endpoint from './global';
import axios from 'axios';

const CourseApiHelper = {
  getAllCourse: async function () {
    try {
      const response = await axios.get(`${endpoint}/api/courses`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log('Error');
      alert('Telah terjadi error');
      return;
    }
  },
  getCourseById: async function (id) {
    try {
      const response = await axios.get(`${endpoint}/api/courses/${id}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log('Error');
      return;
    }
  },
  getCoursesByTeacherId: async function (teacherId) {
    const response = await axios.get(
      `${endpoint}/api/teacher/${teacherId}/courses`
    );
    return response.data;
  },
  addCourse: async function (teacherId, name, type, img, description, price) {
    const response = await axios.post(`${endpoint}/api/courses`, {
      teacherId,
      name,
      type,
      img,
      description,
      price,
    });
    return response;
  },
};

export default CourseApiHelper;
