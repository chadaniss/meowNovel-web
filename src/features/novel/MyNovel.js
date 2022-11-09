import { useNavigate } from 'react-router-dom';

function MyNovel({
  myNovel: { id, title, synopsis, bookCoverUrl, updatedAt, User }
}) {
  const userName = User.userName;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className='flex justify-center cursor-pointer' onClick={handleClick}>
      <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
        <img
          className=' w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
          src={bookCoverUrl}
          alt=''
        />
        <div className='p-6 flex flex-col justify-start'>
          <h5 className='text-gray-900 text-xl font-medium mb-2'>{title}</h5>
          <p className='text-gray-700 text-base mb-4'>{userName}</p>
          <p className='text-gray-600 text-xs'>{synopsis}</p>
        </div>
      </div>
    </div>
  );
}

export default MyNovel;
