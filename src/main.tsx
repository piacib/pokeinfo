import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { devRoomId, isDevelopmentMode } from "./developmentMode";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./components/ErrorScreens/RouteError";
import { TeamDisplay } from "./components/TeamDisplay/TeamDisplay";
import { TypeWriterContainer } from "./TypeWriterContainer.style";
async function loader() {}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pokeinfo",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":battleRoomId",
        // loader: () => {},
        element: <App />,
      },
    ],
  },
  // { path: "/pokeinfo/:battleRoomId", element: <App /> },
  { path: "/pokeinfo/test", element: <h1>Testing testing</h1> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    {/* <FontStyles /> */}
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
