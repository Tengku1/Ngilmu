import endpoint from './global';
import axios from 'axios';

async function register(email, fullName, phoneNumber, password, roles) {
  const response = await axios.post(`${endpoint}/api/register`, {
    email,
    full_name: fullName,
    password,
    phone: phoneNumber,
    roles,
  });
  return response;
}

export default register;
