import React, { useEffect, useState } from "react";
import { Button, ButtonDisplay } from "./TeamDisplay.style";
import SpriteImage from "../SpriteImage";
import { pokemonNameFilter } from "./TeamDisplay.functions";
import PokeDexScreen from "../PokeDexScreen/PokeDex";
import PokemonDataDisplay from "../PokemonDataDisplay/PokemonDataDisplay";
import { useWebSocket } from "../../hooks/useWebsSocket";
import {
  devRoomId,
  opponentTestTeam,
  userTestTeam,
} from "../../developmentMode";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import useNoSpectator from "../../hooks/useNoSpectator";
interface TeamProps {
  teamToDisplay: "p1" | "p2";
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
  teamToDisplay = "p2",
  activePkmTrack = true,
  spectatorsAllowed = true,
  setActivePkmTrack,
}: TeamProps) => {
  const [index, setIndex] = useState(0);
  const [[teams, setTeams], activePokemon] = spectatorsAllowed
    ? useWebSocket(battleRoomId, previousBattleRoomId)
    : useNoSpectator();
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
  const battleTypeRegex = battleRoomId.match(/battle-(.*)-/);
  return (
    <>
      <PokeDexScreen>
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
