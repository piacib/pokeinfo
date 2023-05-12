import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { themeObjGenerator } from "./styles/theme";
import router from "./router/browserRouter";
import OptionsMenu from "./components/OptionsMenu/OptionsMenu";
import { Header } from "./App.style";

const App = () => (
  <>
    <GlobalStyle theme={themeObjGenerator("light")} />
    <ThemeProvider theme={themeObjGenerator("light")}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </>
);

export default App;
