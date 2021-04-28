import React from "react";
import styled from "styled-components";
import Section from "../components/section";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Title from "../components/typography/title";
import ColorAccent from "../components/typography/colorAccent";
import Text from "../components/typography/text";
import PrimaryLinkButton from "../components/linkButton";
import DownIcon from "../components/downIcon";
import { StaticImage } from "gatsby-plugin-image";
import HomeCircleImg from "../assets/home-circle.svg";

const SectionLayout = styled.div`
  height: calc(100vh - 6rem);
  display: grid;
  grid-template-columns: 5fr 5fr;
  grid-template-rows: auto 6fr 4fr;
  padding-left: 1rem;

  grid-template-areas:
    "title title"
    "description image"
    "more more";

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-rows: auto 9fr 1fr;
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
  position: relative;
`;

const StyledHomeCircle = styled(HomeCircleImg)`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 80%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
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
  align-items: flex-start;
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
        <ImageWrapper>
          <StyledHomeCircle />
          <StaticImage
            src="../images/renders/Home.png"
            alt="Device image."
            placeholder="blurred"
            style={{
              height: "auto",
              width: "90%",
              maxHeight: "100%",
              maxWidth: "100%",
            }}
            imgStyle={{ objectFit: "contain" }}
          />
        </ImageWrapper>
        <DescriptionWrapper>
          <Text>{t("sections.home.description")}</Text>
          <ButtonWrapper>
            <PrimaryLinkButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={process.env.GATSBY_WEBAPP_URL}
            >
              {t("sections.home.button")}
            </PrimaryLinkButton>
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
