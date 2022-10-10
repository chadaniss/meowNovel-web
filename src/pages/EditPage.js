import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { timeSince } from '../utils/dateformat';
import * as novelService from '../api/novelApi';
import { useNovel } from '../contexts/NovelContext';
import { toast } from 'react-toastify';

function EditPage() {
  const { fetchNovel, novels } = useNovel();
  // const {
  //   state: { id, title, synopsis, bookCoverUrl, updatedAt, User }
  // } = useLocation();

  const params = useParams();
  console.log('params', params);

  const [updateNovel, setUpdateNovel] = useState({});
  const [image, setImage] = useState(null);

  const inputEl = useRef();

  const handleClickUpload = () => {
    inputEl.current.click();
  };

  const HandleClickSave = async () => {
    await novelService.updateNovel(+params.id, updateNovel);
    fetchNovel();
  };

  const fetchEditNovel = async () => {
    try {
      const res = await novelService.getEditNovel(+params.id);
      console.log('res.data', res.data);
      setUpdateNovel(res.data.novel);
    } catch (err) {
      toast.error(err.response?.data.message);
      console.log(err);
    }
  };
  // useEffect(() => {
  //   fetchEditNovel();
  // }, []);

  const handleUpload = async (e) => {
    try {
      setImage(e.target.files[0]);
    } catch (err) {
      console.log(err);
    }
  };
  console.log('image', image);

  useEffect(() => {
    const formData = new FormData();
    formData.append('image', image);
    const run = async () => {
      const res = await novelService.updateBookCover(+params.id, formData);
      console.log('res.data', res.data);
      setImage(res.data.novel);
    };
    run();
    fetchEditNovel();
    fetchNovel();
  }, [image]);

  return (
    <div className='py-3'>
      <div className='flex justify-evenly py-20'>
        <div
          className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg cursor-pointer'
          onClick={handleClickUpload}
        >
          <img
            className=' w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg  md:rounded-lg'
            src={updateNovel.bookCoverUrl}
            alt=''
          />
          <input
            type='file'
            className='hidden'
            ref={inputEl}
            onChange={handleUpload}
          />
        </div>
        <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
          <div className='p-6 flex flex-col justify-start'>
            <input
              className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'
              value={updateNovel.title}
              onChange={(e) =>
                setUpdateNovel({ ...updateNovel, title: e.target.value })
              }
            />

            <textarea
              className='text-gray-700 text-base mb-4 h-40'
              value={updateNovel.synopsis}
              onChange={(e) =>
                setUpdateNovel({ ...updateNovel, synopsis: e.target.value })
              }
            />
            <p className='text-gray-600 text-xs'>{`Last updated ${timeSince(
              updateNovel.updatedAt
            )}`}</p>
          </div>
        </div>
      </div>

      <div>
        <button
          className='font-semibold rounded-md shadow-md hover:bg-red-wine hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 mt-5 py-1 w-28 align-middle block m-auto bg-transparent text-zinc-700 border-zinc-400'
          type='button'
        >
          DELETE
        </button>
        <button
          className='font-semibold rounded-md shadow-md bg-pink-300 hover:bg-red-wine hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 mt-5 py-1 w-28 align-middle block m-auto bg-transparent text-zinc-700 border-zinc-400'
          onClick={HandleClickSave}
        >
          SAVE
        </button>
      </div>
    </div>
  );
}

export default EditPage;
