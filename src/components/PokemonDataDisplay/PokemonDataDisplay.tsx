import React, { useEffect, useState } from "react";
import { isTypeName, TypeName } from "../../types";
import { dexSearchPrepper } from "../../functions";
import { PokemonName, HeaderContainer } from "./DataDisplay.style";
import DamageDisplay from "../DamageDisplay/DamageDisplay";
import TypeDisplay from "../TypesDisplay/TypesDisplay";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import OtherFormatsDisplay from "./OtherFormatsDisplay";
import { Dex } from "@pkmn/dex";
import { RoomIdProp } from "../../App";
import RandomBattlePokemonDisplay from "./RandomBattlePokemonDisplay";

const { Species } = Dex.data;

interface PokemonDataDisplayProps extends RoomIdProp {
  pokemon: string;
}
const displayCutOff = 300;
const PokemonDataDisplay = ({ pokemon, roomId }: PokemonDataDisplayProps) => {
  // console.log("PokemonDataDisplay", pokemon);
  const [typesArray, setTypesArray] = useState<TypeName[] | null>(null);
  const [changeDisplay, setChangeDisplay] = useState<boolean>(false);

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
  const isGen9 = roomId.includes("gen9");
  const isRandomBattle = roomId.includes("random");
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
                isGen9={isGen9}
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
