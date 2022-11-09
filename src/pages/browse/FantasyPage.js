import { useEffect, useState } from 'react';
import { getNovels } from '../../api/novelApi';
import { QUERY_NOVEL_FIND_FANTASY } from '../../config/constants';
import NovelCard from '../../features/novel/NovelCard';

function FantasyPage() {
  const [novels, setNovels] = useState([]);

  const fetchFantasyNovels = async () => {
    try {
      const res = await getNovels(QUERY_NOVEL_FIND_FANTASY);
      setNovels(res.data.novels);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFantasyNovels();
  }, []);

  return (
    <div>
      <div className='p-3 px-5 mt-5'>
        <div className='px-10 w-full'>
          <div className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'>
            Fantasy
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

export default FantasyPage;
