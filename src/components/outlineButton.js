import React from "react";

import styled from "styled-components";

const Wrapper = styled.a``;

const OutlineButton = ({ clickHandler }) => {
  return <Wrapper onClick={clickHandler}></Wrapper>;
};

export default OutlineButton;
