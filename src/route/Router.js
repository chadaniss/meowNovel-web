import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import { useAuth } from '../contexts/AuthContext';
import BrowsePage from '../pages/BrowsePage';
import CreatePage from '../pages/CreatePage';
import LibraryPage from '../pages/LibraryPage';
import ContactPage from '../pages/ContactPage';
import ProfilePage from '../pages/ProfilePage';
import WritingPage from '../pages/WritingPage';
import AuthLayout from '../layouts/auth/AuthLayout';
import HomePage from '../pages/HomePage';

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      {user ? (
        <Route path='/' element={<AuthLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/browse' element={<BrowsePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/library' element={<LibraryPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/writing' element={<WritingPage />} />
        </Route>
      ) : (
        <>
          <Route path='/' element={<LoginPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
