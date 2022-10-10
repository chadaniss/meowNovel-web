import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNovel } from '../contexts/NovelContext';
import MyNovel from '../features/novel/MyNovel';

function WritingPage() {
  const { getMyNovels, novels, setNovels } = useNovel();
  // const [novels, setNovels] = useState([]);

  const { user } = useAuth();

  const fetchNovels = async () => {
    try {
      const res = await getMyNovels(user.id);
      setNovels(res.data.novels);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNovels();
  }, []);

  return (
    <div>
      <div className='p-3 px-5 mt-5'>
        <div className='px-10 w-full'>
          <div className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'>
            My Writing
          </div>
        </div>
      </div>
      <div className='p-3 pl-20 flex flex-wrap gap-6'>
        {novels?.map((item) => (
          <MyNovel key={item.id} novel={item} />
        ))}
      </div>
    </div>
  );
}

export default WritingPage;
