import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import { useTranslation } from "gatsby-plugin-react-i18next";
import SEO from "../components/SEO";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 4rem 4rem;
    flex-direction: row;
  }
`;

const AboutPage = () => {
  const { t } = useTranslation("about");

  return (
    <Layout>
      <SEO />
      <PageContainer></PageContainer>
    </Layout>
  );
};

export default AboutPage;

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
