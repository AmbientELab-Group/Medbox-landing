import React from "react";
import styled from "styled-components";
import Section from "../components/section";
import Title from "../components/typography/title";
import Text from "../components/typography/text";
import Slider from "../components/slider";
import { StaticImage } from "gatsby-plugin-image";
import { useI18next } from "gatsby-plugin-react-i18next";
import HomeCircleImg from "../assets/home-circle.svg";
import OutlineLinkButton from "../components/outlineLinkButton";

const SectionLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;

const StyledTitle = styled(Title)`
  margin: 2rem 0;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: 4rem;
    flex: 0.4;
    align-self: start;
  }
`;

const StyledButton = styled(OutlineLinkButton)`
  align-self: start;
  margin: 2rem 0;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex: 0.6;
  }
`;

const StyledSlider = styled(Slider)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80%;
  }
`;

const StyledHomeCircle = styled(HomeCircleImg)`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 70%;
  height: auto;
  max-height: 100%;
  max-width: 100%;
`;

const DeviceSection = ({ id }) => {
  const { navigate, t } = useI18next();

  return (
    <Section id={id}>
      <SectionLayout>
        <TextWrapper>
          <StyledTitle>{t("sections.device.title")}</StyledTitle>
          <Text>{t("sections.device.description")}</Text>
          <StyledButton clickHandler={() => navigate("/device")} href="/device">
            {t("sections.device.button")}
          </StyledButton>
        </TextWrapper>
        <SliderWrapper>
          <StyledHomeCircle />
          <StyledSlider>
            <StaticImage
              src="../images/renders/carousel1.png"
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
            <StaticImage
              src="../images/renders/carousel2.png"
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
            <StaticImage
              src="../images/renders/carousel3.png"
              alt="Device image."
              placeholder="blurred"
              style={{
                height: "auto",
                width: "90%",
              }}
              imgStyle={{ objectFit: "contain" }}
            />
            <StaticImage
              src="../images/renders/carousel4.png"
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
            <StaticImage
              src="../images/renders/carousel5.png"
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
          </StyledSlider>
        </SliderWrapper>
      </SectionLayout>
    </Section>
  );
};

export default DeviceSection;
