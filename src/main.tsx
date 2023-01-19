import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { devRoomId, isDevelopmentMode } from "./developmentMode";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App roomId={devRoomId} />,
  },
  {path:":id",
  element:<App roomId={devRoomId} />
}
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    {/* <FontStyles /> */}
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
