import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themeObjGenerator } from "./styles/theme";
import router from "./router/browserRouter";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle theme={themeObjGenerator("light")} />
    <ThemeProvider theme={themeObjGenerator("light")}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
