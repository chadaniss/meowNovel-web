import { useEffect, useState } from 'react';
import { getNovels } from '../../api/novelApi';
import { QUERY_NOVEL_FIND_ACTION } from '../../config/constants';
import NovelCard from '../../features/novel/NovelCard';

function ActionPage() {
  const [novels, setNovels] = useState([]);

  const fetchActionNovels = async () => {
    try {
      const res = await getNovels(QUERY_NOVEL_FIND_ACTION);
      setNovels(res.data.novels);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchActionNovels();
  }, []);

  return (
    <div>
      <div className='p-3 px-5 mt-5'>
        <div className='px-10 w-full'>
          <div className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'>
            Action
          </div>
        </div>
      </div>
      <div className='p-3 pl-20 flex flex-wrap gap-6'>
        {novels?.map?.((item) => (
          <NovelCard key={item.id} novel={item} />
        ))}
      </div>
    </div>
  );
}

export default ActionPage;
