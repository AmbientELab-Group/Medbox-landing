import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../../assets/logo.svg";
import OutlineLinkButton from "../outlineLinkButton";
import NavLinks from "./navLinks";
import SideNav from "./sideNav";
import { useI18next } from "gatsby-plugin-react-i18next";
import LanguagePicker from "./languagePicker";

export const links = [
  {
    translation: "home",
    href: "/",
  },
  {
    translation: "aboutUs",
    href: "/about/",
  },
  {
    translation: "device",
    href: "/device/",
  },
  {
    translation: "contact",
    href: "/contact/",
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
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colors.background};
  z-index: 100;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    padding: 0 4rem 3rem 3.5rem;
  }
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
    font-size: 2rem;
  }
`;

const StyledOutlineButton = styled(OutlineLinkButton)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    font-size: 1.4rem;
  }
`;

const LanguageBar = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding: 1rem 0;
  }
`;

const Header = () => {
  const { t, originalPath, navigate } = useI18next();
  const [selectedLink, setSelectedLink] = useState(() =>
    links.find((link) => link.href === originalPath)
  );
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setTimeout(() => {
      navigate(link.href);
    }, 250);
  };

  const handleSidenavLinkClick = (link) => {
    setSelectedLink(link);
    setTimeout(() => {
      navigate(link.href);
      setIsSidenavOpen(false);
    }, 250);
  };

  return (
    <HeaderContainer>
      <LanguageBar>
        <LanguagePicker />
      </LanguageBar>
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
