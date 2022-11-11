import { useState } from 'react';
import { toast } from 'react-toastify';
import { updateUser } from '../../api/userApi';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';

function ProfileInfo() {
  const {
    user: { userName, email, firstName, lastName }
  } = useAuth();

  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    userName,
    email,
    firstName,
    lastName
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async () => {
    try {
      startLoading();
      const formData = new FormData();
      formData.append('userName', input.userName);
      formData.append('email', input.email);
      formData.append('firstName', input.firstName);
      formData.append('lastName', input.lastName);
      await updateUser(formData);
      toast.success('success upload');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className='grid grid-cols-2 grid-flow-row gap-4 mx-2'>
        <div className='text-left my-3'>
          <label className='text-sm font-semibold'>User Name</label>
          <br />
          <input
            type='text'
            className='border-solid border-1 border-stone-400 rounded-md font-sans text-xs'
            placeholder='Enter user name'
            name='userName'
            value={input.userName}
            onChange={handleChangeInput}
          />
        </div>
        <div className='text-left my-3'>
          <label className='text-sm font-semibold'>Email Adress</label>
          <br />
          <input
            type='text'
            className='border-solid border-1 border-stone-400 rounded-md font-sans text-xs'
            placeholder='Enter your email'
            name='email'
            value={input.email}
            onChange={handleChangeInput}
          />
        </div>
        <div className='text-left my-3'>
          <label className='text-sm font-semibold'>First Name</label>
          <br />
          <input
            type='text'
            className='border-solid border-1 border-stone-400 rounded-md font-sans text-xs'
            placeholder='Enter first name'
            name='firstName'
            value={input.firstName}
            onChange={handleChangeInput}
          />
        </div>
        <div className='text-left my-3'>
          <label className='text-sm font-semibold'>Last Name</label>
          <br />
          <input
            type='text'
            className='border-solid border-1 border-stone-400 rounded-md font-sans text-xs'
            placeholder='Enter last name'
            name='lastName'
            value={input.lastName}
            onChange={handleChangeInput}
          />
        </div>
      </div>

      <div className='flex'>
        <button
          onClick={() =>
            setInput({
              userName,
              email,
              firstName,
              lastName
            })
          }
          className='font-semibold rounded-md shadow-md hover:bg-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 mt-5 py-1 w-28 align-middle block m-auto bg-transparent text-zinc-700 border-zinc-400'
        >
          CANCEL
        </button>
        <button className='font-semibold rounded-md shadow-md hover:bg-red-wine hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 mt-5 py-1 w-28 align-middle block m-auto bg-transparent text-zinc-700 border-zinc-400'>
          SAVE
        </button>
      </div>
    </form>
  );
}

export default ProfileInfo;
