import { Dex } from "@pkmn/dex";
import { useEffect, useState } from "react";
import { dexSearchPrepper } from "../functions";
import { isTypeName, TypeName } from "../types";

const { Species } = Dex.data;
export const usePokemon = (
  pokemon: string,
): {
  pkmn: string;
  typesArray: TypeName[] | null;
  setPkmn: React.Dispatch<React.SetStateAction<string>>;
  setTypesArray: React.Dispatch<React.SetStateAction<TypeName[] | null>>;
  pkmnExists: boolean;
} => {
  const [pkmn, setPkmn] = useState(pokemon);
  const [typesArray, setTypesArray] = useState<TypeName[] | null>(null);
  useEffect(() => {
    // check if pokemon is in Species
    setPkmn(pokemon);
    if (Species[dexSearchPrepper(pokemon)]) {
      return;
    }
    // if not in Species check pokemon is in a cosmetic form
    //  which follows format of ${pokemon}-${cosmetic form}
    const regExMatch = pokemon.match(/(.*)-/);
    if (regExMatch && regExMatch[1]) {
      if (Species[dexSearchPrepper(regExMatch[1])].name) {
        setPkmn(regExMatch[1]);
        return;
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
      console.error("pokemon does not exist in dex", pkmn);
    }
  }, [pkmn]);
  return {
    pkmn,
    setPkmn,
    typesArray,
    setTypesArray,
    pkmnExists: Dex.species.get(pkmn).exists,
  };
};
