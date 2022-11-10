import { useState } from 'react';
import { timeSince } from '../../utils/dateformat';
import ChapterModal from './ChapterModal';

function ChapterCard({ chapter, updateNovel }) {
  const [isShow, setIsShow] = useState(false);

  const onClick = (e) => setIsShow(true);
  const onClose = (e) => setIsShow(false);
  return (
    <>
      <div
        className='flex justify-between w-full hover:text-pink-500 cursor-pointer'
        onClick={onClick}
      >
        <div>{chapter.title}</div>
        <div>{`Last updated ${timeSince(chapter.updatedAt)}`}</div>
      </div>
      <ChapterModal
        isShow={isShow}
        onClose={onClose}
        chapter={chapter}
        updateNovel={updateNovel}
      />
    </>
  );
}

export default ChapterCard;
