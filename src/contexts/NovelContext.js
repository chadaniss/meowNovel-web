import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as novelService from '../api/novelApi';
import SpinnerComponent from '../components/ui/SpinnerComponent';
import { QUERY_NOVEL_FIND_ALL } from '../config/constants';
import { useAuth } from './AuthContext';

const NovelContext = createContext();

function NovelContextProvider({ children }) {
  const [novel, setNovel] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchNovel = async () => {
      try {
        const res = await novelService.getNovels(user.id, QUERY_NOVEL_FIND_ALL);
        setNovel(res.data.novels);
      } catch (err) {
        toast.error(err.response?.data.message);
      } finally {
        setInitialLoading(false);
      }
    };
    fetchNovel();
  }, [user.id]);

  if (initialLoading) return <SpinnerComponent />;
  return (
    <NovelContext.Provider value={{ novel, initialLoading }}>
      {children}
    </NovelContext.Provider>
  );
}

export const useNovel = () => {
  return useContext(NovelContext);
};

export default NovelContextProvider;
