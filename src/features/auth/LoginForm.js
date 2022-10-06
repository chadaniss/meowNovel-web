import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';

function LoginForm() {
  const { login } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await login(input);
      toast.success('success login');
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type='text'
        className='mt-3 p-2 border-solid border-1 border-stone-400 rounded-md font-sans text-sm'
        placeholder='Enter email'
        name='email'
        value={input.email}
        onChange={handleChangeInput}
      />
      <input
        type='password'
        className='mt-3 p-2 border-solid border-1 border-stone-400 rounded-md font-sans text-sm'
        placeholder='Enter password'
        name='password'
        value={input.password}
        onChange={handleChangeInput}
      />
      <button className='btn-primary mt-3 py-1 px-16'>Log in</button>
    </form>
  );
}

export default LoginForm;
