import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import NoMatch from '../pages/NoMatch';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default Router;
