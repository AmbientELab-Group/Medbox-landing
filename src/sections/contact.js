import React from "react";
import styled from "styled-components";
import Section from "../components/section";
import CircleTopLeftImg from "../assets/contact-circle-top-left.svg";
import CircleBottomRightImg from "../assets/contact-circle-bottom-right.svg";
import Title from "../components/typography/title";
import ColorAccent from "../components/typography/colorAccent";
import LinkButton from "../components/linkButton";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";

const SectionLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25%;
  text-align: center;
  flex-direction: column;
  position: relative;
  height: calc(100vh - 6rem);
`;

const ButtonWrapper = styled.div`
  height: fit-content;
  margin: 2rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 5rem 0;
  }
`;

const StyledCircleTopLeft = styled(CircleTopLeftImg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  height: auto;
`;

const StyledCircleBottomRight = styled(CircleBottomRightImg)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25%;
  height: auto;
`;

const ContactSection = ({ id }) => {
  const { t } = useTranslation();

  return (
    <Section id={id}>
      <SectionLayout>
        <StyledCircleTopLeft />
        <Title>
          {t("sections.contact.title")[0]}
          <ColorAccent>{t("sections.contact.title")[1]}</ColorAccent>
          {t("sections.contact.title")[2]}
        </Title>
        <ButtonWrapper>
          <LinkButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            clickHandler={() => navigate("/contact")}
          >
            {t("sections.contact.buttons.getInTouch")}
          </LinkButton>
        </ButtonWrapper>
        <StyledCircleBottomRight />
      </SectionLayout>
    </Section>
  );
};

export default ContactSection;
