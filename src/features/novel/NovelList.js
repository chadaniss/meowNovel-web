import { useNovel } from '../../contexts/NovelContext';
import NovelCard from './NovelCard';

function NovelList() {
  const { novel: novels } = useNovel();
  return (
    <div className='p-3 pl-20 flex flex-wrap gap-6'>
      {novels.map((item) => (
        <NovelCard key={item.id} novel={item} />
      ))}
    </div>
  );
}

export default NovelList;
