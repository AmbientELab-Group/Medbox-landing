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
  padding: 1rem 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    padding: 2rem 4rem;
  }
`;

const FooterNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
  li {
    flex: 1;
    padding: 0.5rem;
    white-space: nowrap;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    li {
      padding: 0rem 3rem !important;
    }
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.fontSecondary};
  font-weight: bold;
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

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <Logo>
        <LogoImg />
        <span>Ambient</span>
      </Logo>
      <Spacer />
      <FooterNavList>
        {links?.map((link, i) => (
          <li key={i}>
            <FooterLink href={link.href}>
              {t(`links.${link.translation}`)}
            </FooterLink>
          </li>
        ))}
      </FooterNavList>
      <Spacer />
    </FooterWrapper>
  );
};

export default Footer;
