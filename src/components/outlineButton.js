import React from "react";

import styled from "styled-components";

const Wrapper = styled.a`
  border: solid ${({ theme }) => theme.colors.accent} ${(props) => props.thick ? props.theme.borders.regular : props.theme.borders.small};
  font-size: ${({ theme }) => theme.typography.fontLarge};
  border-radius: 0.8em;
  width: fit-content;
  padding: 0.3em 1.3em;
  font-weight: bold;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  /* &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};

    transition: ease-in-out 0.3s;
  } */
`;

const OutlineButton = ({ children, clickHandler, thick }) => {
  return <Wrapper onClick={clickHandler} thick>{children}</Wrapper>;
};

export default OutlineButton;
