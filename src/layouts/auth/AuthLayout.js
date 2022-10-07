import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../container/Container';
import FooterComponent from '../FooterComponent';
import Header from '../header/Header';

function AuthLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <FooterComponent />
    </>
  );
}

export default AuthLayout;
