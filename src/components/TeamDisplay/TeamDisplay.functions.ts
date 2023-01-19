import { Dex } from "@pkmn/dex";
const arr = [
  "tester (Dragonite) (active)",
  "Slowking (Slowking-galar)",
  "Iron Valiant",
  "Dondozo",
  "Meowscarada",
  "Orthworm",
];
const isPokemonName = (pokemon: string): boolean => Dex.species.get(pokemon).exists;
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

export const getActivePokemon = (team: string[] | null): null | string => {
  if (!team || !team.length) {
    return null;
  }
  const activePokemon = team.filter((x) => x.includes("active"));
  if (!activePokemon.length) {
    return null;
  }
  return pokemonNameFilter(activePokemon[0]);
};

export const config = { attributes: true, childList: true, subtree: true };

// takes in room id and grabs icon aria labels for teams
export const getTeam = (roomId: string): [Element[], Element[]] => {
  const battleRoom = document.getElementById(roomId);
  if (!battleRoom) {
    return [[], []];
  }
  const teamIcons = battleRoom.getElementsByClassName("teamicons");
  if (!Array.from(teamIcons).filter((x) => x.children.length > 0).length) {
    return [[], []];
  }
  const usersTeam = [...teamIcons[0].children, ...teamIcons[1].children];
  const opponentsTeam = [...teamIcons[3].children, ...teamIcons[4].children];
  return [usersTeam, opponentsTeam];
};
