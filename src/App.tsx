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
  Spacer,
} from "./App.style";
import { ThemeProvider } from "styled-components";
import { themeObjGenerator } from "./theme";
import { GlobalStyles } from "./GlobalStyles";
import { useLightMode } from "./hooks/useLightMode";
import PokeTracker from "./components/PokeTracker/PokeTracker";
import { LoadingScreen } from "./components/LoadingScreen";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
const TeamDisplay = React.lazy(
  () => import("./components/TeamDisplay/TeamDisplay"),
);

const App: React.FC = () => {
  const [teamToDisplay, setTeamToDisplay] = useState<"p1" | "p2">("p2");
  const [battleRoomId, setBattleRoomId] = useState("");
  const [isInExtension, setIsInExtension] = useState(false);
  const [activePkmTrack, setActivePkmTrack] = useState(true);
  const previousBattleRoomId = useRef("");
  const [lightMode, setLightMode] = useLightMode();

  useEffect(() => {
    if (window.location.search) {
      const regMatch = window.location.search.match(/\?battleId=(.*)&/);
      if (regMatch) {
        setIsInExtension(true);
        setBattleRoomId(regMatch[1]);
      }
    }
  });
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
  return (
    <>
      <GlobalStyles theme={themeObjGenerator(lightMode)} />
      <ThemeProvider theme={themeObjGenerator(lightMode)}>
        {battleRoomId ? (
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
                <Button
                  onClick={() => {
                    if (teamToDisplay === "p1") {
                      setTeamToDisplay("p2");
                    } else {
                      setTeamToDisplay("p1");
                    }
                  }}
                >
                  Switch Team
                </Button>
              </>
            </Header>
            <AppDisplay>
              <TypeWriterContainer>
                <h1>Poke Info</h1>
              </TypeWriterContainer>
              <ErrorBoundary>
                <Suspense fallback={<LoadingScreen />}>
                  <TeamDisplay
                    teamToDisplay={teamToDisplay}
                    battleRoomId={battleRoomId}
                    previousBattleRoomId={previousBattleRoomId.current}
                    activePkmTrack={activePkmTrack}
                    setActivePkmTrack={setActivePkmTrack}
                  />
                </Suspense>
              </ErrorBoundary>
            </AppDisplay>
          </>
        ) : (
          <Home setBattleRoomId={setBattleRoomId} />
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
