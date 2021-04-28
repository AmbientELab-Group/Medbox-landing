import React from "react";
import Layout from "../components/layout";
import { useTranslation } from "gatsby-plugin-react-i18next";
import styled from "styled-components";
import Title from "../components/typography/title";
import Text from "../components/typography/text";
import AddressIcon from "../assets/addressIcon.svg";
import MailIcon from "../assets/mailIcon.svg";
import WebsiteIcon from "../assets/websiteIcon.svg";
import { graphql } from "gatsby";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  flex-direction: column;

  #embedded-map {
    border: none;
    width: 100%;
    height: 100%;
    flex: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 4rem 4rem;
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & > * {
    padding-bottom: 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-bottom: 2rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-right: 3rem;
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;

  svg {
    height: 2em;
    width: 2em;
    margin-right: 1em;
    fill: ${({ theme }) => theme.colors.accent};
  }

  span {
    color: ${({ theme }) => theme.colors.fontPrimary};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fontPrimary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1rem;
  }
`;

const ContactPage = () => {
  const { t } = useTranslation("contact");

  return (
    <Layout>
      <PageContainer>
        <TextContainer>
          <Title>{t("title")}</Title>
          <Text>{t("description")}</Text>
          <Contact>
            <AddressIcon />
            <span>Łódź ul. Bohdana Stefanowskiego 18/22</span>
          </Contact>
          <Contact>
            <MailIcon />
            <a href="mailto:contact@ubicomp.pl">contact@ubicomp.pl</a>
          </Contact>
          <Contact>
            <WebsiteIcon />
            <a href="http://www.ubicomp.pl">www.ubicomp.pl</a>
          </Contact>
        </TextContainer>
        <iframe
          title="Google map"
          loading="lazy"
          allowFullScreen
          id="embedded-map"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw1ZTudk0GkcRrE85kbbpmYM&key=AIzaSyCAEJySx5tfT7xFw9FVhMouXHLrFvTY8S8"
        ></iframe>
      </PageContainer>
    </Layout>
  );
};

export default ContactPage;

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
