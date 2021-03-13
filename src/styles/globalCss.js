import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
