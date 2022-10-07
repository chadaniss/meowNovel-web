import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useAuth } from '../../contexts/AuthContext';
import DropdownToggle from './DropdownToggle';

function ProfileIcon() {
  const {
    user: { profileUrl }
  } = useAuth();

  return (
    <div className='flex md:order-2'>
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={<Avatar alt='User settings' img={profileUrl} rounded={true} />}
      >
        <DropdownToggle />
      </Dropdown>
      <Navbar.Toggle />
    </div>
  );
}

export default ProfileIcon;
