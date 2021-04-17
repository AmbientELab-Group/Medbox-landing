import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../../assets/logo.svg";
import NavLinks from "./navLinks";
import SideNav from "./sideNav";

export const links = [
  {
    translation: "home",
    href: "#home",
  },
  {
    translation: "aboutUs",
    href: "#about",
  },
  //   {
  //     translation: "project",
  //     href: "#project",
  //   },
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

const NavLinksContainer = styled.div`
  ul,
  p {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1.25em 4rem;

    ul,
    p {
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
  const [selectedLink, setSelectedLink] = useState(links[0]);
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

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
      <NavLinksContainer>
        <NavLinks
          links={links}
          selectedLink={selectedLink}
          handleLinkClick={handleLinkClick}
          direction="row"
        />
      </NavLinksContainer>
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
