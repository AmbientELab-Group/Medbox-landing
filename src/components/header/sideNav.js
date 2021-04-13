import React from "react";
import styled, { keyframes, css } from "styled-components";
import Burger from "./burger";
import NavLinks from "./navLinks";
import ClickAway from "./clickAway";

const slideIn = keyframes`
  from {
  transform: translateX(100%);
  }
  to {
  transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
  transform: translateX(0);
  }
  to {
  transform: translateX(100%);
  }
`;

const NavContainer = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 6rem 2rem;
  ${({ $isVisible }) =>
    $isVisible
      ? css`
          visibility: visible;
          opacity: 1;
          animation: ${slideIn} 0.3s ease-in-out;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          animation: ${slideOut} 0.3s ease-in-out;
        `};
  transition: all 0.3s ease-in-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const SideNav = ({ isSidenavOpen, setIsSidenavOpen }) => {
  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };
  return (
    <div>
      <Burger isSidenavOpen={isSidenavOpen} clickHandler={toggleSidenav} />
      <NavContainer $isVisible={isSidenavOpen}>
        <NavLinks direction="column" onLinkClick={toggleSidenav} />
      </NavContainer>
      {isSidenavOpen ? (
        <ClickAway onClick={() => setIsSidenavOpen(false)} />
      ) : null}
    </div>
  );
};

export default SideNav;
