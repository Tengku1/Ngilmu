import endpoint from './global';
import axios from 'axios'

async function login(username, password) {
  const response = await axios.post(`${endpoint}/api/login`, {
    username,
    password
  })
  console.log(response);
}

export default login;

