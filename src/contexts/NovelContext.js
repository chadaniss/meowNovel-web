import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as novelService from '../api/novelApi';
import SpinnerComponent from '../components/ui/SpinnerComponent';
import { QUERY_NOVEL_FIND_ALL } from '../config/constants';
import { useAuth } from './AuthContext';

const NovelContext = createContext();

function NovelContextProvider({ children }) {
  const [novels, setNovels] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [updateNovel, setUpdateNovel] = useState({
    title: '',
    sypnosis: ''
  });
  const { user } = useAuth();

  const fetchNovel = async () => {
    try {
      const res = await novelService.getNovels(user.id, QUERY_NOVEL_FIND_ALL);
      setNovels(res.data.novels);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setInitialLoading(false);
    }
  };
  useEffect(() => {
    fetchNovel();
  }, []);

  const createNovel = async (input) => {
    const res = await novelService.createNovel(input);
    setNovels([res.data.novel, ...novels]);
  };

  const getMyNovels = async () => {
    return await novelService.getMyNovels(user.id);
  };

  if (initialLoading) return <SpinnerComponent />;
  return (
    <NovelContext.Provider
      value={{
        novels,
        initialLoading,
        createNovel,
        getMyNovels,
        updateNovel,
        setUpdateNovel,
        fetchNovel
      }}
    >
      {children}
    </NovelContext.Provider>
  );
}

export const useNovel = () => {
  return useContext(NovelContext);
};

export default NovelContextProvider;
