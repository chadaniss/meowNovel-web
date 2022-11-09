import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

function MenuBrowse({ active, page, title }) {
  return (
    <Navbar.Link active={active}>
      <Link
        to={page}
        className={`capitalize font-semibold ${
          active ? 'text-pink-700' : 'text-slate-500 hover:text-pink-400'
        }`}
      >
        {title}
      </Link>
    </Navbar.Link>
  );
}

export default MenuBrowse;
