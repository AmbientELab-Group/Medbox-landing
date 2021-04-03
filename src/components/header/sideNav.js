import React, { useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import NavLinks from "./navLinks";

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
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 6rem 2rem;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${slideIn} 0.3s ease-in-out
        `
      : css`
          ${slideOut} 0.3s ease-in-out
        `};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const SideNav = ({ isSidenavOpen, outsideClickHandler }) => {
  const handleOutsideClick = (e) => {
    const clickedOutsideBurger = !e.target.className
      .toLowerCase()
      .includes("burger");
    if (isSidenavOpen && clickedOutsideBurger) {
      outsideClickHandler();
    }
  };
  const ref = useRef();
  useOnClickOutside(ref, (e) => handleOutsideClick(e));
  return (
    <NavContainer ref={ref} isVisible={isSidenavOpen}>
      <NavLinks direction="column" onLinkClick={outsideClickHandler} />
    </NavContainer>
  );
};

export default SideNav;
