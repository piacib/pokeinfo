import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorScreen from "../components/ErrorScreen/ErrorScreen";
import EffectivenessQuiz from "../components/EffectivenessQuiz/EffectivenessQuiz";
import { effectivenessPath, homePath, inBattlePath, quizPath } from "./routes";
import { InBattleDisplay } from "../App";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Home />,
      errorElement: <ErrorScreen />,
      children: [],
    },
    {
      path: effectivenessPath,
      element: <EffectivenessQuiz />,
      errorElement: <ErrorScreen />,
    },
    {
      path: inBattlePath,
      element: <InBattleDisplay />,
      errorElement: <ErrorScreen />,
    },
    {
      path: quizPath,
      element: <EffectivenessQuiz />,
      errorElement: <ErrorScreen />,
    },
    {
      path: homePath,
      element: <Home />,
      errorElement: <ErrorScreen />,
    },
  ],
  { basename: "/pokeinfo" },
);
export default router;
