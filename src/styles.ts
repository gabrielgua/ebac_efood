import { createGlobalStyle } from "styled-components";

export const colors = {
  red: "#E66767",
  beige: "#FFEBD9",
  lightBeige: "#FFE8F1",
  yellow: "#FFB930",
};

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.lightBeige};
  }

  .container {
    width: min(1024px, 100% - 2rem);
    margin-inline: auto;
  }
`;

export default GlobalStyles;
