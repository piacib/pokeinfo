import { TypeName, isRandomBattleReturn } from "./types";
import { Dex } from "@pkmn/dex";

export const isRandomBattle = (url: string): isRandomBattleReturn => {
  const urlArr = url.split("-");
  const gen = urlArr.filter((x) => x.startsWith("gen"));
  if (!gen.length) {
    return null;
  }
  const str = gen[0];
  if (str && str.includes("random")) {
    return str;
  }
  return false;
};
export const dexSearchPrepper = (str: string): string => {
  return str.toLowerCase().replace(/\W+/g, "");
};

const moveFetchPrepper = (move: string) => {
  return move.replace(" ", "-").toLowerCase();
};
interface MoveResponse {
  move: string;
  type: string;
  category: string;
  power: number;
  accuracy: number;
}

type TypeColorObjType = {
  // [Type in TypeName]: string;
  [key in string]: string;
};
export const typeColorConverter: TypeColorObjType = {
  Normal: "rgb(168, 167, 120)",
  Ground: "rgb(224, 192, 104)",
  Rock: "rgb(163, 140, 33)",
  Bug: "rgb(114, 159, 62)",
  Ghost: "rgb(123, 98, 163)",
  Steel: "rgb(158, 183, 184)",
  Fighting: "rgb(192, 48, 40)",
  Fire: "rgb(247, 125, 37)",
  Flying: "rgb(168, 143, 239)",
  Water: "rgb(69, 146, 196)",
  Poison: "rgb(185, 127, 201)",
  Grass: "rgb(155, 204, 80)",
  Electric: "rgb(248, 208, 48)",
  Psychic: "rgb(243, 102, 185)",
  Ice: "rgb(152, 216, 216)",
  Dragon: "rgb(112, 56, 248)",
  Dark: "rgb(112, 88, 72)",
  Fairy: "rgb(238, 153, 172)",
  "???": "rgb(117, 117, 117)",
};

const Types = Dex.data.Types;
const damageAdjustor = (objectEntries: [string, number]): [string, number] => {
  if (!objectEntries[1]) {
    return [objectEntries[0], 1];
  }
  return [
    objectEntries[0],
    Math.abs((objectEntries[1] - 3) / -objectEntries[1]),
  ];
};

// creates damage obj from arr of entries in type.damageTaken object
const damageCalculatorOneType = (type: TypeName) => {
  const damageTaken = Object.entries(Types[type.toLowerCase()].damageTaken);
  const damageConverted = damageTaken.map((x) => damageAdjustor(x));
  return Object.fromEntries(damageConverted);
};

type TypeDamageObj = {
  [Type in TypeName]: number;
};
export const damageCalculator = (typesArray: TypeName[]) => {
  if (typesArray.length === 1) {
    return damageCalculatorOneType(typesArray[0]) as TypeDamageObj;
  }
  const type1 = damageCalculatorOneType(typesArray[0]);
  const type2 = damageCalculatorOneType(typesArray[1]);
  const types = Object.keys(type1);
  const damageObjectEntries = types.map((type) => [
    type,
    type1[type] * type2[type],
  ]);
  return Object.fromEntries(damageObjectEntries) as TypeDamageObj;
};
export const displayHandler = (
  spectatorsAllowed: boolean,
  isInExtension: boolean,
  userTeam: string | null,
  opponentsTeam: string | null,
): boolean => {
  if (spectatorsAllowed) {
    // return teamDisplay
    return true;
  }
  if (!spectatorsAllowed && isInExtension) {
    if (userTeam && opponentsTeam) {
      // in extension and url params includes teams.
      // display teamDisplay
      return true;
    }
    // in extension but no team included. (old extension)
    // display search
    return false;
  }

  return false;
};
