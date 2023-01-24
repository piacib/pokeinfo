const showdownWs = "ws://sim.smogon.com:8000/showdown/websocket";
export const testMessage =
  ">battle-gen9randombattle-1776630292|init|battle|title|testplayerr4354 vs. bentanamo10|j|☆testplayerr4354|j|☆bentanamo10|t:|1674089898|gametype|singles|player|p1|testplayerr4354|170||player|p2|bentanamo10|102||teamsize|p1|6|teamsize|p2|6|gen|9|tier|[Gen 9] Random Battle|rule|Species Clause: Limit one of each Pokémon|rule|HP Percentage Mod: HP is shown in percentages|rule|Sleep Clause Mod: Limit one foe put to sleep||t:|1674089898|start|switch|p1a: Basculin|Basculin, L86, M|100/100|switch|p2a: Floatzel|Floatzel, L85, M|100/100|turn|1|inactive|Battle timer is ON: inactive players will automatically lose when time's up. (requested by bentanamo10)|inactiveoff|Battle timer is now OFF.||t:|1674090121|switch|p1a: Klawf|Klawf, L83, M|100/100|move|p2a: Floatzel|Ice Spinner|p1a: Klawf|-damage|p1a: Klawf|72/100|-damage|p2a: Floatzel|91/100|[from] item: Life Orb||upkeep|turn|2||t:|1674090211|switch|p2a: Iron Moth|Iron Moth, L80|100/100|move|p1a: Klawf|Stone Edge|p2a: Iron Moth|-supereffective|p2a: Iron Moth|-damage|p2a: Iron Moth|0 fnt|faint|p2a: Iron Moth|-end|p2a: Iron Moth|Quark Drive|[silent]||upkeep||t:|1674091106|switch|p2a: Talonflame|Talonflame, L85, M|100/100|turn|3||t:|1674091116|-terastallize|p2a: Talonflame|Ground|move|p2a: Talonflame|Brave Bird|p1a: Klawf|-resisted|p1a: Klawf|-damage|p1a: Klawf|54/100|-damage|p2a: Talonflame|95/100|[from] Recoil|move|p1a: Klawf|Stone Edge|p2a: Talonflame|-resisted|p2a: Talonflame|-damage|p2a: Talonflame|72/100||upkeep|turn|4||t:|1674091146|move|p2a: Talonflame|Roost|p2a: Talonflame|-heal|p2a: Talonflame|100/100|move|p1a: Klawf|Stone Edge|p2a: Talonflame|-resisted|p2a: Talonflame|-damage|p2a: Talonflame|77/100||upkeep|turn|5";
export const ouTestMessage =
  "|clearpoke|poke|p1|Amoonguss, M||poke|p1|Iron Moth||poke|p1|Iron Valiant||poke|p1|Dondozo, M||poke|p1|Meowscarada, F||poke|p1|Orthworm, M||poke|p2|Dragonite, F||poke|p2|Iron Moth||poke|p2|Iron Valiant||poke|p2|Azumarill, M||poke|p2|Meowscarada, F||poke|p2|Orthworm, M||teampreview";

export function getStringBetween(str: string, start: string, end: string) {
  const result = str.match(new RegExp(start + "(.*)" + end));
  if (!result) return null;
  return result[1];
}
export const getStartingPkm = (data: string, player = 1) => {
  const regExMatch1 = data.match(/(?<=p1a: )(.*?)(?=\|)/);
  const regExMatch2 = data.match(/(?<=p2a: )(.*?)(?=\|)/);

  if (regExMatch1 && regExMatch2 && regExMatch1[1] && regExMatch2[1]) {
    return [regExMatch1[1], regExMatch2[1]];
  }
  return null;
};
export function getFirstNumber(str: string) {
  const index = str.search(/[0-9]+/);

  return Number(str[index]);
}
export const getBattleType = (data: string) => {
  const match = data.match(/battle-(.*?)-/);
  if (match) {
    return match[1];
  }
  return null;
};
export const getBuiltTeam = (data: string) => {
  // gets text following p1| untill either a comma (which precedes gender) or |
  // used for any non random battle
  const p1Team = data.match(/(?<=p1\|)(.*?)(?=\||,)/g);
  const p2Team = data.match(/(?<=p2\|)(.*?)(?=\||,)/g);
  if (p1Team && p2Team) {
    return [p1Team, p2Team];
  }
};
// ** Slices data at last occurent of turn| then grabs the first digit
export const getTurnNumber = (data: string) => {
  const regExMatch = data.match(/\|turn\|(?!.*\|turn)/);
  if (!regExMatch) return;
  console.log(
    "turn number",
    getFirstNumber(data.slice(data.lastIndexOf("turn|"))),
  );
  const num = getFirstNumber(data.slice(data.lastIndexOf("turn|")));
  if (!num) return null;
  return num;
};

export const getSwappedPkm = (data: string) => {
  const regExMatch1 = data.match(/(?<=switch\|p1a: )(.*?)(?=\|)/g);
  const regExMatch2 = data.match(/(?<=switch\|p2a: )(.*?)(?=\|)/g);
  if (!regExMatch1 && !regExMatch2) {
    return false;
  }
  return { p1: regExMatch1, p2: regExMatch2 };
};
const abilityExample = "|-ability|p1a: Komala|Comatose";
export const getAbility = (data: string) => {
  const regExMatch1 = data.match(/(?<=-ability\|p1a: .*\|)(.*?)(?=\|)/g);
};
type PokemonData = {
  [key: string]: {
    abilities: string[];
    moves: string[];
  };
};
