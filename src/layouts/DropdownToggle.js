import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import DropdownMenu from './DropdownMenu';

function DropdownToggle() {
  return (
    <div>
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
        <DropdownMenu />
      </Dropdown>
      <Navbar.Toggle />
    </div>
  );
}

export default DropdownToggle;
