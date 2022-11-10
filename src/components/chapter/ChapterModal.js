import { Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import * as chapterService from '../../api/chapterApi';
import { useChapter } from '../../contexts/ChapterContext';
import { toast } from 'react-toastify';

function ChapterModal({ isShow, onClose, chapter, updateNovel }) {
  const chapterId = chapter.id;
  // console.log('chapterId', chapterId);

  const [updateChapter, setUpdateChapter] = useState({});

  const { startLoading, stopLoading } = useLoading();

  const fetchEditChapter = async () => {
    try {
      const res = await chapterService.getEditChapter(chapterId);
      setUpdateChapter(res.data.chapter);
    } catch (err) {
      toast.error(err.response?.data.message);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEditChapter();
  }, []);

  const handleClickSave = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await chapterService.updateChapter(chapterId, updateChapter);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  const handleClickDelete = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await chapterService.deleteChapter(chapterId);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <Modal show={isShow} onClose={onClose} size='6xl'>
      {updateNovel ? (
        // For Edit page (update == true)
        <>
          <Modal.Header>
            <input
              className='w-full text-base leading-relaxed text-gray-500 dark:text-gray-400'
              value={updateChapter.title}
              onChange={(e) =>
                setUpdateChapter({ ...updateChapter, title: e.target.value })
              }
            />
          </Modal.Header>
          <Modal.Body>
            <div className='space-y-6 h-96'>
              <textarea
                className='w-full h-full resize-none text-base leading-relaxed text-gray-500 dark:text-gray-400'
                value={updateChapter.content}
                onChange={(e) =>
                  setUpdateChapter({
                    ...updateChapter,
                    content: e.target.value
                  })
                }
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className='w-full flex justify-center gap-7'>
              <button
                className='font-semibold rounded-md shadow-md hover:bg-red-wine hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 py-1 w-28 align-middle block bg-transparent text-zinc-700 border-zinc-400'
                type='button'
                onClick={handleClickDelete}
              >
                DELETE
              </button>
              <button
                className='font-semibold rounded-md shadow-md bg-pink-300 hover:bg-red-wine hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 py-1 w-28 align-middle block bg-transparent text-zinc-700 border-zinc-400'
                onClick={handleClickSave}
              >
                SAVE
              </button>
            </div>
          </Modal.Footer>
        </>
      ) : (
        // For Reader page
        <>
          <Modal.Header>{chapter.title}</Modal.Header>
          <Modal.Body>
            <div className='space-y-6'>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                {chapter.content}
              </p>
            </div>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
}

export default ChapterModal;
