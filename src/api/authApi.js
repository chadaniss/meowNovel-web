import axios from '../config/axios';

export const register = async (input) => {
  return await axios.post('/auth/register', input);
};
