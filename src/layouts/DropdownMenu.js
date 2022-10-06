import { Avatar, Dropdown } from 'flowbite-react';

function DropdownMenu() {
  return (
    <div>
      <Dropdown.Header>
        <div className='text-center'>
          <div className='flex justify-center'>
            <Avatar
              alt='User settings'
              img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              rounded={true}
              statusPosition='center'
              size='lg'
            />
          </div>
          <span className='block text-sm'>ID: 9999</span>
          <span className='block text-sm'>Bonnie Green</span>
          <span className='block truncate text-sm font-medium'>
            meow99@gmail.com
          </span>
        </div>
      </Dropdown.Header>
      <Dropdown.Item>Your profile</Dropdown.Item>
      <Dropdown.Item>My writing</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </div>
  );
}

export default DropdownMenu;
