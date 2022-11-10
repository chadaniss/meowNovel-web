import axios from '../config/axios';

export const createChapter = (novelId, input) =>
  axios.post(`/chapters/create/${novelId}`, input);

export const updateChapter = (chapterId, input) =>
  axios.put(`/chapters/edit/${chapterId}`, input);

export const getEditChapter = (chapterId) =>
  axios.get(`/chapters/edit/${chapterId}`);

export const getChapters = (novelId) => axios.get(`/chapters/${novelId}`);

export const deleteChapter = (chapterId) =>
  axios.get(`/chapters/delete/${chapterId}`);
