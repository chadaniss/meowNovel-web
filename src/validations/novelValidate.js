import { toast } from 'react-toastify';

export const novelValidate = (input, bookCoverUrl) => {
  if (!input.title) {
    return toast.error('title is required');
  }
  if (!input.genre) {
    return toast.error('genre is required');
  }
  if (!input.synopsis) {
    return toast.error('synopsis is required');
  }
  if (!bookCoverUrl) {
    return toast.error('Book cover is required');
  }
};
