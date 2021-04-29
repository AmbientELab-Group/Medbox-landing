import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../../assets/logo.svg";
import OutlineLinkButton from "../outlineLinkButton";
import NavLinks from "./navLinks";
import SideNav from "./sideNav";
import { useTranslation } from "gatsby-plugin-react-i18next";

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
  font-size: 1rem;

  span {
    font-size: 1em;
    color: ${({ theme }) => theme.colors.fontSecondary};
  }

  svg {
    width: 2em;
    height: 2em;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      width: 1.5em;
      height: 1.5em;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2.5rem;
  }
`;

const StyledOutlineButton = styled(OutlineLinkButton)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    margin-right: 0.5rem;
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
      <StyledOutlineButton href={process.env.GATSBY_WEBAPP_URL}>
        {t("signIn")}
      </StyledOutlineButton>
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
