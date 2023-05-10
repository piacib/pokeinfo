import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorScreen from "../components/ErrorScreen/ErrorScreen";
import EffectivenessQuiz from "../components/EffectivenessQuiz/EffectivenessQuiz";
import { paths } from "./routes";
import { InBattleDisplay } from "../components/InBattleDisplay/InBattleDisplay";
import SearchPage from "../pages/SearchPage/SearchPage";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Home />,
      errorElement: <ErrorScreen />,
      children: [],
    },
    {
      path: paths.effectiveness,
      element: <EffectivenessQuiz />,
      errorElement: <ErrorScreen />,
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
      path: "/test",
      element: <SearchPage />,
      errorElement: <ErrorScreen />,
    },
    {
      path: paths.quiz,
      element: <EffectivenessQuiz />,
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
