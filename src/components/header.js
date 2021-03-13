import React from "react";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";

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
`;

const Header = () => {
  return (
    <HeaderContainer>
      <button onClick={() => scrollTo("#home")}>Home</button>
      <button onClick={() => scrollTo("#about")}>About</button>
      <button onClick={() => scrollTo("#project")}>Project</button>
    </HeaderContainer>
  );
};

export default Header;
