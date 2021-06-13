import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import { useTranslation } from "gatsby-plugin-react-i18next";
import SEO from "../components/SEO";
import Title from "../components/typography/title";
import Text from "../components/typography/text";
import Tabs from "../components/tabs/tabs";

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

const StyledText = styled(Text)`
  margin: 1rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 2rem 0;
    column-count: 2;
    column-gap: 4rem;
    text-align: justify;
  }
`;

const StyledTabs = styled(Tabs)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 6rem;
  }
`;

const DevicePage = ({ data }) => {
  const { t } = useTranslation("device");
  const tabs = data.features.edges.map((edge) => ({ ...edge.node }));

  return (
    <Layout>
      <SEO />
      <PageContainer>
        <Title>{t("title")}</Title>
        <StyledText>{t("introduction")}</StyledText>
        <StyledTabs tabs={tabs} />
      </PageContainer>
    </Layout>
  );
};

export default DevicePage;

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
    features: allFeaturesJson {
      edges {
        node {
          title
          photo {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          features {
            title
            description
          }
        }
      }
    }
  }
`;
