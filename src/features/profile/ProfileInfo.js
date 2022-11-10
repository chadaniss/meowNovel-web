import { useAuth } from '../../contexts/AuthContext';

function ProfileInfo() {
  const {
    user: { userName, email, firstName, lastName }
  } = useAuth();

  // const initialUserInfo = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   gender: '',
  //   birthDate: '',
  //   occupation: '',
  //   profileImage: '',
  //   aboutMe: ''
  //   // interestLog: ''
  // };

  // const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleChangeInput = (e) => {
    // setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
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
            value={userName}
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
            value={email}
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
            value={firstName}
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
            value={lastName}
            onChange={handleChangeInput}
          />
        </div>
      </div>

      <div className='flex'>
        <button className='font-semibold rounded-md shadow-md hover:bg-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 mt-5 py-1 w-28 align-middle block m-auto bg-transparent text-zinc-700 border-zinc-400'>
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
