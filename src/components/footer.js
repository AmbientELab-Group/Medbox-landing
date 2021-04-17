import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import LogoImg from "../assets/logo.svg";
import { links } from "../components/header/header";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fontSecondary};
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    text-align: center;
    li {
      flex: 1;
      padding: 2rem 0.5rem;
      cursor: pointer;
      white-space: nowrap;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    padding: 4rem;
    li {
      padding: 2rem 3rem !important;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: ${({ theme }) => theme.typography.fontLarge};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.fontSecondary};
  }
`;

const Spacer = styled.span`
  flex: 1 1 auto;
`;

const handleLinkClick = (link) => {
  window.location.href = link.href;
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <Logo>
        <LogoImg />
        <span>Ambient</span>
      </Logo>
      <Spacer />
      <ul>
        {links?.map((link, i) => (
          <li key={i} onClick={() => handleLinkClick(link)}>
            {t(`links.${link.translation}`)}
          </li>
        ))}
      </ul>
      <Spacer />
    </FooterWrapper>
  );
};

export default Footer;
