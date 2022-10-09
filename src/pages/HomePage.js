import { Carousel } from 'flowbite-react';
import NovelContainer from '../features/novel/NovelContainer';

function HomePage() {
  return (
    <>
      {/* carousel */}
      <div className='h-64 sm:h-64 xl:h-80 2xl:h-96 p-3'>
        <Carousel>
          <img src='carousel/1.png' alt='...' className='h-auto w-auto' />
          <img src='carousel/2.png' alt='...' className='h-auto w-auto' />
          <img src='carousel/3.png' alt='...' className='h-auto w-auto' />
          <img src='carousel/4.png' alt='...' className='h-auto w-auto' />
          <img src='carousel/5.png' alt='...' className='h-auto w-auto' />
        </Carousel>
      </div>

      <NovelContainer />
    </>
  );
}

export default HomePage;
