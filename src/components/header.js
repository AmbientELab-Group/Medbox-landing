import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import useLanguage from "../hooks/useLanguage";

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 8px;
  background: #f0f0f0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  color: black;

  a {
  }
`;

const Header = () => {
  const [language] = useLanguage();

  return (
    <HeaderContainer>
      {/* {Object.entries(data.translationsJson.links).map(([name, text]) => (
        <a key={name} href={`#${name}`}>
          {text}
        </a>
      ))} */}
    </HeaderContainer>
  );
};

export default Header;
