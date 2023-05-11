import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorScreen from "../components/ErrorScreen/ErrorScreen";
import EffectivenessQuiz from "../components/EffectivenessQuiz/EffectivenessQuiz";
import { paths } from "./routes";
import { InBattleDisplay } from "../components/InBattleDisplay/InBattleDisplay";
import SearchPage from "../pages/SearchPage/SearchPage";
import EffectivenessQuizPage from "../pages/EffectivenessQuizPage/EffectivenessQuizPage";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Home />,
      errorElement: <ErrorScreen />,
      children: [],
    },
    {
      path: paths.inBattle,
      element: <InBattleDisplay />,
      errorElement: <ErrorScreen />,
    },
    {
      path: paths.search,
      element: <SearchPage />,
      errorElement: <ErrorScreen />,
    },
    {
      path: paths.quiz,
      element: <EffectivenessQuizPage />,
      errorElement: <ErrorScreen />,
    },
    {
      path: paths.home,
      element: <Home />,
      errorElement: <ErrorScreen />,
    },
  ],
  { basename: "/pokeinfo" },
);
export default router;
