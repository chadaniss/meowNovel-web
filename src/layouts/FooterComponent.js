import { Footer } from 'flowbite-react';
import React from 'react';
import blackCatLogo from '../asset/logo/blackCat.png';

function FooterComponent() {
  return (
    <div className='px-5'>
      <Footer container={true}>
        <div className='w-full text-center'>
          <div className='w-full justify-between sm:flex sm:items-center sm:justify-between'>
            <Footer.Brand
              href='/'
              src={blackCatLogo}
              alt='catLogo'
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
          <Footer.Copyright href='#' by='meowNovelâ„˘' year={2022} />
        </div>
      </Footer>
    </div>
  );
}

export default FooterComponent;
