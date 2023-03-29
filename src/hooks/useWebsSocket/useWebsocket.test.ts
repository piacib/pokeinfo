import {
  getBuiltTeam,
  getSwappedPkm,
  getSafariBuiltTeam,
  getSafariSwappedPkm,
} from "./websocket.functions";
const randomTest = {
  test: ">battle-gen9randombattle-1776630292|init|battle|title|testplayerr4354 vs. bentanamo10|j|☆testplayerr4354|j|☆bentanamo10|t:|1674089898|gametype|singles|player|p1|testplayerr4354|170||player|p2|bentanamo10|102||teamsize|p1|6|teamsize|p2|6|gen|9|tier|[Gen 9] Random Battle|rule|Species Clause: Limit one of each Pokémon|rule|HP Percentage Mod: HP is shown in percentages|rule|Sleep Clause Mod: Limit one foe put to sleep||t:|1674089898|start|switch|p1a: Basculin|Basculin, L86, M|100/100|switch|p2a: Floatzel|Floatzel, L85, M|100/100|turn|1|inactive|Battle timer is ON: inactive players will automatically lose when time's up. (requested by bentanamo10)|inactiveoff|Battle timer is now OFF.||t:|1674090121|switch|p1a: Klawf|Klawf, L83, M|100/100|move|p2a: Floatzel|Ice Spinner|p1a: Klawf|-damage|p1a: Klawf|72/100|-damage|p2a: Floatzel|91/100|[from] item: Life Orb||upkeep|turn|2||t:|1674090211|switch|p2a: Iron Moth|Iron Moth, L80|100/100|move|p1a: Klawf|Stone Edge|p2a: Iron Moth|-supereffective|p2a: Iron Moth|-damage|p2a: Iron Moth|0 fnt|faint|p2a: Iron Moth|-end|p2a: Iron Moth|Quark Drive|[silent]||upkeep||t:|1674091106|switch|p2a: Talonflame|Talonflame, L85, M|100/100|turn|3||t:|1674091116|-terastallize|p2a: Talonflame|Ground|move|p2a: Talonflame|Brave Bird|p1a: Klawf|-resisted|p1a: Klawf|-damage|p1a: Klawf|54/100|-damage|p2a: Talonflame|95/100|[from] Recoil|move|p1a: Klawf|Stone Edge|p2a: Talonflame|-resisted|p2a: Talonflame|-damage|p2a: Talonflame|72/100||upkeep|turn|4||t:|1674091146|move|p2a: Talonflame|Roost|p2a: Talonflame|-heal|p2a: Talonflame|100/100|move|p1a: Klawf|Stone Edge|p2a: Talonflame|-resisted|p2a: Talonflame|-damage|p2a: Talonflame|77/100||upkeep|turn|5",
  results: {
    p1: ["Basculin", "Klawf"],
    p2: ["Floatzel", "Iron Moth", "Talonflame"],
  },
};
const ouTest = {
  test: "|clearpoke|poke|p1|Amoonguss, M||poke|p1|Iron Moth||poke|p1|Iron Valiant||poke|p1|Dondozo, M||poke|p1|Meowscarada, F||poke|p1|Orthworm, M||poke|p2|Dragonite, F||poke|p2|Iron Moth||poke|p2|Iron Valiant||poke|p2|Azumarill, M||poke|p2|Meowscarada, F||poke|p2|Orthworm, M||teampreview",
  results: {
    p1: [
      "Amoonguss",
      "Iron Moth",
      "Iron Valiant",
      "Dondozo",
      "Meowscarada",
      "Orthworm",
    ],
    p2: [
      "Dragonite",
      "Iron Moth",
      "Iron Valiant",
      "Azumarill",
      "Meowscarada",
      "Orthworm",
    ],
  },
};
test("non random battle selector works", () => {
  const data = ouTest;

  const teams = getBuiltTeam(data.test);
  expect(teams).toBeTruthy();
  if (teams) {
    teams["p1"].forEach((pkm, idx) =>
      expect(pkm).toEqual(data.results["p1"][idx]),
    );
  }
  expect(teams).toBeTruthy();
  if (teams) {
    expect(teams["p1"]).toStrictEqual(data.results["p1"]);
    expect(teams["p2"]).toStrictEqual(data.results["p2"]);
  }
});

test("safari support-- non random battle selector works", () => {
  const data = ouTest;
  const teams = getSafariBuiltTeam(data.test);
  if (teams) {
    teams["p1"].forEach((pkm, idx) =>
      expect(pkm).toEqual(data.results["p1"][idx]),
    );
  }
  expect(teams).toBeTruthy();
  if (teams) {
    expect(teams["p1"]).toStrictEqual(data.results["p1"]);
    expect(teams["p2"]).toStrictEqual(data.results["p2"]);
  }
});

test("random battle selector works", () => {
  const data = randomTest;
  const teams = getSwappedPkm(data.test);
  expect(teams).toBeTruthy();
  if (teams) {
    expect(teams["p1"]).toStrictEqual(data.results["p1"]);
    expect(teams["p2"]).toStrictEqual(data.results["p2"]);
  }
});
test("safari support-- random battle selector works", () => {
  const data = randomTest;

  const teams = getSafariSwappedPkm(data.test);
  expect(teams).toBeTruthy();
  if (teams) {
    expect(teams["p1"]).toStrictEqual(data.results["p1"]);
    expect(teams["p2"]).toStrictEqual(data.results["p2"]);
  }
});
