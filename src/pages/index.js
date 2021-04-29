import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import AboutSection from "../sections/about";
import HomeSection from "../sections/home";
import ContactSection from "../sections/contact";
import DeviceSection from "../sections/device";

const IndexPage = () => {
  return (
    <Layout>
      <HomeSection id="home" />
      <AboutSection id="about" />
      <DeviceSection id="device" />
      <ContactSection id="contact" />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
