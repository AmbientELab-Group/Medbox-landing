import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  font-size: 0.75rem;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 0.8em;
  width: fit-content;
  padding: 0.75em 2.25em;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) =>
    `linear-gradient(0deg, ${theme.colors.accent} 0%, ${theme.colors.accentLight} 100%)`};
  white-space: nowrap;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontMedium};
  }
`;

export default Button;
