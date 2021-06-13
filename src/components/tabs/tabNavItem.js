import React from "react";
import { motion } from "framer-motion";
import styled, { css, useTheme } from "styled-components";

const TabNavItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0 0.5em;
  cursor: pointer;

  span {
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const TabNavItemText = styled.p`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.fontPrimary};
  height: fit-content;
  white-space: nowrap;
  font-size: 1rem;

  ${({ $isActive }) =>
    $isActive &&
    css`
      font-weight: 600;
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.875rem;
  }
`;

const TabNavItem = ({ children, isActive, onClick }) => {
  const theme = useTheme();

  return (
    <TabNavItemContainer>
      <TabNavItemText onClick={onClick} $isActive={isActive}>
        {children}
      </TabNavItemText>
      {isActive && (
        <motion.span
          layoutId="tab-underline"
          initial={false}
          transition={theme.animations.spring}
        />
      )}
    </TabNavItemContainer>
  );
};

export default TabNavItem;
