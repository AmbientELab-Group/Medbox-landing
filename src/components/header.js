import React from "react";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import LogoImg from "../assets/logo.svg";
import OutlineButton from "./outlineButton";
import NavLinks from "./navLinks";

const HeaderContainer = styled.div`
  font-size: ${({ theme }) => theme.typography.fontMedium};
  width: 100%;
  padding: 1.25em;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul,
  a {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ul,
    a {
      display: flex;
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

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <Logo>
        <LogoImg />
        <span>Ambient</span>
      </Logo>
      <NavLinks></NavLinks>
      <OutlineButton>{t("signIn")}</OutlineButton>
    </HeaderContainer>
  );
};

export default Header;
