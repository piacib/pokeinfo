import { useEffect, useState } from "react";
import { PokemonData } from "../types";
const emptyRandbatsPokemonData = {
  "": {
    level: 0,
    abilities: [],
    items: [],
    moves: [],
  },
};
const subStringRemover = (origStr: string, subStr: string) => {
  if (!origStr.includes(subStr)) {
    return origStr;
  }
  const index = origStr.indexOf(subStr);
  return origStr.slice(0, index) + origStr.slice(index + subStr.length);
};
const battleTypeCheck = (battleType: string) => {
  if (battleType.includes("unrated")) {
    return subStringRemover(battleType, "unrated");
  }
  if (battleType.includes("blitz")) {
    return subStringRemover(battleType, "blitz");
  }
  return battleType;
};

interface RandomBattlePokemonData extends PokemonData {
  level: number;
}
interface RandomBattleData {
  [key: string]: RandomBattlePokemonData;
}
export const useRandomBattleData = (
  battleType: string,
): [
  RandomBattleData,
  React.Dispatch<React.SetStateAction<RandomBattleData>>,
] => {
  const [randbatsPokemonData, setRandbatsPokemonData] =
    useState<RandomBattleData>(emptyRandbatsPokemonData);

  if (!battleType.includes("randombattle")) {
    // fetchs random pokemon data only on startup
    console.error(battleType + " is not a valid random battle type");
  }
  useEffect(() => {
    async function asyncFetchRandomPokemonData() {
      let key = battleTypeCheck(battleType);

      const fetchData = await fetch(
        `https://pkmn.github.io/randbats/data/${key}.json`,
      );
      const response = await fetchData.json();
      setRandbatsPokemonData(response);
    }
    asyncFetchRandomPokemonData();
  }, []);
  // sets pokemon data when new pokemon is selected
  return [randbatsPokemonData, setRandbatsPokemonData];
};
