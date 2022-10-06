import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

function MenuItem({ active, page, title }) {
  return (
    <Navbar.Link active={active}>
      <Link
        to={page}
        className={`capitalize ${
          active ? 'text-white' : 'text-pink-400 hover:text-pink-900'
        }`}
      >
        {title}
      </Link>
    </Navbar.Link>
  );
}

export default MenuItem;
