import { Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import * as chapterService from '../../api/chapterApi';
import { toast } from 'react-toastify';
import { useChapter } from '../../contexts/ChapterContext';

function CreateChapterModal() {
  const [isShow, setIsShow] = useState(false);

  const onClick = (e) => setIsShow(true);
  const onClose = (e) => setIsShow(false);

  const [input, setInput] = useState({
    title: '',
    content: ''
  });

  const { createChapter } = useChapter();

  const { startLoading, stopLoading } = useLoading();

  const handleClickSave = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await createChapter(input);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      <button
        className='w-28 font-semibold rounded-md shadow-md bg-pink-300 hover:bg-red-wine hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 py-1 align-middle block bg-transparent text-zinc-700 border-zinc-400'
        onClick={onclick}
      >
        + New
      </button>
      <Modal show={isShow} onClose={onClose} size='6xl'>
        <Modal.Header>
          <input
            className='w-full text-base leading-relaxed text-gray-500 dark:text-gray-400'
            value={input ? input.title : ''}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          />
        </Modal.Header>
        <Modal.Body>
          <div className='space-y-6 h-96'>
            <textarea
              className='w-full h-full resize-none text-base leading-relaxed text-gray-500 dark:text-gray-400'
              value={input ? input.content : ''}
              onChange={(e) =>
                setInput({
                  ...input,
                  content: e.target.value
                })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='w-full flex justify-center gap-7'>
            <button
              className='font-semibold rounded-md shadow-md bg-pink-300 hover:bg-red-wine hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 py-1 w-28 align-middle block bg-transparent text-zinc-700 border-zinc-400'
              onClick={handleClickSave}
            >
              SAVE
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateChapterModal;
