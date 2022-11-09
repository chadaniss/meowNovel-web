import { useEffect, useState } from 'react';
import { getNovels } from '../../api/novelApi';
import { QUERY_NOVEL_FIND_COMEDY } from '../../config/constants';
import NovelCard from '../../features/novel/NovelCard';

function ComedyPage() {
  const [novels, setNovels] = useState([]);

  const fetchComedyNovels = async () => {
    try {
      const res = await getNovels(QUERY_NOVEL_FIND_COMEDY);
      setNovels(res.data.novels);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchComedyNovels();
  }, []);

  return (
    <div>
      <div className='p-3 px-16 mt-5 w-full'>
        <div className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'>
          Comedy
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

export default ComedyPage;
