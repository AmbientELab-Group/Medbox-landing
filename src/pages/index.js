import * as React from "react";
import Layout from "../components/layout";

import OutlineButton from "../components/outlineButton";

import AboutSection from "../sections/about";
import HomeSection from "../sections/home";
import ProjectSection from "../sections/project";

const IndexPage = () => {
  return (
    <Layout>
      <OutlineButton>Sign In</OutlineButton>
      <HomeSection id="home" />
      <AboutSection id="about" />
      <ProjectSection id="project" />
    </Layout>
  );
};

export default IndexPage;
