import axios from '../config/axios';

export const createNovel = (input) => axios.post('/novels', input);

export const getNovels = (id, find) =>
  axios.get(`/users/${id}/novels${find ? '?find=' + find : ''}`);

export const getMyNovels = (id) => axios.get(`/users/${id}/novels`);

export const updateNovel = (novelId, input) =>
  axios.put(`/novels/edit/${novelId}`, input);

export const getEditNovel = (novelId) => axios.get(`/novels/edit/${novelId}`);

export const updateBookCover = (novelId, image) =>
  axios.put(`/novels/editimage/${novelId}`, image);

export const deleteNovel = (novelId) =>
  axios.delete(`/novels/delete/${novelId}`);
