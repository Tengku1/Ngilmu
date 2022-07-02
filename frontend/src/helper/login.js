import endpoint from './global';
import axios from 'axios';
import router from '../router/index'

async function login(username, password) {
  try {
    const response = await axios.post(`${endpoint}/api/login`, {
      username,
      password
    });
    if(response['status'] === 200) {
      router.push('/guru/dashboard');
    }
  } catch (error) {
    alert('Password salah')
  }
}

export default login;

