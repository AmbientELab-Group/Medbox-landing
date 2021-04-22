import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { withTrans } from "../i18n/withTrans";
import Header from "../components/header/header";
import Footer from "../components/footer";
import GlobalStyle from "../styles/globalCss";
import theme from "../styles/theme";
import { Helmet } from "react-helmet";

const Content = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <title>Ambient</title>
      </Helmet>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </ThemeProvider>
  );
};

export default withTrans(Layout);
