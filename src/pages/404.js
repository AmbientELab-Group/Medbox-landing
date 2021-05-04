import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { graphql, navigate } from "gatsby";
import LinkButton from "../components/linkButton";
import OutlineLinkButton from "../components/outlineLinkButton";
import theme from "../styles/theme";
import { useTranslation } from "react-i18next";
import Title from "../components/typography/title";
import Text from "../components/typography/text";
import GlobalStyle from "../styles/globalCss";
import CircleDecor from "../assets/contact-circle-bottom-right.svg";
import LeftCircleDecor from "../assets/contact-circle-top-left.svg";
import SEO from "../components/SEO";

const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  padding: 2rem 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 3rem 0;
  width: 100%;

  & > * {
    margin-right: 1rem;
  }
`;

const StyledTitle = styled(Title)`
  margin: 1em 0;
  width: 100%;
`;

const StyledText = styled(Text)`
  width: 100%;
`;

const Circle = styled(CircleDecor)`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: auto;
  height: 50%;
  max-height: 100%;
  max-width: 70%;
  z-index: -10;
  opacity: 0.3;
`;

const LeftCircle = styled(LeftCircleDecor)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: auto;
  height: 50%;
  max-height: 100%;
  max-width: 70%;
  z-index: -10;
  opacity: 0.3;
`;

const NotFoundPage = () => {
  const { t } = useTranslation("404");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO />
      <Circle />
      <LeftCircle />
      <PageWrapper>
        <Content>
          <StyledTitle>{t("title")}</StyledTitle>
          <StyledText>{t("description")}</StyledText>
          <ButtonContainer>
            <LinkButton clickHandler={() => navigate(-1)}>
              {t("back")}
            </LinkButton>
            <OutlineLinkButton href="/">{t("home")}</OutlineLinkButton>
          </ButtonContainer>
        </Content>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default NotFoundPage;

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
