import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as authService from '../api/authApi';
import SpinnerComponent from '../components/ui/SpinnerComponent';
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken
} from '../utils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await getMe();
        }
      } catch (err) {
        toast.error(err.response?.data.message);
      } finally {
        setInitialLoading(false);
      }
    };
    fetchMe();
  }, []);

  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  };

  const register = async (input) => {
    try {
      const res = await authService.register(input);
      addAccessToken(res.data.token);
      await getMe();
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  const login = async (input) => {
    const res = await authService.login(input);
    addAccessToken(res.data.token);
    await getMe();
  };

  const logout = () => {
    setUser(null);
    removeAccessToken();
  };

  if (initialLoading) return <SpinnerComponent />;
  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, initialLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
