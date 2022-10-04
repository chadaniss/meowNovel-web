import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />}></Route>
      <Route path='/home' element={<HomePage />}></Route>
    </Routes>
  );
}

export default Router;
