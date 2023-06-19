import "@testing-library/jest-dom";

import { renderHook } from "@testing-library/react";
import useNoSpectator from "./useNoSpectator";
import { TeamsReturn } from "../useTeams/useTeams";
const CorrectTeam = {
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

const url =
  "https://piacib.github.io/pokeinfo/?battleId=battle-gen9randombattle-1831739535&isExtension=true&userTeam=Cacturne%2CPolteageist%2CGallade%2CCrabominable%2CHypno%2CGoodra-Hisui&opponentsTeam=Quaquaval%2CGrumpig%2CDunsparce%2COricorio-Pa%27u%2CGarchomp";

test("useNoSpectator gets user team data", () => {
  const { result } = renderHook(() => useNoSpectator(url));
  const returnObj = result.current;
  expect(returnObj);

  const p1 = (returnObj as TeamsReturn).teams.p1;
  p1.forEach((x, idx) => {
    expect(x).toBe(CorrectTeam.p1[idx]);
  });
});
test("useNoSpectator gets opponents team data", () => {
  window.location.href =
    "https://piacib.github.io/pokeinfo/?battleId=battle-gen9randombattle-1831739535&isExtension=true&userTeam=Cacturne%2CPolteageist%2CGallade%2CCrabominable%2CHypno%2CGoodra-Hisui&opponentsTeam=Quaquaval%2CGrumpig%2CDunsparce%2COricorio-Pa%27u%2CGarchomp";

  const { result } = renderHook(() => useNoSpectator(url));
  console.log("results", result.current);
  expect(result.current);
  const returnObj = result.current;
  const p2 = (returnObj as TeamsReturn).teams.p2;

  p2.forEach((x, idx) => {
    expect(x).toBe(CorrectTeam.p2[idx]);
  });
});
