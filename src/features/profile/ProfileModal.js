import { Modal } from 'flowbite-react';
import ProfileImageForm from './ProfileImageForm';
import ProfileInfo from './ProfileInfo';

function ProfileModal({ isShow, onClose }) {
  return (
    <div>
      <Modal show={isShow} size='3xl' popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
            <h1 className='text-2xl font-medium text-gray-900 dark:text-white text-center'>
              PROFILE INFORMATION
            </h1>
            <div className='flex justify-center'>
              <ProfileImageForm />
              <ProfileInfo />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProfileModal;
