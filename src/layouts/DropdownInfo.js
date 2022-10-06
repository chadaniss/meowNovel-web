import { Avatar, Dropdown } from 'flowbite-react';

function DropdownInfo() {
  return (
    <Dropdown.Header>
      <div className='text-center mx-5'>
        <div className='flex justify-center mb-3'>
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
  );
}

export default DropdownInfo;
