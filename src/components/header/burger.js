import React from "react";
import styled from "styled-components";

const BurgerLine = styled.div`
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  background: ${({ theme }) => theme.colors.accent};
  width: 1.5rem;
  height: 0.25rem;
`;

const BurgerContainer = styled.div`
  position: fixed;
  top: 1em;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  padding: 0.75rem;
  border-radius: 50%;
  box-shadow: ${({ $open }) =>
    $open ? "transparent" : "0 4px 8px 0 rgba(0, 0, 0, 0.2)"};
  background: ${({ $open, theme }) =>
    $open ? "transparent" : theme.colors.white};
  z-index: 1000;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.3s linear;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
  & ${BurgerLine} {
    background: ${({ theme, $open }) =>
      $open ? theme.primaryDark : theme.primaryLight};

    &:first-child {
      transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ $open }) => ($open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ $open }) => ($open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ isSidenavOpen, clickHandler }) => {
  return (
    <BurgerContainer $open={isSidenavOpen} onClick={() => clickHandler()}>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </BurgerContainer>
  );
};

export default Burger;
