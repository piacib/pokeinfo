import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themeObjGenerator } from "./theme";
import router from "./router/browserRouter";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles theme={themeObjGenerator("light")} />
    <ThemeProvider theme={themeObjGenerator("light")}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
