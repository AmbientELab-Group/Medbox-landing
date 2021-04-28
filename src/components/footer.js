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
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
  flex: 2;
  max-width: 1100px;

   li {
    padding: 0.5rem;
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.fontSecondary};
  font-weight: 600;
  font-size: 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.25rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;

  svg {
    width: 2em;
    height: 2em;
  }

  span {
    font-size: 1em;
    color: ${({ theme }) => theme.colors.fontSecondary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    span {
      font-size: 1.25em;
    }

    svg {
      width: 2.5em;
      height: 2.5em;
    }
  }
`;

const Credits = styled.p`
  color: ${({ theme }) => theme.colors.fontSecondary};
  font-size: 0.625rem;

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 0.875rem;
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <Logo>
        <LogoImg />
        <span>Ambient</span>
      </Logo>
      <FooterNavList>
        {links?.map((link, i) => (
          <li key={i}>
            <FooterLink href={link.href}>
              {t(`links.${link.translation}`)}
            </FooterLink>
          </li>
        ))}
      </FooterNavList>
      <Credits>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from{" "}
        <a href="http://www.flaticon.com/">www.flaticon.com</a>.
      </Credits>
    </FooterWrapper>
  );
};

export default Footer;
