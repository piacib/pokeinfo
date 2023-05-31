import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { theme } from "./styles/theme";
import router from "./router/hashRouter";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </>
);

export default App;
