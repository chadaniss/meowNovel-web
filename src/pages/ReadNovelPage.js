import { useLocation } from 'react-router-dom';

function ReadNovelPage() {
  const {
    state: { id, title, synopsis, bookCoverUrl, User }
  } = useLocation();
  return (
    <div>
      <div className='flex justify-evenly py-20'>
        <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
          <img
            className=' w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg  md:rounded-lg'
            src={bookCoverUrl}
            alt=''
          />
        </div>
        <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
          <div className='p-6 flex flex-col justify-start'>
            <div className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'>
              {title}
            </div>
            <p className='text-gray-700 text-base mb-4'>{synopsis}</p>
            <p className='text-gray-600 text-xs'>Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadNovelPage;
