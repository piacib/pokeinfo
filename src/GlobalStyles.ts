import { createGlobalStyle } from "styled-components";
import { isDevelopmentMode } from "./developmentMode";
export const GlobalStyles = createGlobalStyle`
html{
    font-size:${isDevelopmentMode ? "10px" : ""};
    background-color:#eef2f5;
    background-color: ${(props) => props.theme.backgroundColor};
}
body {
    background-color:#eef2f5;
}`;
