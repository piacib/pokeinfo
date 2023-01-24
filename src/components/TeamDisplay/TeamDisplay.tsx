import React, { useEffect, useState } from "react";
import { Button, ButtonDisplay } from "./TeamDisplay.style";
import SpriteImage from "../SpriteImage";
import { pokemonNameFilter } from "./TeamDisplay.functions";
import { RoomIdProp } from "../../App";
import { useTeams } from "./useTeams";
import PokeDexScreen from "../PokeDexScreen/PokeDex";
import PokemonDataDisplay from "../PokemonDataDisplay/PokemonDataDisplay";
import { useParams } from "react-router-dom";
import { useWebSocket } from "../../hooks/useWebsSocket";

interface TeamProps {
  opponentsTeam: boolean;
  battleRoomId: string;
}
// fetches latest pokemon data from auto updating github dataset
export const TeamDisplay = ({ opponentsTeam, battleRoomId }: TeamProps) => {
  // const [teams] = useTeams(battleRoomId ? battleRoomId : "");
  const [index, setIndex] = useState(0);
  const [teams] = useWebSocket(battleRoomId);
  const pokemon = teams[Number(opponentsTeam) ? "p1" : "p2"][index];

  console.log("battleRoomId", battleRoomId);
  return (
    <>
      <PokeDexScreen>
        <ButtonDisplay>
          {teams[Number(opponentsTeam) ? "p1" : "p2"]?.map((x, idx) => (
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
      {pokemon && battleRoomId && (
        <PokemonDataDisplay pokemon={pokemon} roomId={battleRoomId} />
      )}
    </>
  );
};
