import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "../components/header/header";
import Footer from "../components/footer";
import GlobalStyle from "../styles/globalCss";
import theme from "../styles/theme";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "../i18n/config";

const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 6rem;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Layout = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const detectedLanguage = navigator.language;
    i18n.changeLanguage(detectedLanguage);
  }, [i18n]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <title>Ambient</title>
      </Helmet>
      <Root>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Root>
    </ThemeProvider>
  );
};

export default Layout;
