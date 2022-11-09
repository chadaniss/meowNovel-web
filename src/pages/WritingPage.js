import { useEffect, useState } from 'react';
import { getMyNovels } from '../api/novelApi';
import MyNovel from '../features/novel/MyNovel';

function WritingPage() {
  const [myNovels, setMyNovels] = useState([]);

  const fetchMyNovels = async () => {
    try {
      const res = await getMyNovels();
      // console.log('res.data', res.data);
      setMyNovels(res?.data?.novels);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log('myNovels', myNovels);
  useEffect(() => {
    fetchMyNovels();
  }, []);

  return (
    <div>
      <div className='p-3 px-16 mt-5 w-full'>
        <div className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'>
          My Writing
        </div>
      </div>
      <div className='p-3 pl-20 flex flex-wrap gap-6'>
        {myNovels?.map?.((item) => (
          <MyNovel key={item.id} myNovel={item} />
        ))}
      </div>
    </div>
  );
}

export default WritingPage;
