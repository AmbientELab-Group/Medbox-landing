import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.a)`
  border: ${({ theme, $thick }) =>
    `solid ${theme.colors.accent} ${
      $thick ? theme.borders.regular : theme.borders.small
    }`};

  font-size: 0.75rem;
  border-radius: 0.8em;
  width: fit-content;
  padding: 0.3em 1.3em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fontPrimary};
  cursor: pointer;
  white-space: nowrap;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.625rem;
  }
`;

const OutlineButton = ({ children, className, clickHandler, thick }) => {
  return (
    <Wrapper
      className={className}
      onClick={clickHandler}
      $thick={thick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </Wrapper>
  );
};

export default OutlineButton;
