import { useParams } from "react-router-dom";
import useSpectatorsAllowed from "../../hooks/useSpectatorsAllowed/useSpectatorsAllowed";
import { Suspense, useEffect, useRef, useState } from "react";
import { AppDisplay, Button, Header, PokeInfo, Spacer } from "../../App.style";
import OptionsMenu from "../OptionsMenu/OptionsMenu";
import PokeTracker from "../PokeTracker/PokeTracker";
import { TypeWriterContainer } from "../../styles/TypeWriterContainer.style";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { LoadingScreen } from "../LoadingScreen";
import { displayHandler } from "../../functions";
import TeamDisplay from "../TeamDisplay/TeamDisplay";
import PokeSearch from "../PokeSearch/PokeSearch";

export const InBattleDisplay = () => {
  const previousBattleRoomId = useRef("");
  const [teamToDisplay, setTeamToDisplay] = useState<"p1" | "p2">("p2");
  const [battleRoomId, setBattleRoomId] = useState("");
  const [activePkmTrack, setActivePkmTrack] = useState(true);
  const params = new URLSearchParams(window.location.search);
  const { id } = useParams();
  const [spectatorsAllowed] = useSpectatorsAllowed(params, battleRoomId);
  const [isInExtension, setIsInExtension] = useState(false);
  const paramBattleId = params.get("battleId");
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
