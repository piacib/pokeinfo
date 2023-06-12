import { createHashRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorScreen from "../components/ErrorScreen/ErrorScreen";
import { paths } from "./routes";
import SearchPage from "../pages/SearchPage/SearchPage";
import EffectivenessQuizPage from "../pages/EffectivenessQuizPage/EffectivenessQuizPage";
import HomePage from "../pages/HomePage/HomePage";
import InBattlePage from "../pages/InBattlePage/InBattlePage";
import ExtensionPage from "../pages/ExtensionPage/ExtensionPage";
import PokemonSearchPage from "../pages/PokemonSearchPage/PokemonSearchPage";

const router = createHashRouter(
  [
    {
      path: "",
      element: <HomePage />,
      errorElement: <ErrorScreen />,
      children: [],
    },
    {
      path: paths.inBattle,
      element: <InBattlePage />,
      errorElement: <ErrorScreen />,
    },
    {
      path: paths.extension,
      element: <ExtensionPage />,
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
    {
      path: paths.pokemonsearch,
      element: <PokemonSearchPage />,
      errorElement: <ErrorScreen />,
    },
  ],
  { basename: "/" },
);
export default router;
