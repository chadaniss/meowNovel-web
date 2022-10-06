import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { userValidate } from '../../validations/userValidate';

function RegisterForm() {
  const { register } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });

  const [show, setShow] = useState(false);

  const onClick = (e) => setShow(true);
  const onClose = (e) => setShow(false);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      userValidate(input);
      startLoading();
      await register(input);
      toast.success('success register');
      onClose();
    } catch (err) {
      toast.error(err.response?.data.message);
      throw err;
    } finally {
      stopLoading();
    }
  };

  return (
    <div>
      <button
        className='mt-4 text-sans text-xs font-semibold mb-8 hover:underline'
        onClick={onClick}
      >
        Can’t log in? ・Already have an account?
      </button>
      <Modal show={show} size='lg' popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
            <h1 className='text-2xl font-medium text-gray-900 dark:text-white text-center'>
              Sign up
            </h1>
            <form onSubmit={handleSubmitForm}>
              <div className='grid grid-cols-2 grid-flow-row gap-0 mx-2'>
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
                <div className='text-left my-3'>
                  <label className='text-sm font-semibold'>Password</label>
                  <br />
                  <input
                    type='password'
                    className='border-solid border-1 border-stone-400 rounded-md font-sans text-xs'
                    placeholder='Enter password'
                    name='password'
                    value={input.password}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className='text-left my-3'>
                  <label className='text-sm font-semibold'>
                    Confirm Password
                  </label>
                  <br />
                  <input
                    type='password'
                    className='border-solid border-1 border-stone-400 rounded-md font-sans text-xs'
                    placeholder='Enter confirm password'
                    name='confirmPassword'
                    value={input.confirmPassword}
                    onChange={handleChangeInput}
                  />
                </div>
              </div>

              <button className='btn-primary mt-5 py-2 px-32 align-middle block m-auto'>
                Sign Up
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RegisterForm;
