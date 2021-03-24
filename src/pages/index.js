import React, { useEffect } from "react";
import Layout from "../components/layout";

import OutlineButton from "../components/outlineButton";

import AboutSection from "../sections/about";
import HomeSection from "../sections/home";
import ProjectSection from "../sections/project";

import { useTranslation } from "react-i18next";

const IndexPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const detectedLanguage = navigator.language;
    i18n.changeLanguage(detectedLanguage);
  }, []);

  return (
    <Layout t={t} i18n={i18n}>
      <OutlineButton>Sign In</OutlineButton>
      <HomeSection id="home" />
      <AboutSection id="about" />
      <ProjectSection id="project" />
    </Layout>
  );
};

export default IndexPage;
