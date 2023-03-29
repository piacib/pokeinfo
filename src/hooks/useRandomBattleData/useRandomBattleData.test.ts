import { battleTypeCheck } from "./useRandomBattleData";
const noSpectatorBattleId = "gen9randombattle-1831784642";
const noSpectatorTestObj = {
  data: noSpectatorBattleId,
  result: "gen9randombattle",
};
test("battleTypeCheck works with no spectator battles", () => {
  const result = battleTypeCheck(noSpectatorTestObj.data);
  expect(result).toEqual(noSpectatorTestObj.result);
});
const spectatorTestObj = {
  data: "gen9randombattle",
  result: "gen9randombattle",
};
test("battleTypeCheck works with spectator battles", () => {
  const result = battleTypeCheck(spectatorTestObj.data);
  expect(result).toEqual(spectatorTestObj.result);
});
const noSpectatorUnratedTestObj = {
  data: "gen9unratedrandombattle-1831799736",
  result: "gen9randombattle",
};
test("battleTypeCheck works with no spectator unrated battles", () => {
  const result = battleTypeCheck(noSpectatorUnratedTestObj.data);
  expect(result).toEqual(noSpectatorUnratedTestObj.result);
});
const spectatorUnratedTestObj = {
  data: "gen9unratedrandombattle",
  result: "gen9randombattle",
};
test("battleTypeCheck works with spectator unrated battles", () => {
  const result = battleTypeCheck(spectatorUnratedTestObj.data);
  expect(result).toEqual(spectatorUnratedTestObj.result);
});

const noSpectatorBlitzTestObj = {
  data: "gen9randombattleblitz-1831800105",
  result: "gen9randombattle",
};
test("battleTypeCheck works with no spectator blitz battles", () => {
  const result = battleTypeCheck(noSpectatorBlitzTestObj.data);
  expect(result).toEqual(noSpectatorBlitzTestObj.result);
});
const spectatorBlitzTestObj = {
  data: "gen9randombattleblitz",
  result: "gen9randombattle",
};
test("battleTypeCheck works with spectator blitz battles", () => {
  const result = battleTypeCheck(spectatorBlitzTestObj.data);
  expect(result).toEqual(spectatorBlitzTestObj.result);
});
