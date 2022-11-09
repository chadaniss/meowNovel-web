import { Navbar } from 'flowbite-react';
import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';

function Menu() {
  const { pathname } = useLocation();
  return (
    <div className='flex items-center'>
      <Navbar.Collapse>
        <MenuItem page='/' title='home' active={pathname === '/'} />
        <MenuItem
          page='/action'
          title='browse'
          active={pathname === '/action'}
        />
        <MenuItem
          page='/create'
          title='create'
          active={pathname === '/create'}
        />
        <MenuItem
          page='/library'
          title='library'
          active={pathname === '/library'}
        />
        <MenuItem
          page='/contact'
          title='contact'
          active={pathname === '/contact'}
        />
      </Navbar.Collapse>
    </div>
  );
}

export default Menu;
