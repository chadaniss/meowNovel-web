import axios from '../config/axios';

export const register = async (input) => {
  return await axios.post('/auth/register', input);
};
export const login = async ({ email, password }) => {
  return await axios.post('/auth/login', { email, password });
};
