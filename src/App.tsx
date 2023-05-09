import React, { Suspense, useEffect, useRef, useState } from "react";
import Home from "./components/Home/Home";
import ModeToggle from "./components/ModeToggle/ModeToggle";
import OptionsMenu from "./components/OptionsMenu/OptionsMenu";
import UrlSearch from "./components/UrlSearch/UrlSearch";
import { TypeWriterContainer } from "./TypeWriterContainer.style";
import {
  AppDisplay,
  Button,
  Header,
  ModeToggleContainer,
  PokeInfo,
  Spacer,
} from "./App.style";
import { ThemeProvider } from "styled-components";
import { themeObjGenerator } from "./theme";
import { GlobalStyles } from "./GlobalStyles";
import { useLightMode } from "./hooks/useLightMode";
import PokeTracker from "./components/PokeTracker/PokeTracker";
import { LoadingScreen } from "./components/LoadingScreen";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { displayHandler } from "./functions";
import EffectivenessQuiz from "./components/EffectivenessQuiz/EffectivenessQuiz";
import { devRoomId } from "./developmentMode";
import { Link, useParams } from "react-router-dom";
import { examplePath, inBattlePath, quizPath } from "./router/routes";
const PokeSearch = React.lazy(
  () => import("./components/PokeSearch/PokeSearch"),
);
const TeamDisplay = React.lazy(
  () => import("./components/TeamDisplay/TeamDisplay"),
);
const App: React.FC = () => {
  const [teamToDisplay, setTeamToDisplay] = useState<"p1" | "p2">("p2");
  const [battleRoomId, setBattleRoomId] = useState("");
  const [activePkmTrack, setActivePkmTrack] = useState(true);
  // previousBattleRoomId -> tracks previous battle room so
  // ws can clear info when new url is searched
  const previousBattleRoomId = useRef("");
  const params = new URLSearchParams(window.location.search);
  console.log(params.get("userTeam"));

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("handleSubmit", previousBattleRoomId.current, battleRoomId);
    previousBattleRoomId.current = battleRoomId;
    const target = e.target as typeof e.target & {
      url: { value: string };
    };
    const battleIndex = target.url.value.indexOf("battle");
    if (battleIndex === -1) {
      return;
    }
    const battleRoomIdTemp = target.url.value.slice(battleIndex);
    setBattleRoomId(battleRoomIdTemp);
  };
  const swapTeams = () => {
    if (teamToDisplay === "p1") {
      setTeamToDisplay("p2");
    } else {
      setTeamToDisplay("p1");
    }
  };

  return (
    <>
      <div className="h1">Hello</div>
      {/* {battleRoomId ? (
          <>
            {isInExtension && <Spacer />}
            <Header>
              <>
                <OptionsMenu>
                  {isInExtension && <Spacer />}
                  <ModeToggleContainer>
                    <h3>{lightMode === "light" ? "Dark" : "Light"} Mode:</h3>
                    <ModeToggle
                      togClass={lightMode}
                      setTogClass={setLightMode}
                    />
                  </ModeToggleContainer>
                  <PokeTracker
                    toggle={activePkmTrack}
                    setToggle={setActivePkmTrack}
                  />
                  {!isInExtension && <UrlSearch handleSubmit={handleSubmit} />}
                </OptionsMenu>
                <Button onClick={swapTeams}>Switch Team</Button>
              </>
            </Header>
            <InBattleDisplay prevBattleRef={previousBattleRoomId} />
          </>
        ) : (
          <Home setBattleRoomId={setBattleRoomId} />
        )} */}
      {/* <EffectivenessQuiz /> */}
    </>
  );
};

export default App;
const useSpectatorsAllowed = (
  params: URLSearchParams,
  battleRoomId: string,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [spectatorsAllowed, setSpectatorsAllowed] = useState(true);
  useEffect(() => {
    if (params.get("noSpectators")) {
      console.log("spec", params.get("noSpectators"));
      setSpectatorsAllowed(false);
    }
  });
  useEffect(() => {
    if (battleRoomId.split("-").length > 3) {
      console.log("battleRoomId", battleRoomId);
      console.log("spectatorsAllowed", false);
      setSpectatorsAllowed(false);
    }
  }, [battleRoomId]);
  return [spectatorsAllowed, setSpectatorsAllowed];
};
export const InBattleDisplay = ({}: {}) => {
  const previousBattleRoomId = useRef("");
  const [teamToDisplay, setTeamToDisplay] = useState<"p1" | "p2">("p2");
  const [battleRoomId, setBattleRoomId] = useState("");
  const [activePkmTrack, setActivePkmTrack] = useState(true);
  const params = new URLSearchParams(window.location.search);
  const { id } = useParams();
  const [spectatorsAllowed] = useSpectatorsAllowed(params, battleRoomId);
  const [isInExtension, setIsInExtension] = useState(false);
  const paramBattleId = params.get("battleId");
  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   console.log("handleSubmit", previousBattleRoomId.current, battleRoomId);
  //   previousBattleRoomId.current = battleRoomId;
  //   const target = e.target as typeof e.target & {
  //     url: { value: string };
  //   };
  //   const battleIndex = target.url.value.indexOf("battle");
  //   if (battleIndex === -1) {
  //     return;
  //   }
  //   const battleRoomIdTemp = target.url.value.slice(battleIndex);
  //   setBattleRoomId(battleRoomIdTemp);
  // };

  useEffect(() => {
    if (paramBattleId) {
      setIsInExtension(true);
      setBattleRoomId(paramBattleId);
    }
  });
  const swapTeams = () => {
    if (teamToDisplay === "p1") {
      setTeamToDisplay("p2");
    } else {
      setTeamToDisplay("p1");
    }
  };

  console.log("id", id);
  if (!id) {
    return <></>;
  }
  return (
    <>
      <Header>
        <>
          <OptionsMenu>
            {isInExtension && <Spacer />}
            <PokeTracker
              toggle={activePkmTrack}
              setToggle={setActivePkmTrack}
            />
            <Link to={inBattlePath}>Search A battle</Link>
            <Link to={examplePath}>Example</Link>
            <Link to={quizPath}>Effectiveness Quiz</Link>

            {/* {!isInExtension && <UrlSearch handleSubmit={handleSubmit} />} */}
          </OptionsMenu>
          <Button onClick={swapTeams}>Switch Team</Button>
        </>
      </Header>
      <AppDisplay>
        <TypeWriterContainer>
          <PokeInfo>Pokeinfo</PokeInfo>
        </TypeWriterContainer>
        <ErrorBoundary>
          <Suspense fallback={<LoadingScreen />}>
            {displayHandler(
              spectatorsAllowed,
              isInExtension,
              params.get("userTeam"),
              params.get("opponentsTeam"),
            ) ? (
              <TeamDisplay
                teamToDisplay={teamToDisplay}
                battleRoomId={id}
                previousBattleRoomId={previousBattleRoomId.current}
                activePkmTrack={activePkmTrack}
                setActivePkmTrack={setActivePkmTrack}
                spectatorsAllowed={spectatorsAllowed}
              />
            ) : (
              <PokeSearch battleRoomId={battleRoomId} />
            )}
          </Suspense>
        </ErrorBoundary>
      </AppDisplay>
    </>
  );
};
