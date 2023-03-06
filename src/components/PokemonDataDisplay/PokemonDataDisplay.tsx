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
  const [typesArray, setTypesArray] = useState<TypeName[] | null>(null);
  const [pkmn, setPkmn] = useState(pokemon);
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
      console.log("typesArr", typesArray);
      setTypesArray(newArr);
    } else {
      console.error("pokemon does not exist in dex", pokemon);
    }
  }, [pkmn]);

  const isRandomBattle = battleType.includes("random");

  // exit if pokemon doesnt exist (should never happen)
  const pokemonExists = Dex.species.get(pokemon).exists;

  return (
    <>
      <>
        {pokemonExists ? (
          <>
            <HeaderContainer>
              <PokemonName
                href={`https://www.smogon.com/dex/ss/pokemon/${pkmn}/`}
              >
                {pokemon}
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
            <h2>It appears the pokemon {pokemon} is not in our database</h2>
          </>
        )}
        <></>
      </>
    </>
  );
};
export default PokemonDataDisplay;
