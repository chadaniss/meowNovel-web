import { Navbar } from 'flowbite-react';
import Logo from './Logo';
import Menu from './Menu';
import ProfileIcon from './ProfileIcon';

function Header() {
  return (
    <Navbar fluid={true} rounded={true}>
      <div className='bg-red-wine border-gray-200 px-2 sm:px-4 py-2.5 -my-2 rounded w-full flex justify-between'>
        <Logo />
        <Menu />
        <ProfileIcon />
      </div>
    </Navbar>
  );
}

export default Header;
