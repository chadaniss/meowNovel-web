import AuthForm from './AuthForm';

function AuthContainer() {
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-pink-900 to-pink-400'>
      <div className='text-center m-40'>
        <img src='logo/cat.png' alt='cat' className='w-64' />
        <p className='text-white text-7xl font-serif -mx-5'>meowNovel</p>
      </div>
      <AuthForm />
    </div>
  );
}

export default AuthContainer;
