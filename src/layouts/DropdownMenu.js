import { Dropdown } from 'flowbite-react';

function DropdownMenu() {
  return (
    <div>
      <Dropdown.Item>Your profile</Dropdown.Item>
      <Dropdown.Item>My writing</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </div>
  );
}

export default DropdownMenu;
