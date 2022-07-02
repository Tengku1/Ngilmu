import endpoint from './global';
import axios from 'axios';
import router from '../router/index';

async function login(username, password) {
  try {
    const response = await axios.post(`${endpoint}/api/login`, {
      username,
      password,
    });
    if (response['status'] === 200) {
      if (response.data.roles === 'Guru') {
        router.push('/guru/dashboard');
      } else {
        router.push('/murid/ambilcourse');
      }
    }
  } catch (error) {
    alert('Password anda salah, mohon coba kembali');
  }
}

export default login;
