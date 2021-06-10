import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import { useTranslation } from "gatsby-plugin-react-i18next";
import SEO from "../components/SEO";
import Title from "../components/typography/title";
import Introduction from "../components/introduction";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 4rem 4rem;
  }
`;

const AboutPage = ({ data }) => {
  const { t } = useTranslation("about");
  const introductions = data.introductions.edges.map((edge) => ({
    ...edge.node,
  }));

  return (
    <Layout>
      <SEO />
      <PageContainer>
        <Title>{t("title")}</Title>
        {introductions.map((intro) => (
          <Introduction content={intro} key={intro.title} />
        ))}
      </PageContainer>
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
    introductions: allIntroductionsJson {
      edges {
        node {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
