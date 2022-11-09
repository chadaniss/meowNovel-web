import { useEffect, useState } from 'react';
import { getNovels } from '../../api/novelApi';
import { QUERY_NOVEL_FIND_THRILLER } from '../../config/constants';
import NovelCard from '../../features/novel/NovelCard';

function ThrillerPage() {
  const [novels, setNovels] = useState([]);

  const fetchThrillerNovels = async () => {
    try {
      const res = await getNovels(QUERY_NOVEL_FIND_THRILLER);
      setNovels(res.data.novels);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchThrillerNovels();
  }, []);

  return (
    <div>
      <div className='p-3 px-16 mt-5 w-full'>
        <div className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'>
          Thriller
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
export default ThrillerPage;
