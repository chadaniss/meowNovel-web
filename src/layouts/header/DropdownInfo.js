import { Avatar, Dropdown } from 'flowbite-react';
import { useAuth } from '../../contexts/AuthContext';

function DropdownInfo() {
  const {
    user: { profileUrl, id, firstName, lastName, email }
  } = useAuth();

  return (
    <Dropdown.Header>
      <div className='text-center mx-5'>
        <div className='flex justify-center mb-3'>
          <Avatar
            alt='User settings'
            img={profileUrl}
            rounded={true}
            statusPosition='center'
            size='lg'
          />
        </div>
        <span className='block text-sm'>ID: {id}</span>
        <span className='block text-sm'>
          {firstName} {lastName}
        </span>
        <span className='block truncate text-sm font-medium'>{email}</span>
      </div>
    </Dropdown.Header>
  );
}

export default DropdownInfo;
