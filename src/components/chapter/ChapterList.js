import ChapterCard from './ChapterCard';

function ChapterList({ currentNovel }) {
  return (
    <div className='bg-[#FFF5F5] py-10 px-52'>
      <div className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'>
        Chapter
      </div>
      <div className='p-3 pl-20 pt-8 flex flex-col gap-5'>
        {currentNovel.Chapters?.map?.((item) => (
          <ChapterCard key={item.id} chapter={item} />
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
