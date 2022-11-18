import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as novelService from '../api/novelApi';
import SpinnerComponent from '../components/ui/SpinnerComponent';
import { QUERY_NOVEL_FIND_ALL } from '../config/constants';
import { useAuth } from './AuthContext';

const NovelContext = createContext();

function NovelContextProvider({ children }) {
  const [novels, setNovels] = useState([]);
  const [initialLoading, setInitialLoading] = useState(false);
  const { user } = useAuth();

  const fetchNovel = async () => {
    if (user) {
      try {
        const res = await novelService.getNovels(QUERY_NOVEL_FIND_ALL);
        setNovels(res.data.novels);
      } catch (err) {
        toast.error(err.response?.data.message);
      } finally {
        setInitialLoading(false);
      }
    }
  };
  useEffect(() => {
    fetchNovel();
  }, []);

  const createNovel = async (input) => {
    try {
      const res = await novelService.createNovel(input);
      setNovels([res.data.novel, ...novels]);
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setInitialLoading(false);
    }
  };

  const getMyNovels = async () => {
    try {
      return await novelService.getMyNovels(user.id);
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  if (initialLoading) return <SpinnerComponent />;
  return (
    <NovelContext.Provider
      value={{
        novels,
        initialLoading,
        createNovel,
        getMyNovels,
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
