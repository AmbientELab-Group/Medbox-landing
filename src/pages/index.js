import React, { useEffect } from "react";
import Layout from "../components/layout";
import AboutSection from "../sections/about";
import HomeSection from "../sections/home";
import ProjectSection from "../sections/project";
import ContactSection from "../sections/contact";
import { useTranslation } from "react-i18next";

const IndexPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const detectedLanguage = navigator.language;
    i18n.changeLanguage(detectedLanguage);
  }, [i18n]);

  return (
    <Layout t={t} i18n={i18n}>
      <HomeSection id="home" />
      <AboutSection id="about" />
      <ProjectSection id="project" />
      <ContactSection id="contact" />
    </Layout>
  );
};

export default IndexPage;
