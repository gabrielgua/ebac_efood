import { createGlobalStyle } from "styled-components";

export const colors = {
  red: "#E66767",
  beige: "#FFEBD9",
  lightBeige: "#FFF8F1",
  yellow: "#FFB930",
  white: "#FFFFFF",
};

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    list-style: none;
  }

  body {
    background-color: ${colors.lightBeige};
  }

  .container {
    width: min(1024px, 100% - 5rem);
    margin-inline: auto;
  }
`;

export default GlobalStyles;
