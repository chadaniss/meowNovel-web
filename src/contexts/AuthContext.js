import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import * as authService from '../api/authApi';
import { addAccessToken } from '../utils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (input) => {
    try {
      const res = await authService.register(input);
      setUser(true);
      addAccessToken(res.data.token);
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  const login = async (input) => {
    const res = await authService.login(input);
    setUser(true);
    addAccessToken(res.data.token);
  };

  return (
    <AuthContext.Provider value={{ user, register, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
