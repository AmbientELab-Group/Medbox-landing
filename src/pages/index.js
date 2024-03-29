import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import AboutSection from "../sections/about";
import HomeSection from "../sections/home";
import ContactSection from "../sections/contact";
import DeviceSection from "../sections/device";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <HomeSection id="home" />
      <AboutSection id="about" />
      <DeviceSection id="device" />
      <ContactSection id="contact" />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query($language: String!, $ns: String!) {
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { in: [$ns, "common"] } }
    ) {
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
