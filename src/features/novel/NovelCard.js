import { useNavigate } from 'react-router-dom';

function NovelCard({
  novel: { id, title, synopsis, bookCoverUrl, User, genre }
}) {
  const userName = User.userName;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/novels/${id}`, {
      state: { id, title, synopsis, bookCoverUrl, User, genre }
    });
  };
  return (
    <div
      className='flex justify-center gap-12 cursor-pointer'
      onClick={handleClick}
    >
      <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
        <img
          className=' w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
          src={bookCoverUrl}
          alt=''
        />
        <div className='p-6 flex flex-col justify-start w-72'>
          <p className='text-red-wine font-bold text-xs mb-4'>{genre}</p>
          <h5 className='text-gray-900 text-xl font-medium mb-2'>{title}</h5>
          <p className='text-gray-500 font-semibold text-base mb-4'>
            {userName}
          </p>
          <p className='text-gray-600 text-xs text-ellipsis overflow-clip h-44'>
            {synopsis}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NovelCard;
