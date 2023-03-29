import React from "react";
import useNoSpectator from "./useNoSpectator";

export const exampleUrl = new URL(
  "https://piacib.github.io/pokeinfo/?battleId=battle-gen9randombattle-1831739535&isExtension=true&userTeam=Cacturne%2CPolteageist%2CGallade%2CCrabominable%2CHypno%2CGoodra-Hisui&opponentsTeam=Quaquaval%2CGrumpig%2CDunsparce%2COricorio-Pa%27u%2CGarchomp",
);
export const CorrectTeam = {
  p1: [
    "Cacturne",
    "Polteageist",
    "Gallade",
    "Crabominable",
    "Hypno",
    "Goodra-Hisui",
  ],
  p2: ["Quaquaval", "Grumpig", "Dunsparce", "Oricorio-Pa'u", "Garchomp"],
};
const UseNoSpectatorsExample = (): JSX.Element => {
  const [[teams, setTeams], activePokemon] = useNoSpectator(
    exampleUrl.searchParams,
  );
  return (
    <>
      <ul id="p1">
        p1:
        {teams.p1.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
      <ul id="p2">
        p2:
        {teams.p2.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </>
  );
};

export default UseNoSpectatorsExample;
