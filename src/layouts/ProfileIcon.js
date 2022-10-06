import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import DropdownToggle from './DropdownToggle';

function ProfileIcon() {
  return (
    <div className='flex md:order-2'>
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={
          <Avatar
            alt='User settings'
            img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
            rounded={true}
          />
        }
      >
        <DropdownToggle />
      </Dropdown>
      <Navbar.Toggle />
    </div>
  );
}

export default ProfileIcon;
