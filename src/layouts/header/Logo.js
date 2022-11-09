import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo/logo.png';

function Logo() {
  return (
    <Navbar.Brand>
      <Link to='/'>
        <img src={logo} className='h-12' alt='Logo' />
      </Link>
    </Navbar.Brand>
  );
}

export default Logo;
