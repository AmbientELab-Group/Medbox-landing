import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 4rem 0;
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-right: 2rem;
  }
`;

const ImageContainer = styled.div`
  width: 200px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 250px;
    margin-left: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 350px;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  margin-bottom: 2rem;
  font-size: 1.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const IntroductionDescription = styled.p`
  font-size: 0.8rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.625rem;
  }
`;

const Introduction = ({ content }) => {
  const { t } = useTranslation("about");
  return (
    <IntroductionContainer>
      <TextContainer>
        <Title>{t(content.title)}</Title>
        <IntroductionDescription>
          {t(content.description)}
        </IntroductionDescription>
      </TextContainer>
      <ImageContainer>
        <GatsbyImage
          image={getImage(content.image)}
          alt={t("renderAlt")}
          imgStyle={{ objectFit: "contain" }}
        />
      </ImageContainer>
    </IntroductionContainer>
  );
};

export default Introduction;
