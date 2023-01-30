import React, { useEffect, useState } from "react";
import { Dex } from "@pkmn/dex";
import { dexSearchPrepper } from "../../functions";
import ItemsDisplay from "../ItemsDisplay/ItemsDisplay";
import MovesDisplay from "../MovesDisplay/MovesDisplay";
import AbilitiesDisplay from "../AbilitiesDisplay/AbilitiesDisplay";
import RolesDisplay from "../RolesDisplay/RolesDisplay";
import { PropertiesContainer } from "../PokemonDataDisplay/DataDisplay.style";
import { useRandomBattleData } from "../../hooks/useRandomBattleData";
const { Moves } = Dex.data;
export const getMoves = (moveData: string[] | undefined) => {
  if (moveData) {
    return moveData.map((move) => Moves[dexSearchPrepper(move)]);
  }
  return [];
};

interface RandomBattlePokemonDisplayProps {
  pokemon: string;
  battleType: string;
}
const RandomBattlePokemonDisplay: React.FC<RandomBattlePokemonDisplayProps> = ({
  pokemon,
  battleType,
}) => {
  const [randbatsPokemonData] = useRandomBattleData(battleType);

  if (
    Object.keys(randbatsPokemonData).length > 1 &&
    !randbatsPokemonData[pokemon]
  ) {
    console.error("no data for this pokemon", randbatsPokemonData, pokemon);
    return <></>;
  }
  const movesData = getMoves(randbatsPokemonData[pokemon]?.moves);
  const rolesData = randbatsPokemonData[pokemon]?.roles;
  // console.log("pokemon Data", randbatsPokemonData[pokemon]);
  return randbatsPokemonData[pokemon] ? (
    <>
      {rolesData ? (
        <RolesDisplay
          pokemonData={rolesData}
          initialRole={Object.keys(rolesData)[0]}
        />
      ) : (
        <PropertiesContainer>
          <AbilitiesDisplay
            abilities={randbatsPokemonData[pokemon].abilities}
          />
          <ItemsDisplay items={randbatsPokemonData[pokemon].items} />
          <MovesDisplay movesData={movesData} />
        </PropertiesContainer>
      )}
    </>
  ) : (
    <></>
  );
};
export default RandomBattlePokemonDisplay;
