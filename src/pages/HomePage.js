import { Card, Carousel } from 'flowbite-react';

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

      <div>
        {/* Populas */}
        <div className='p-3 px-5 mt-5'>
          <div className='px-10'>
            <p>Populas</p>
            <hr />
          </div>
        </div>

        {/* Card-Populas */}
        <div className='p-3 px-20 flex'>
          <div className='max-w-sm pr-5'>
            <Card horizontal={true} imgSrc='cover-book/1.png'>
              <h5 className='text-md font-bold tracking-tight text-gray-900 dark:text-white'>
                Noteworthy technology acquisitions 2021
              </h5>
              <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className='max-w-sm pr-5'>
            <Card horizontal={true} imgSrc='cover-book/1.png'>
              <h5 className='text-md font-bold tracking-tight text-gray-900 dark:text-white'>
                Noteworthy technology acquisitions 2021
              </h5>
              <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
        {/* End Card-Populas */}

        {/* Fantasy */}
        <div className='p-3 px-5'>
          <div className='px-10'>
            <p>Fantasy</p>
            <hr />
          </div>
        </div>

        {/* Card-Fantasy */}
        <div className='p-3 px-20 flex'>
          <div className='max-w-sm pr-5'>
            <Card horizontal={true} imgSrc='cover-book/1.png'>
              <h5 className='text-md font-bold tracking-tight text-gray-900 dark:text-white'>
                Noteworthy technology acquisitions 2021
              </h5>
              <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className='max-w-sm pr-5'>
            <Card horizontal={true} imgSrc='cover-book/1.png'>
              <h5 className='text-md font-bold tracking-tight text-gray-900 dark:text-white'>
                Noteworthy technology acquisitions 2021
              </h5>
              <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
        {/* End Card-Fantasy */}

        {/* Thriller */}
        <div className='p-3 px-5'>
          <div className='px-10'>
            <p>Thriller</p>
            <hr />
          </div>
        </div>

        {/* Card-Thriller */}
        <div className='p-3 px-20 flex'>
          <div className='max-w-sm pr-5'>
            <Card horizontal={true} imgSrc='cover-book/1.png'>
              <h5 className='text-md font-bold tracking-tight text-gray-900 dark:text-white'>
                Noteworthy technology acquisitions 2021
              </h5>
              <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className='max-w-sm pr-5'>
            <Card horizontal={true} imgSrc='cover-book/1.png'>
              <h5 className='text-md font-bold tracking-tight text-gray-900 dark:text-white'>
                Noteworthy technology acquisitions 2021
              </h5>
              <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
        {/* End Card-Thriller */}

        {/* Romance */}
        <div className='p-3 px-5'>
          <div className='px-10'>
            <p>Romance</p>
            <hr />
          </div>
        </div>

        {/* Card-Romance */}
        <div className='p-3 px-20 flex'>
          <div className='max-w-sm pr-5'>
            <Card horizontal={true} imgSrc='cover-book/1.png'>
              <h5 className='text-md font-bold tracking-tight text-gray-900 dark:text-white'>
                Noteworthy technology acquisitions 2021
              </h5>
              <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className='max-w-sm pr-5'>
            <Card horizontal={true} imgSrc='cover-book/1.png'>
              <h5 className='text-md font-bold tracking-tight text-gray-900 dark:text-white'>
                Noteworthy technology acquisitions 2021
              </h5>
              <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
        {/* End Card-Romance */}
      </div>
    </>
  );
}

export default HomePage;
