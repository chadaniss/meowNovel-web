import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { useAuth } from '../contexts/AuthContext';

function Router() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      {user ? (
        <>
          <Route path='/' element={<HomePage />}></Route>
        </>
      ) : (
        <Route path='/' element={<LoginPage />}></Route>
      )}
    </Routes>
  );
}

export default Router;
