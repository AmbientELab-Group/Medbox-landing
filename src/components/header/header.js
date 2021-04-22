import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../../assets/logo.svg";
import OutlineButton from "../outlineButton";
import NavLinks from "./navLinks";
import SideNav from "./sideNav";
import { useTranslation } from "react-i18next";

export const links = [
  {
    translation: "home",
    href: "#home",
  },
  {
    translation: "aboutUs",
    href: "#about",
  },
  {
    translation: "device",
    href: "#device",
  },
  {
    translation: "contact",
    href: "#contact",
  },
];

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${({ theme }) => theme.typography.fontMedium};
  width: 100%;
  padding: 1em 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavLinks = styled(NavLinks)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    flex: 1;
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

const StyledOutlineButton = styled(OutlineButton)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

const Header = () => {
  const [selectedLink, setSelectedLink] = useState(links[0]);
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const { t } = useTranslation();

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setTimeout(() => {
      window.location.href = link.href;
    }, 250);
  };

  const handleSidenavLinkClick = (link) => {
    setSelectedLink(link);
    setTimeout(() => {
      window.location.href = link.href;
      setIsSidenavOpen(false);
    }, 250);
  };

  return (
    <HeaderContainer>
      <Logo>
        <LogoImg />
        <span>Ambient</span>
      </Logo>
      <StyledNavLinks
        links={links}
        selectedLink={selectedLink}
        handleLinkClick={handleLinkClick}
        direction="row"
      />
      <StyledOutlineButton>{t("signIn")}</StyledOutlineButton>
      <SideNav
        links={links}
        selectedLink={selectedLink}
        handleLinkClick={handleSidenavLinkClick}
        isSidenavOpen={isSidenavOpen}
        setIsSidenavOpen={setIsSidenavOpen}
      />
    </HeaderContainer>
  );
};

export default Header;
