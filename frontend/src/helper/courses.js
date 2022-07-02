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
      console.log('error');
      alert('Telah terjadi error');
      return;
    }
  },
};

export default CourseApiHelper;
