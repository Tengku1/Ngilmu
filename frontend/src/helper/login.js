import endpoint from './global';
import axios from 'axios';
import router from '../router/index';

async function login(email, password) {
  try {
    const response = await axios.post(`${endpoint}/api/login`, {
      email,
      password,
    });
    if (response['status'] === 200) {
      if (response['data']['user'].roles === 'Guru') {
        router.push(`/guru/${response['data']['user'].id}/dashboard`);
        return response['data']['user'].id;
      } else {
        router.push('/murid/ambilcourse');
      }
    }
  } catch (error) {
    alert(error.message);
  }
}

export default login;
