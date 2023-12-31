import { css } from "@emotion/react";

export const GlobalStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
  }
`;
