import {
  Avatar,
  Card,
  Carousel,
  Dropdown,
  Footer,
  Navbar
} from 'flowbite-react';

function HomePage() {
  return (
    <>
      {/* Navbar */}
      <Navbar fluid={true} rounded={true}>
        <div className='bg-red-wine border-gray-200 px-2 sm:px-4 py-2.5 -my-2 rounded w-full flex justify-between'>
          <Navbar.Brand href='https://flowbite.com/'>
            <img src='logo/logo.png' className='h-12' alt='Logo' />
          </Navbar.Brand>
          <div className='flex md:order-2'>
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt='User settings'
                  img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className='block text-sm'>ID: 9999</span>
                <span className='block text-sm'>Bonnie Green</span>
                <span className='block truncate text-sm font-medium'>
                  meow99@gmail.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Your profile</Dropdown.Item>
              <Dropdown.Item>My writing</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <div className='flex items-center'>
            <Navbar.Collapse>
              <Navbar.Link href='/navbars' active={true}>
                <span className='text-white'>Home</span>
              </Navbar.Link>
              <Navbar.Link href='/navbars'>Browse</Navbar.Link>
              <Navbar.Link href='/navbars'>Create</Navbar.Link>
              <Navbar.Link href='/navbars'>Library</Navbar.Link>
              <Navbar.Link href='/navbars'>Contact</Navbar.Link>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>

      {/* carousel */}
      <div className='h-64 sm:h-64 xl:h-80 2xl:h-96 p-3 -mt-3.5 mb-5'>
        <Carousel>
          <img src='carousel/1.png' alt='...' className='h-full w-auto' />
          <img src='carousel/2.png' alt='...' className='h-full w-auto' />
          <img src='carousel/3.png' alt='...' className='h-full w-auto' />
          <img src='carousel/4.png' alt='...' className='h-full w-auto' />
          <img src='carousel/5.png' alt='...' className='h-full w-auto' />
        </Carousel>
      </div>

      {/* Populas */}
      <div className='p-3 px-5'>
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
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className='max-w-sm pr-5'>
          <Card horizontal={true} imgSrc='cover-book/1.png'>
            <h5 className='text-md font-bold tracking-tight text-gray-900 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5>
            <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
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
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className='max-w-sm pr-5'>
          <Card horizontal={true} imgSrc='cover-book/1.png'>
            <h5 className='text-md font-bold tracking-tight text-gray-900 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5>
            <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
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
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className='max-w-sm pr-5'>
          <Card horizontal={true} imgSrc='cover-book/1.png'>
            <h5 className='text-md font-bold tracking-tight text-gray-900 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5>
            <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
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
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className='max-w-sm pr-5'>
          <Card horizontal={true} imgSrc='cover-book/1.png'>
            <h5 className='text-md font-bold tracking-tight text-gray-900 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5>
            <p className='text-xs font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
      {/* End Card-Romance */}

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
    </>
  );
}

export default HomePage;
