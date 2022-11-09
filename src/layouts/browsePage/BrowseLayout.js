import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../container/Container';
import NavBrowse from './NavBrowse';

function BrowseLayout() {
  return (
    <>
      <NavBrowse />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default BrowseLayout;
