import { createGlobalStyle } from "styled-components";
import { isDevelopmentMode } from "./developmentMode";
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
    /* font-size:${isDevelopmentMode ? "10px" : ""}; */
    background-color:#eef2f5;
  }
  body {
  overscroll-behavior:contain;
    background-color:#eef2f5;
    margin: 0;
  display: flex;
  min-height: 100vh;
}
#root {
  display: flex;
  flex-direction: column;
  width: 100%;
}
`;
