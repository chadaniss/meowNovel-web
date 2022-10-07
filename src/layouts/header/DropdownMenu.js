import { Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function DropdownMenu() {
  const { logout } = useAuth();
  return (
    <div>
      <Dropdown.Item>
        <Link to='/profile'>Your profile</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to='/writing'>My writing</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
    </div>
  );
}

export default DropdownMenu;
