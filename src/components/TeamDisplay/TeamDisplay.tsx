import React, { useEffect, useState } from "react";
import { Button, ButtonDisplay } from "./TeamDisplay.style";
import SpriteImage from "../SpriteImage";
import { pokemonNameFilter } from "./TeamDisplay.functions";
import PokeDexScreen from "../PokeDexScreen/PokeDex";
import PokemonDataDisplay from "../PokemonDataDisplay/PokemonDataDisplay";
import { useWebSocket } from "../../hooks/useWebsSocket";
import { opponentTestTeam, userTestTeam } from "../../developmentMode";

interface TeamProps {
  opponentsTeam: boolean;
  teamtoDisplay?: "p1" | "p2";
  battleRoomId: string;
}
// fetches latest pokemon data from auto updating github dataset
export const TeamDisplay = ({ opponentsTeam, battleRoomId }: TeamProps) => {
  // const [teams] = useTeams(battleRoomId ? battleRoomId : "");
  const [index, setIndex] = useState(0);
  const [teams, setTeams] = useWebSocket(battleRoomId);
  const teamKey = Number(opponentsTeam) ? "p1" : "p2";
  const pokemon = teams[teamKey][index];
  console.log("battleRoomId", battleRoomId);
  useEffect(() => {
    if (battleRoomId === "testing") {
      setTeams({
        p1: userTestTeam,
        p2: opponentTestTeam,
      });
    }
    return () => {};
  }, []);

  const battleTypeRegex = battleRoomId.match(/battle-(.*)-/);
  return (
    <>
      <PokeDexScreen>
        <ButtonDisplay>
          {teams[teamKey]?.map((x, idx) => (
            <Button
              key={pokemonNameFilter(x) + idx}
              onClick={() => setIndex(idx)}
              disabled={x === "Not revealed"}
            >
              <SpriteImage name={pokemonNameFilter(x)} />
            </Button>
          ))}
        </ButtonDisplay>
      </PokeDexScreen>
      {pokemon && battleTypeRegex && (
        <PokemonDataDisplay pokemon={pokemon} battleType={battleTypeRegex[1]} />
      )}
    </>
  );
};
