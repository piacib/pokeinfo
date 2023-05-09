import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import EffectivenessQuiz from "./components/EffectivenessQuiz/EffectivenessQuiz";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <EffectivenessQuiz />
  </React.StrictMode>,
);
