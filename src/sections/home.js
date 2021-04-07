import React from "react";
import styled from "styled-components";
import Section from "../components/section";
import { useTranslation } from "react-i18next";
import Title from "../components/typography/title";
import ColorAccent from "../components/typography/colorAccent";
import Text from "../components/typography/text";
import LinkButton from "../components/linkButton";
import DownIcon from "../components/downIcon";

const SectionLayout = styled.div`
  height: 100%;
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 9fr 1fr;
  padding-left: 1rem;

  grid-template-areas:
    "title title"
    "description image"
    "more more";

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 7rem;
    padding-left: 4rem;
    grid-template-areas:
      "title image"
      "description image"
      "more more";
  }
`;

const TitleWrapper = styled.div`
  grid-area: title;
  margin: 3rem 0;
  padding-right: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-right: 4rem;
  }
`;

const DescriptionWrapper = styled.div`
  grid-area: description;
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: min-content;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 60%;
  }
`;

const ImageWrapper = styled.div`
  grid-area: image;
  background-color: #ddd;
`;

const ButtonWrapper = styled.div`
  height: fit-content;
  margin: 2rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 5rem 0;
  }
`;

const IconWrapper = styled.div`
  grid-area: more;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  padding-right: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-right: 4rem;
  }
`;

const handleIconClick = () => {
  setTimeout(() => {
    window.location.href = "#about";
  }, 150);
};

const HomeSection = ({ id }) => {
  const { t } = useTranslation();

  return (
    <Section id={id}>
      <SectionLayout>
        <TitleWrapper>
          <Title>
            {t("sections.home.title")[0]}
            <ColorAccent>{t("sections.home.title")[1]}</ColorAccent>
          </Title>
        </TitleWrapper>
        <ImageWrapper>Image placeholder</ImageWrapper>
        <DescriptionWrapper>
          <Text>{t("sections.home.description")}</Text>
          <ButtonWrapper>
            <LinkButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {t("sections.home.button")}
            </LinkButton>
          </ButtonWrapper>
        </DescriptionWrapper>
        <IconWrapper>
          <DownIcon
            onClick={handleIconClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </IconWrapper>
      </SectionLayout>
    </Section>
  );
};

export default HomeSection;
