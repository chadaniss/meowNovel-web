import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import * as chapterService from '../api/chapterApi';
import { toast } from 'react-toastify';
import SpinnerComponent from '../components/ui/SpinnerComponent';

const ChapterContext = createContext();

function ChapterContextProvider({ children }) {
  const [chapters, setChapters] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

  const fetchChapter = async (novelId) => {
    try {
      const res = await chapterService.getChapters(novelId);
      console.log('res.data', res.data);
      setChapters(res.data.chapters);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setInitialLoading(false);
    }
  };
  useEffect(() => {
    fetchChapter();
  }, []);

  const createChapter = async (novelId, input) => {
    try {
      const res = await chapterService.createChapter(novelId, input);
      setChapters([res.data.chapter, ...chapters]);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setInitialLoading(false);
    }
  };

  if (initialLoading) return <SpinnerComponent />;

  return (
    <ChapterContext.Provider
      value={{
        chapters,
        fetchChapter,
        createChapter
      }}
    >
      {children}
    </ChapterContext.Provider>
  );
}

export const useChapter = () => {
  return useContext(ChapterContext);
};

export default ChapterContextProvider;
