import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonDisplay,
  NoSpectatorsText,
  SwapTeamsButton,
} from "./TeamDisplay.style";
import SpriteImage from "../SpriteImage";
import { pokemonNameFilter } from "./TeamDisplay.functions";
import PokeDexScreen from "../PokeDexScreen/PokeDex";
import PokemonDataDisplay from "../PokemonDataDisplay/PokemonDataDisplay";
import {
  devRoomId,
  opponentTestTeam,
  userTestTeam,
} from "../../developmentMode";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import PokeTracker from "../PokeTracker/PokeTracker";
import useTeams from "../../hooks/useTeams/useTeams";
import { teamsType } from "../../hooks/useWebsSocket/useWebsSocket";
interface TeamProps {
  battleRoomId: string;
  previousBattleRoomId: string;
}
// fetches latest pokemon data from auto updating github dataset
const TeamDisplay = ({ battleRoomId, previousBattleRoomId }: TeamProps) => {
  const [index, setIndex] = useState(0);
  const { teamToDisplay, swapTeams } = useDisplayTeam();
  const [activePkmTrack, setActivePkmTrack] = useState(true);

  const { teams, activePokemon, noSpectators } = useTeams();
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

  if (noSpectators && !teams.p1.length) {
    return (
      <PokeDexScreen>
        <NoSpectatorsText>
          This Battle Does Not Allow Spectators
        </NoSpectatorsText>
      </PokeDexScreen>
    );
  }
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
        {activePokemonCheck(teamToDisplay, activePkmTrack) && (
          <PokemonDataDisplay
            pokemon={activePokemonCheck(teamToDisplay, activePkmTrack)}
          />
        )}
      </ErrorBoundary>
    </>
  );
};
export default TeamDisplay;

const useDisplayTeam = () => {
  const [teamToDisplay, setTeamToDisplay] = useState<"p1" | "p2">("p2");
  const swapTeams = () => {
    if (teamToDisplay === "p1") {
      setTeamToDisplay("p2");
    } else {
      setTeamToDisplay("p1");
    }
  };
  return { teamToDisplay, swapTeams };
};
