import React, { useState } from "react";
import styled from "styled-components";

import LogoImg from "../../assets/logo.svg";
import NavLinks from "./navLinks";
import SideNav from "./sideNav";
import Burger from "./burger";

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
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <LogoImg />
        <span>Ambient</span>
      </Logo>
      <NavLinksContainer>
        <NavLinks direction="row" />
      </NavLinksContainer>
      <Burger isSidenavOpen={isSidenavOpen} clickHandler={toggleSidenav} />
      <SideNav
        isSidenavOpen={isSidenavOpen}
        outsideClickHandler={() => setIsSidenavOpen(false)}
      />
    </HeaderContainer>
  );
};

export default Header;
