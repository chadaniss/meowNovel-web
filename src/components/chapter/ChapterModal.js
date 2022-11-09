import { Button, Modal } from 'flowbite-react';

function ChapterModal({ isShow, onClose, chapter }) {
  return (
    <Modal show={isShow} onClose={onClose}>
      <Modal.Header>{chapter.title}</Modal.Header>
      <Modal.Body>
        <div className='space-y-6'>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            {chapter.content}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ChapterModal;
