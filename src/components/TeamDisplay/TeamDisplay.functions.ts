import { Dex } from "@pkmn/dex";

const isPokemonName = (pokemon: string): boolean =>
  Dex.species.get(pokemon).exists;
const nameCheck = (pokemon: string) => {
  if (isPokemonName(pokemon)) {
    return pokemon;
  }
  // gets name in paranthesis
  const parenthesisName = pokemon.match(/\(([^)]+)\)/);
  if (parenthesisName && isPokemonName(parenthesisName[1])) {
    return parenthesisName[1];
  }
  // grabs string up until (
  const regMatch = pokemon.match(/[^(]+/);
  const firstName = regMatch ? regMatch[0] : null;
  if (firstName && firstName[firstName.length - 1] === " ") {
    return firstName[0].slice(0, firstName.length - 1);
  }
  return "Not Revealed";
};

export const pokemonNameFilter = (name: string | null): string => {
  if (name === "Not revealed" || !name) {
    return "Not revealed";
  }
  const pokemonName = nameCheck(name);
  return pokemonName[0].toUpperCase() + pokemonName.slice(1);
};
