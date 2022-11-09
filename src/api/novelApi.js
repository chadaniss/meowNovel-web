import axios from '../config/axios';

export const createNovel = (input) => axios.post('/novels', input);

export const getNovels = (find) =>
  axios.get(`/novels/browse${find ? '?find=' + find : ''}`);

export const updateNovel = (novelId, input) =>
  axios.put(`/novels/edit/${novelId}`, input);

export const getEditNovel = (novelId) => axios.get(`/novels/edit/${novelId}`);

export const getMyNovels = () => axios.get(`/novels/mynovels`);

export const updateBookCover = (novelId, image) =>
  axios.put(`/novels/editimage/${novelId}`, image);

export const deleteNovel = (novelId) =>
  axios.delete(`/novels/delete/${novelId}`);

export const getCurrentNovel = (novelId) =>
  axios.get(`/novels/current/${novelId}`);
