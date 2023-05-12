import React, { useEffect, useState } from "react";
import { Button, ButtonDisplay, SwapTeamsButton } from "./TeamDisplay.style";
import SpriteImage from "../SpriteImage";
import { pokemonNameFilter } from "./TeamDisplay.functions";
import PokeDexScreen from "../PokeDexScreen/PokeDex";
import PokemonDataDisplay from "../PokemonDataDisplay/PokemonDataDisplay";
import { useWebSocket } from "../../hooks/useWebsSocket/useWebsSocket";
import {
  devRoomId,
  opponentTestTeam,
  userTestTeam,
} from "../../developmentMode";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import useNoSpectator from "../../hooks/useNoSpectators/useNoSpectator";
import PokeTracker from "../PokeTracker/PokeTracker";
interface TeamProps {
  battleRoomId: string;
  previousBattleRoomId: string;
  activePkmTrack: boolean;
  setActivePkmTrack: React.Dispatch<React.SetStateAction<boolean>>;
  spectatorsAllowed: boolean;
}
// fetches latest pokemon data from auto updating github dataset
const TeamDisplay = ({
  battleRoomId,
  previousBattleRoomId,
  // activePkmTrack = true,
  spectatorsAllowed = true,
}: // setActivePkmTrack,
TeamProps) => {
  const [index, setIndex] = useState(0);
  const [teamToDisplay, setTeamToDisplay] = useState<"p1" | "p2">("p2");
  const [activePkmTrack, setActivePkmTrack] = useState(true);

  const [[teams, setTeams], activePokemon] = spectatorsAllowed
    ? useWebSocket(battleRoomId, previousBattleRoomId)
    : useNoSpectator(new URLSearchParams(window.location.search));
  useEffect(() => {
    if (battleRoomId === devRoomId) {
      setTeams({
        p1: userTestTeam,
        p2: opponentTestTeam,
      });
    }
    return () => {};
  }, []);
  const activePokemonCheck = (
    teamToDisplay: "p1" | "p2",
    activePkmTrack: boolean,
  ) => {
    if (!activePkmTrack) {
      return teams[teamToDisplay][index];
    }
    if (activePokemon[teamToDisplay][0]) {
      return activePokemon[teamToDisplay][0];
    }
    return teams[teamToDisplay][index];
  };
  const swapTeams = () => {
    if (teamToDisplay === "p1") {
      setTeamToDisplay("p2");
    } else {
      setTeamToDisplay("p1");
    }
  };
  const battleTypeRegex = battleRoomId.match(/battle-(.*)-/);
  return (
    <>
      <PokeDexScreen>
        <PokeTracker toggle={activePkmTrack} setToggle={setActivePkmTrack} />
        <SwapTeamsButton onClick={swapTeams}>Switch Team</SwapTeamsButton>

        <ButtonDisplay>
          {teams[teamToDisplay]?.map((x, idx) => (
            <Button
              key={pokemonNameFilter(x) + idx}
              onClick={() => {
                setActivePkmTrack(false);
                setIndex(idx);
              }}
              disabled={x === "Not revealed"}
            >
              <SpriteImage name={pokemonNameFilter(x)} />
            </Button>
          ))}
        </ButtonDisplay>
      </PokeDexScreen>
      <ErrorBoundary>
        {battleTypeRegex &&
          activePokemonCheck(teamToDisplay, activePkmTrack) && (
            <PokemonDataDisplay
              pokemon={activePokemonCheck(teamToDisplay, activePkmTrack)}
              battleType={battleTypeRegex[1]}
            />
          )}
      </ErrorBoundary>
    </>
  );
};
export default TeamDisplay;
