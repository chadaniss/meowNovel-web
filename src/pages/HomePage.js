import { Card, Carousel, Footer } from 'flowbite-react';
import Header from '../layouts/Header';

function HomePage() {
  return (
    <div className='flex flex-col'>
      {/* Navbar */}
      <Header />

      {/* carousel */}
      <div className='h-64 sm:h-64 xl:h-80 2xl:h-96 p-3'>
        <Carousel>
          <img src='carousel/1.png' alt='...' className='h-full w-auto' />
          <img src='carousel/2.png' alt='...' className='h-full w-auto' />
          <img src='carousel/3.png' alt='...' className='h-full w-auto' />
          <img src='carousel/4.png' alt='...' className='h-full w-auto' />
          <img src='carousel/5.png' alt='...' className='h-full w-auto' />
        </Carousel>
      </div>

      <div className='bg-pink-100'>
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

      {/* Footer */}
      <Footer container={true}>
        <div className='w-full text-center'>
          <div className='w-full justify-between sm:flex sm:items-center sm:justify-between'>
            <Footer.Brand
              href='https://flowbite.com'
              src='logo/blackCat.png'
              alt='Flowbite Logo'
              name='meowNovel'
            />
            <Footer.LinkGroup>
              <Footer.Link href='#'>About</Footer.Link>
              <Footer.Link href='#'>Privacy Policy</Footer.Link>
              <Footer.Link href='#'>Licensing</Footer.Link>
              <Footer.Link href='#'>Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href='#' by='meowNovel™' year={2022} />
        </div>
      </Footer>
      {/* End-Footer */}
    </div>
  );
}

export default HomePage;
