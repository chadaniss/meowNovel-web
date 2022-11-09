import { Navbar } from 'flowbite-react';
import { useLocation } from 'react-router-dom';
import MenuBrowse from './MenuBrowse';

export default function NavBrowse() {
  const { pathname } = useLocation();

  return (
    <div className='min-h-100 bg-[#FFF5F5] drop-shadow-lg py-3 flex pl-10'>
      <Navbar>
        <div className='min-h-100 bg-[#FFF5F5] border-[#FFF5F5] flex justify-between -mx-5 -my-5'>
          <Navbar.Collapse>
            <MenuBrowse
              page='/action'
              title='action'
              active={pathname === '/action'}
            />
            <MenuBrowse
              page='/comedy'
              title='comedy'
              active={pathname === '/comedy'}
            />
            <MenuBrowse
              page='/drama'
              title='drama'
              active={pathname === '/drama'}
            />
            <MenuBrowse
              page='/fantasy'
              title='fantasy'
              active={pathname === '/fantasy'}
            />
            <MenuBrowse
              page='/romance'
              title='romance'
              active={pathname === '/romance'}
            />
            <MenuBrowse
              page='/thriller'
              title='thriller'
              active={pathname === '/thriller'}
            />
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
