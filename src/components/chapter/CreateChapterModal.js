import { Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import * as chapterService from '../../api/chapterApi';
import { toast } from 'react-toastify';
import { useChapter } from '../../contexts/ChapterContext';
import { useParams } from 'react-router-dom';

function CreateChapterModal({ updateNovel }) {
  const [isShow, setIsShow] = useState(false);
  const { fetchChapter, chapters, setUpdateChapters } = useChapter();
  const { id } = useParams();
  const onClick = (e) => setIsShow(true);
  const onClose = (e) => setIsShow(false);

  const [input, setInput] = useState({
    title: '',
    content: ''
  });

  console.log(chapters);

  const { createChapter } = useChapter();

  const { startLoading, stopLoading } = useLoading();

  const handleClickSave = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await createChapter(id, input);
      await fetchChapter(id);
      // setUpdateNovels()
      onClose();
      setInput({
        title: '',
        content: ''
      });
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
        onClick={onClick}
      >
        + New
      </button>
      <Modal show={isShow} onClose={onClose} size='6xl'>
        <Modal.Header>
          <input
            className='w-full text-base leading-relaxed text-gray-500 dark:text-gray-400 border border-emerald-900'
            value={input.title}
            onChange={(e) => setInput({ ...input, title: e.target.value })}
          />
        </Modal.Header>
        <Modal.Body>
          <div className='space-y-6 h-96'>
            <textarea
              className='w-full h-full resize-none text-base leading-relaxed text-gray-500 dark:text-gray-400'
              value={input.content}
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
