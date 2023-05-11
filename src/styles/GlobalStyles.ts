import { createGlobalStyle } from "styled-components";
import { isDevelopmentMode } from "../developmentMode";
export const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  /* color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424; */

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
html{
    font-size:${isDevelopmentMode ? "10px" : ""};
    background-color: ${(props) => props.theme.backgroundColor};
  }
  body {
  overscroll-behavior:contain;
    background-color: ${(props) => props.theme.backgroundColor};
    margin: 0;
  display: flex;
  min-height: 100vh;
}
#root {
  display: flex;
  flex-direction: column;
  width: 100%;
}
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
h1 {
  font-size: 3.2em;
  line-height: 1.1;
  color: ${(props) => props.theme.fontColor};
}
form,input {
  color: ${(props) => props.theme.fontColor};

}
`;
