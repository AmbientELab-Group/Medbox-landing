import styled, { css } from "styled-components";
import LinkButtonBase from "./linkButtonBase";

const OutlineLinkButton = styled(LinkButtonBase)`
  display: inline-block;
  border: ${({ theme, thick }) =>
    `solid ${theme.colors.accent} ${
      thick ? theme.borders.regular : theme.borders.small
    }`};
  font-size: 0.75rem;
  border-radius: 0.8em;
  width: fit-content;
  height: fit-content;
  padding: 0.3em 1.3em;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.fontPrimary};
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      border-color: ${({ theme }) => theme.colors.disabled};
      pointer-events: none;
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }
`;

export default OutlineLinkButton;
