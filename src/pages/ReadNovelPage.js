import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as novelService from '../api/novelApi';
import ChapterList from '../components/chapter/ChapterList';
import { timeSince } from '../utils/dateformat';

function ReadNovelPage() {
  const params = useParams();

  const [currentNovel, setCurrentNovel] = useState({});

  const fetchCurrentNovel = async () => {
    try {
      const res = await novelService.getCurrentNovel(+params.id);
      setCurrentNovel(res?.data?.novel);
    } catch (err) {
      toast.error(err.response?.data.message);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCurrentNovel();
    console.log('use effect run');
  }, []);

  return (
    <>
      <div className='flex justify-evenly py-20 px-10'>
        <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
          <img
            className=' w-full h-96 md:h-auto object-cover rounded-t-lg  md:rounded-lg'
            src={currentNovel.bookCoverUrl}
            alt=''
          />
        </div>
        <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
          <div className='p-6 flex flex-col justify-start'>
            <div className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'>
              {currentNovel.title}
            </div>
            <p className='text-gray-700 text-base mb-4'>
              {currentNovel.synopsis}
            </p>
            <p className='text-gray-600 text-xs'>{`Last updated ${timeSince(
              currentNovel.updatedAt
            )}`}</p>
          </div>
        </div>
      </div>
      <ChapterList currentNovel={currentNovel} />
    </>
  );
}

export default ReadNovelPage;
