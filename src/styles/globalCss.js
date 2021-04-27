import { createGlobalStyle } from "styled-components";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    height: 100%;
  }
  body {
    font-family: 'Montserrat';
    height: 100%;
  }

  #___gatsby, #gatsby-focus-wrapper{
    height: 100%;
  }
`;

export default GlobalStyle;
