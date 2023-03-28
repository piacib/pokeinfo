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
  let pokemonName = pokemon[0].toUpperCase() + pokemon.slice(1);
  if (
    Object.keys(randbatsPokemonData).length > 1 &&
    !randbatsPokemonData[pokemonName]
  ) {
    // catches appearance based names ie pikachu-original or flores-blue
    const tempPkm = pokemonName.split("-")[0];
    if (randbatsPokemonData[tempPkm]) {
      pokemonName = tempPkm;
    } else {
      console.error("no data for this pokemon", randbatsPokemonData, pokemon);
    }
  }
  const movesData = getMoves(randbatsPokemonData[pokemonName]?.moves);
  const rolesData = randbatsPokemonData[pokemonName]?.roles;
  if (!randbatsPokemonData[pokemonName]) return <></>;
  return (
    <>
      {rolesData ? (
        <>
          <RolesDisplay
            pokemonData={rolesData}
            initialRole={Object.keys(rolesData)[0]}
          />
        </>
      ) : (
        <PropertiesContainer>
          <AbilitiesDisplay
            abilities={randbatsPokemonData[pokemonName].abilities}
          />
          <ItemsDisplay items={randbatsPokemonData[pokemonName].items} />
          <MovesDisplay movesData={movesData} />
        </PropertiesContainer>
      )}
    </>
  );
};
export default RandomBattlePokemonDisplay;
