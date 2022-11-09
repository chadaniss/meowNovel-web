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
      const res = await novelService.getMyNovels(user.id);
    } catch (err) {}
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
