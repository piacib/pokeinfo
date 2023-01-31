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
  // fetchs random pokemon data only on startup
  if (!battleType.includes("randombattle")) {
    console.error(battleType + " is not a valid random battle type");
  }
  useEffect(() => {
    async function asyncFetchRandomPokemonData() {
      // console.log(`https://pkmn.github.io/randbats/data/${battleType}.json`);
      const fetchData = await fetch(
        `https://pkmn.github.io/randbats/data/${battleType}.json`,
      );
      const response = await fetchData.json();
      setRandbatsPokemonData(response);
    }
    asyncFetchRandomPokemonData();
  }, []);
  // sets pokemon data when new pokemon is selected
  return [randbatsPokemonData, setRandbatsPokemonData];
};
