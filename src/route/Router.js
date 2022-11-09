import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import { useAuth } from '../contexts/AuthContext';
import CreatePage from '../pages/CreatePage';
import LibraryPage from '../pages/LibraryPage';
import ContactPage from '../pages/ContactPage';
import WritingPage from '../pages/WritingPage';
import AuthLayout from '../layouts/auth/AuthLayout';
import HomePage from '../pages/HomePage';
import EditPage from '../pages/EditPage';
import ReadNovelPage from '../pages/ReadNovelPage';
import BrowseLayout from '../layouts/browsePage/BrowseLayout';
import ActionPage from '../pages/browse/ActionPage';
import ComedyPage from '../pages/browse/ComedyPage;';
import ThrillerPage from '../pages/browse/ThrillerPage';
import DramaPage from '../pages/browse/DramaPage';
import FantasyPage from '../pages/browse/FantasyPage';
import RomancePage from '../pages/browse/RomancePage';

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      {user ? (
        <Route path='/' element={<AuthLayout />}>
          <Route path='/' element={<HomePage />} />

          <Route path='/' element={<BrowseLayout />}>
            <Route path='/action' element={<ActionPage />} />
            <Route path='/comedy' element={<ComedyPage />} />
            <Route path='/drama' element={<DramaPage />} />
            <Route path='/fantasy' element={<FantasyPage />} />
            <Route path='/romance' element={<RomancePage />} />
            <Route path='/thriller' element={<ThrillerPage />} />
          </Route>

          <Route path='/create' element={<CreatePage />} />
          <Route path='/library' element={<LibraryPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/writing' element={<WritingPage />} />
          <Route path='/novels/:id' element={<ReadNovelPage />} />
          <Route path='/edit/:id' element={<EditPage />} />
          <Route path='*' element={<Navigate to='/' />} />
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
