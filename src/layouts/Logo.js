import { Navbar } from 'flowbite-react';
import React from 'react';

function Logo() {
  return (
    <Navbar.Brand href='/'>
      <img src='logo/logo.png' className='h-12' alt='Logo' />
    </Navbar.Brand>
  );
}

export default Logo;
