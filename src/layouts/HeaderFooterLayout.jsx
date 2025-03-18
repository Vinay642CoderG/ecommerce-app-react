import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const HeaderFooterLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        {/* Outlet renders the nested route components */}
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default HeaderFooterLayout;

// Styled Components for HeaderFooterLayout

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f8f8f8;
`;

