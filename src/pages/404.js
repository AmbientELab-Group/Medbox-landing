import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import GlobalStyle from "../styles/globalCss";
import styled from "styled-components";

// // styles
// const pageStyles = {
//   color: "#232129",
//   padding: "96px",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// };
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// };

// const paragraphStyles = {
//   marginBottom: 48,
// };
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// };

const TextStyled = styled.div`
  left: 20%;
  top: 20%;
  position: absolute;
  font: bold 80px Sans-Serif;
  color: pink;
  text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5,
    -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5,
    -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5,
    -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;

  @media (max-width: 768px) {
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }
`;

// markup
const NotFoundPage = () => {
  return (
    // <main style={pageStyles}>
    //   <title>Not found</title>
    //   <h1 style={headingStyles}>Page not found</h1>
    //   <p style={paragraphStyles}>
    //     Sorry{" "}
    //     <span role="img" aria-label="Pensive emoji">
    //       😔
    //     </span>{" "}
    //     we couldn’t find what you were looking for.
    //     <br />
    //     {process.env.NODE_ENV === "development" ? (
    //       <>
    //         <br />
    //         Try creating a page in <code style={codeStyles}>src/pages/</code>.
    //         <br />
    //       </>
    //     ) : null}
    //     <br />
    //     <Link to="/">Go home</Link>.
    //   </p>
    // </main>
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GlobalStyle />
      <StaticImage
        src="../images/404.jpg"
        alt="Device image."
        placeholder="tracedSVG"
        style={{ height: "100vh" }}
        imgStyle={{ objectFit: "cover" }}
        layout="fullWidth"
      />
      <TextStyled>Are you lost bbgirl???</TextStyled>
    </div>
  );
};

export default NotFoundPage;
