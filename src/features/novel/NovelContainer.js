import NovelCard from './NovelCard';

function NovelContainer() {
  return (
    <div>
      <div className='p-3 px-5 mt-5'>
        <div className='px-10 w-full'>
          <div className='px-5 pb-2 font-bold text-2xl border-b-2 border-gray-300'>
            New
          </div>
        </div>
      </div>

      <NovelCard />
    </div>
  );
}

export default NovelContainer;
