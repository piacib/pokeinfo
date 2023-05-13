import React, { Children } from "react";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { themeObjGenerator } from "./styles/theme";
import router from "./router/hashRouter";
import OptionsMenu from "./components/OptionsMenu/OptionsMenu";
import { Header } from "./App.style";

const App = () => (
  <>
    <ThemeProvider theme={themeObjGenerator("light")}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </>
);

export default App;
