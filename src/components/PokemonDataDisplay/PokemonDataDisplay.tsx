import React, { useEffect, useState } from "react";
import { isTypeName, TypeName } from "../../types";
import { dexSearchPrepper } from "../../functions";
import { PokemonName, HeaderContainer } from "./DataDisplay.style";
import DamageDisplay from "../DamageDisplay/DamageDisplay";
import TypeDisplay from "../TypesDisplay/TypesDisplay";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import OtherFormatsDisplay from "./OtherFormatsDisplay";
import { Dex } from "@pkmn/dex";
import RandomBattlePokemonDisplay from "../RandomPokemonDisplay/RandomBattlePokemonDisplay";

const { Species } = Dex.data;

interface PokemonDataDisplayProps {
  pokemon: string;
  battleType: string;
}
const PokemonDataDisplay = ({
  pokemon,
  battleType,
}: PokemonDataDisplayProps) => {
  console.log("PokemonDataDisplay", pokemon);
  console.log("PokemonDataDisplay", battleType);
  const [typesArray, setTypesArray] = useState<TypeName[] | null>(null);

  useEffect(() => {
    if (Dex.species.get(pokemon).exists) {
      let newArr: TypeName[] = [];
      const TypeArr = Species[dexSearchPrepper(pokemon)]?.types;
      if (!TypeArr) {
        console.error(
          "error retrieving type",
          dexSearchPrepper(pokemon),
          pokemon,
        );
        return;
      }

      TypeArr.forEach((entry) => {
        if (isTypeName(entry)) {
          newArr.push(entry);
        }
      });
      setTypesArray(newArr);
    }
  }, [pokemon]);
  const isRandomBattle = battleType.includes("random");
  const regExPokemonName = pokemon.match(/^([\w]+)-/);
  const pokemonName = pokemon[0].toUpperCase() + pokemon.slice(1);
  const pokemonExists = Dex.species.get(pokemon).exists;
  return (
    <>
      {pokemonExists ? (
        <>
          <HeaderContainer>
            <PokemonName
              href={`https://www.smogon.com/dex/ss/pokemon/${pokemon}/`}
            >
              {regExPokemonName ? regExPokemonName[1] : pokemon}
            </PokemonName>
            <TypeDisplay types={typesArray} />
          </HeaderContainer>
          <StatsDisplay pokemon={pokemonName} />
          <>
            {isRandomBattle ? (
              <RandomBattlePokemonDisplay
                pokemon={pokemonName}
                battleType={battleType}
              />
            ) : (
              <OtherFormatsDisplay pokemon={pokemonName} />
            )}
          </>
          <DamageDisplay typesArray={typesArray} />
        </>
      ) : (
        <>
          <HeaderContainer>
            <PokemonName
              href={`https://www.smogon.com/dex/ss/pokemon/${pokemon}/`}
            >
              {regExPokemonName ? regExPokemonName[1] : pokemon}
            </PokemonName>
          </HeaderContainer>
        </>
      )}
    </>
  );
};
export default PokemonDataDisplay;
