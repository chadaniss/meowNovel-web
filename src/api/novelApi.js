import axios from '../config/axios';

export const creatNovel = (input) => axios.post('/novels', input);
export const getNovels = (id, find) =>
  axios.get(`/users/${id}/novels${find ? '?find=' + find : ''}`);
