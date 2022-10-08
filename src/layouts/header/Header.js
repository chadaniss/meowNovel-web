import { Navbar } from 'flowbite-react';
import Logo from './Logo';
import Menu from './Menu';
import ProfileIcon from './ProfileIcon';

function Header() {
  return (
    <div className='bg-red-wine px-5 border-red-wine border-2'>
      <Navbar fluid={true}>
        <div className='bg-red-wine border-red-wine sm:px-4 py-2.5 -my-3 -mx-4 w-screen flex justify-between'>
          <Logo />
          <Menu />
          <ProfileIcon />
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
