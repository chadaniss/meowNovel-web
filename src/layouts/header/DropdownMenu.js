import { Dropdown } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ProfileModal from '../../features/profile/ProfileModal';

function DropdownMenu() {
  const { logout } = useAuth();
  const [isShow, setIsShow] = useState(false);

  const onClick = () => setIsShow(true);
  const onClose = () => setIsShow(false);

  return (
    <div>
      <Dropdown.Item onClick={onClick}>Your profile</Dropdown.Item>
      <ProfileModal onClose={onClose} isShow={isShow} />

      <Link to='/writing'>
        <Dropdown.Item>My writing</Dropdown.Item>
      </Link>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
    </div>
  );
}

export default DropdownMenu;
