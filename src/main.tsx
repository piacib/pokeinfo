import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themeObjGenerator } from "./styles/theme";
import router from "./router/browserRouter";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
