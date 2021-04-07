import React from "react";
import ArrowIcon from "../assets/down-arrow.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

const IconWrapper = styled(motion.div)`
  background: ${({ theme }) =>
    `linear-gradient(0deg, ${theme.colors.accent} 0%, ${theme.colors.accentLight} 100%)`};
  border-radius: 50%;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  font-size: 0.4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 0.7rem;
  }
`;

const StyledIcon = styled(ArrowIcon)`
  width: 3em;
  height: 3em;
  margin: 1.5em 1.5em 1em 1.5em;
  fill: ${({ theme }) => theme.colors.white};
`;

const DownIcon = (props) => {
  return (
    <IconWrapper {...props}>
      <StyledIcon />
    </IconWrapper>
  );
};

export default DownIcon;
