import React, { useEffect, useState } from "react";
import { isTypeName, TypeName } from "../../types";
import { dexSearchPrepper } from "../../functions";
import {
  PokemonName,
  HeaderContainer,
  NoPokemonText,
} from "./DataDisplay.style";
import DamageDisplay from "../DamageDisplay/DamageDisplay";
import TypeDisplay from "../TypesDisplay/TypesDisplay";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import OtherFormatsDisplay from "./OtherFormatsDisplay";
import { Dex } from "@pkmn/dex";
import RandomBattlePokemonDisplay from "../RandomPokemonDisplay/RandomBattlePokemonDisplay";

const { Species } = Dex.data;
const usePokemon = (pokemon: string): [string, TypeName[] | null] => {
  const [pkmn, setPkmn] = useState(pokemon);
  const [typesArray, setTypesArray] = useState<TypeName[] | null>(null);
  useEffect(() => {
    // check if pokemon is in Species
    if (Species[dexSearchPrepper(pokemon)]) {
      setPkmn(pokemon);
      return;
    }
    // if not in Species check pokemon is in a cosmetic form
    //  which follows format of ${pokemon}-${cosmetic form}
    const regExMatch = pokemon.match(/(.*)-/);
    if (regExMatch && regExMatch[1]) {
      if (Species[dexSearchPrepper(regExMatch[1])].name) {
        setPkmn(regExMatch[1]);
      }
    }
  }, [pokemon]);
  useEffect(() => {
    if (Dex.species.get(pkmn).exists) {
      let newArr: TypeName[] = [];
      const TypeArr = Species[dexSearchPrepper(pkmn)]?.types;
      if (!TypeArr) {
        console.error("error retrieving type", dexSearchPrepper(pkmn), pkmn);
        setTypesArray(newArr);
        return;
      }
      TypeArr.forEach((entry) => {
        if (isTypeName(entry)) {
          newArr.push(entry);
        }
      });
      setTypesArray(newArr);
    } else {
      setPkmn("");
      console.error("pokemon does not exist in dex", pokemon);
    }
  }, [pkmn]);
  return [pkmn, typesArray];
};
interface PokemonDataDisplayProps {
  pokemon: string;
  battleType: string;
}
const PokemonDataDisplay = ({
  pokemon,
  battleType,
}: PokemonDataDisplayProps) => {
  console.log("pokemon", pokemon);
  const [pkmn, typesArray] = usePokemon(pokemon);
  const isRandomBattle = battleType.includes("random");
  return (
    <>
      <>
        {Dex.species.get(pokemon).exists && typesArray ? (
          <>
            <HeaderContainer>
              <PokemonName
                href={`https://www.smogon.com/dex/ss/pokemon/${pkmn}/`}
              >
                {pkmn}
              </PokemonName>
              <TypeDisplay types={typesArray} />
            </HeaderContainer>
            <DamageDisplay typesArray={typesArray} />
            <StatsDisplay pokemon={pkmn} />
            {isRandomBattle ? (
              <RandomBattlePokemonDisplay
                pokemon={pkmn}
                battleType={battleType}
              />
            ) : (
              <OtherFormatsDisplay pokemon={pkmn} />
            )}
          </>
        ) : (
          <>
            <HeaderContainer>
              <PokemonName
                href={`https://www.smogon.com/dex/ss/pokemon/${pkmn}/`}
              >
                {pokemon}
              </PokemonName>
            </HeaderContainer>
            <NoPokemonText>
              It appears the pokemon {pokemon} is not in our database
            </NoPokemonText>
          </>
        )}
        <></>
      </>
    </>
  );
};
export default PokemonDataDisplay;
