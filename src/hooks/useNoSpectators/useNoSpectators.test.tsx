import "@testing-library/jest-dom";

import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import useNoSpectator from "./useNoSpectator";
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
const exampleUrl = new URL(
  "https://piacib.github.io/pokeinfo/?battleId=battle-gen9randombattle-1831739535&isExtension=true&userTeam=Cacturne%2CPolteageist%2CGallade%2CCrabominable%2CHypno%2CGoodra-Hisui&opponentsTeam=Quaquaval%2CGrumpig%2CDunsparce%2COricorio-Pa%27u%2CGarchomp",
);
const params = exampleUrl.searchParams;
test("useNoSpectator gets user team data", () => {
  const { result } = renderHook(() => useNoSpectator(params));
  console.log("results", result.current);
  const p1 = result.current[1].p1;
  p1.forEach((x, idx) => {
    expect(x).toBe(CorrectTeam.p1[idx]);
  });
});
test("useNoSpectator gets opponents team data", () => {
  const { result } = renderHook(() => useNoSpectator(params));
  console.log("results", result.current);
  const p2 = result.current[1].p2;
  p2.forEach((x, idx) => {
    expect(x).toBe(CorrectTeam.p2[idx]);
  });
});
