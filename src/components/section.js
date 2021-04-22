import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  overflow: hidden;
`;

const Section = ({ id, children }) => {
  return <Wrapper id={id}>{children}</Wrapper>;
};

export default Section;
