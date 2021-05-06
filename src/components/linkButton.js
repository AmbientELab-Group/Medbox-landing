import styled, { css } from "styled-components";
import LinkButtonBase from "./linkButtonBase";

const PrimaryLinkButton = styled(LinkButtonBase)`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 0.8em;
  width: fit-content;
  height: fit-content;
  padding: calc(0.3em + 3px) calc(1.3em + 3px);
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) =>
    `linear-gradient(0deg, ${theme.colors.accent} 0%, ${theme.colors.accentLight} 100%)`};
  white-space: nowrap;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      background: ${({ theme }) => theme.colors.disabled};
      pointer-events: none;
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontMedium};
  }
`;

export default PrimaryLinkButton;
