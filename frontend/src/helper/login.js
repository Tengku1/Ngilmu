import endpoint from './global';
import axios from 'axios'

async function login(username, password) {
  

  try {
    const response = await axios.post(`${endpoint}/api/login`, {
      username,
      password
    });
    if(response.status === 200) {
      this.$router.push('/guru/dashboard');
    }
  } catch (error) {
    if(response.message === 'Data tidak ditemukan') {
      alert('Password salah');
    }
  }
}

export default login;

