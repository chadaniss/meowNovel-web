import { useNovel } from '../contexts/NovelContext';
import MyNovel from '../features/novel/MyNovel';

function WritingPage() {
  const { novel: novels } = useNovel();
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
        {novels.map((item) => (
          <MyNovel key={item.id} novel={item} />
        ))}
      </div>
    </div>
  );
}

export default WritingPage;
