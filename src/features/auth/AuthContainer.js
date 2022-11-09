import AuthForm from './AuthForm';
import cat from '../../asset/logo/cat.png';

function AuthContainer() {
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-pink-900 to-pink-400'>
      <div className='text-center m-40'>
        <img src={cat} alt='cat' className='w-64' />
        <p className='text-white text-7xl font-serif -mx-5'>meowNovel</p>
      </div>
      <AuthForm />
    </div>
  );
}

export default AuthContainer;
