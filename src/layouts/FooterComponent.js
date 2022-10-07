import { Footer } from 'flowbite-react';
import React from 'react';

function FooterComponent() {
  return (
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
  );
}

export default FooterComponent;
