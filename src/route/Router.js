import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import { useAuth } from '../contexts/AuthContext';
import BrowsePage from '../pages/BrowsePage';
import CreatePage from '../pages/CreatePage';
import LibraryPage from '../pages/LibraryPage';
import ContactPage from '../pages/ContactPage';
import ProfilePage from '../pages/ProfilePage';
import WritingPage from '../pages/WritingPage';

function Router() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      {user ? (
        <>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/browse' element={<BrowsePage />}></Route>
          <Route path='/create' element={<CreatePage />}></Route>
          <Route path='/library' element={<LibraryPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
          <Route path='/profile' element={<ProfilePage />}></Route>
          <Route path='/writing' element={<WritingPage />}></Route>
        </>
      ) : (
        <Route path='/' element={<LoginPage />}></Route>
      )}
    </Routes>
  );
}

export default Router;
