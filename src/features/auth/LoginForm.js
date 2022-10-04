function LoginForm() {
  return (
    <form>
      <input
        type='text'
        className='mt-3 p-2 border-solid border-1 border-stone-400 rounded-md font-sans text-sm'
        placeholder='Enter email'
      />
      <input
        type='password'
        className='mt-3 p-2 border-solid border-1 border-stone-400 rounded-md font-sans text-sm'
        placeholder='Enter password'
      />
      <button className='btn-primary mt-3 py-1 px-16'>Log in</button>
    </form>
  );
}

export default LoginForm;
