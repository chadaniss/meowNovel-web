import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useChapter } from '../../contexts/ChapterContext';
import ChapterCard from './ChapterCard';
import ChapterModal from './ChapterModal';
import CreateChapterModal from './CreateChapterModal';

function ChapterList({ currentNovel, updateNovel }) {
  const { chapters, fetchChapter } = useChapter();
  const novelId = updateNovel?.id;
  console.log('novelId', novelId);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetchChapter(id);
  }, []);

  console.log('chapters', chapters);

  return (
    <div className='bg-[#FFF5F5] py-10 px-52 mt-10'>
      {currentNovel ? (
        <>
          <div className='px-5 pb-2 border-b-2 border-gray-300 flex justify-between'>
            <div className='font-bold text-2xl '>Chapter</div>
          </div>
          <div className='p-3 pl-20 pt-8 flex flex-col gap-5'>
            {currentNovel.Chapters?.map?.((item) => (
              <ChapterCard key={item.id} chapter={item} />
            ))}
          </div>
        </>
      ) : updateNovel ? (
        <>
          <div className='px-5 pb-2 border-b-2 border-gray-300 flex justify-between'>
            <div className='font-bold text-2xl '>Chapter</div>

            <CreateChapterModal updateNovel={updateNovel} />
          </div>
          <div className='p-3 pl-20 pt-8 flex flex-col gap-5'>
            {chapters?.map?.((item) => (
              <ChapterCard
                key={item.id}
                chapter={item}
                updateNovel={updateNovel}
              />
            ))}
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default ChapterList;
