import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';
import { useNovel } from '../../contexts/NovelContext';
import { novelValidate } from '../../validations/novelValidate';
import IconUpload from './IconUpload';

function CreateForm() {
  const [input, setInput] = useState({
    title: '',
    genre: 'ACTION',
    synopsis: ''
  });
  const [bookCoverUrl, setBookCoverUrl] = useState(null);
  const fileEl = useRef();

  const { createNovel } = useNovel();

  const { startLoading, stopLoading } = useLoading();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      novelValidate(input, bookCoverUrl);
      formData.append('title', input.title);
      formData.append('genre', input.genre);
      formData.append('synopsis', input.synopsis);
      formData.append('bookCoverUrl', bookCoverUrl);

      startLoading();
      await createNovel(formData);
      setInput({
        title: '',
        genre: 'ACTION',
        synopsis: ''
      });
      setBookCoverUrl(null);
      toast.success('Novel Created');
      navigate('/writing');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className='bg-[#FFF5F5] p-3 flex gap-7 justify-center py-11'>
        {/* Book cover Form */}
        <div className='p-5 px-20 py-10 bg-white flex flex-col items-center h-auto rounded-lg justify-center gap-5 align-middle'>
          <div className='flex justify-center items-center w-full'>
            <label
              htmlFor='dropzone-file'
              className='flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
            >
              {bookCoverUrl ? (
                <img
                  src={URL.createObjectURL(bookCoverUrl)}
                  alt='post'
                  className='h-96 w-48 object-contain'
                />
              ) : (
                <IconUpload />
              )}

              <input
                id='dropzone-file'
                type='file'
                className='hidden'
                name='bookCoverUrl'
                ref={fileEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setBookCoverUrl(e.target.files[0]);
                  }
                }}
              />
            </label>
          </div>

          {bookCoverUrl ? (
            <button
              className='font-semibold rounded-md shadow-md hover:bg-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 mt-5 py-1 w-28 align-middle block m-auto bg-transparent text-zinc-700 border-zinc-400'
              type='button'
              onClick={() => {
                setBookCoverUrl(null);
                fileEl.current.value = null;
              }}
            >
              CANCEL
            </button>
          ) : (
            <button
              className='font-semibold rounded-md shadow-md hover:bg-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 mt-5 py-1 w-28 align-middle block m-auto bg-transparent text-zinc-700 border-zinc-400'
              type='button'
              onClick={() => fileEl.current.click()}
            >
              BROWSE
            </button>
          )}
        </div>
        {/* End-Book cover Form */}

        {/* Novel Infomation Form */}
        <div className='px-10 bg-white p-5 w-3/5 rounded-lg'>
          <h1 className='text-2xl font-bold pb-2 text-red-wine'>
            NOVEL INFORMATION
          </h1>
          <hr className='border-1 border-stone-400 ' />

          <div className='mx-2'>
            <div className='text-left my-3'>
              <label className='text-sm font-semibold'>Book Title</label>
              <br />
              <input
                type='text'
                className='border-solid border-1 border-stone-400 rounded-md font-sans text-xs w-full'
                placeholder='Should be within 60 characters.'
                name='title'
                value={input.title}
                onChange={handleChangeInput}
              />
            </div>

            <label htmlFor='genre' className='text-sm font-semibold'>
              Genre
            </label>
            <br />
            <select
              name='genre'
              id='genre'
              className='border-solid border-1 border-stone-400 rounded-md font-sans text-xs w-full'
              value={input.genre}
              onChange={handleChangeInput}
            >
              <option value='ACTION'>ACTION</option>
              <option value='COMEDY'>COMEDY</option>
              <option value='DRAMA'>DRAMA</option>
              <option value='FANTASY'>FANTASY</option>
              <option value='ROMANCE'>ROMANCE</option>
              <option value='THILLER'>THILLER</option>
            </select>

            <div className='text-left my-3'>
              <label className='text-sm font-semibold'>Synopsis</label>
              <br />
              <textarea
                className='border-solid border-1 border-stone-400 rounded-md font-sans text-xs w-full h-36 resize-none'
                name='synopsis'
                value={input.synopsis}
                onChange={handleChangeInput}
              />
            </div>
          </div>

          <div className='flex gap-2'>
            <button className='btn-primary mt-5 py-1 px-20 align-middle block m-auto border-2'>
              CREATE
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateForm;
