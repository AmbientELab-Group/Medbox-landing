import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "../components/header";
import GlobalStyle from "../styles/globalCss";
import theme from "../styles/theme";

const Content = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-top: 50px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  padding: 8px;
  background: #f0f0f0;
`;

const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Content>
          {children}
        </Content>
        <Footer />
    </ThemeProvider>
  );
};

export default Layout;
