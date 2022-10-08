import { Avatar } from 'flowbite-react';
import { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

function ProfileImageForm() {
  const {
    user: { profileUrl }
  } = useAuth();

  const [fileInput, setFileInput] = useState(null);

  const inputEl = useRef();

  return (
    <div className='p-5 bg-white flex flex-col items-center h-auto rounded-lg justify-center gap-3 pt-6'>
      <span onClick={() => inputEl.current.click()} className='cursor-pointer'>
        <Avatar
          alt='User settings'
          img={fileInput ? URL.createObjectURL(fileInput) : profileUrl}
          rounded={true}
          statusPosition='center'
          size='xl'
        />
      </span>
      <input
        type='file'
        className='hidden'
        ref={inputEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFileInput(e.target.files[0]);
          }
        }}
      />
      {fileInput ? (
        <div className='flex'>
          <button
            className='font-semibold rounded-md shadow-md hover:bg-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 mt-5 py-1 w-28 align-middle block m-auto bg-transparent text-zinc-700 border-zinc-400'
            onClick={() => {
              setFileInput(null);
              inputEl.current.value = null;
            }}
          >
            CANCEL
          </button>
          <button className='font-semibold rounded-md shadow-md hover:bg-red-wine hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 mt-5 py-1 w-28 align-middle block m-auto bg-transparent text-zinc-700 border-zinc-400'>
            UPLOAD
          </button>
        </div>
      ) : (
        <button
          className='font-semibold rounded-md shadow-md hover:bg-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 mt-5 py-1 w-28 align-middle block m-auto bg-transparent text-zinc-700 border-zinc-400'
          onClick={() => inputEl.current.click()}
        >
          BROWSE
        </button>
      )}
    </div>
  );
}

export default ProfileImageForm;
