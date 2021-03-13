import * as React from "react";
import styled, { ThemeProvider } from "styled-components";

import Header from "../components/header";

import AboutSection from "../sections/about";
import HomeSection from "../sections/home";
import ProjectSection from "../sections/project";
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

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Content>
        <HomeSection id="home" />
        <AboutSection id="about" />
        <ProjectSection id="project" />
      </Content>
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
