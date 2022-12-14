import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthForm() {
  return (
    <div className='bg-white text-center rounded-3xl border shadow-lg p-10 max-w-xs'>
      <h1 className='font-bold font-serif text-2xl mt-8 mb-5'>Log in</h1>
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default AuthForm;
