import { Dropdown } from 'flowbite-react';
import { useAuth } from '../contexts/AuthContext';

function DropdownMenu() {
  const { logout } = useAuth();
  return (
    <div>
      <Dropdown.Item>Your profile</Dropdown.Item>
      <Dropdown.Item>My writing</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
    </div>
  );
}

export default DropdownMenu;
