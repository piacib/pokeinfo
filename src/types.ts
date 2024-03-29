export type isRandomBattleReturn = null | false | string;
export interface TypeColorInterface {
  background: TypeName | string;
}
export interface RolesData {
  [key: string]: {
    moves: string[];
    teraTypes: string[];
    abilities: string[];
    evs: { [key: string]: number };
    items: string[];
    ivs: { [key: string]: number };
  };
}
export interface PokemonData {
  moves: string[];
  abilities: string[];
  items: string[];
  roles?: RolesData;
}
export const TypeNamesArr = [
  "Normal",
  "Fighting",
  "Flying",
  "Poison",
  "Ground",
  "Rock",
  "Bug",
  "Ghost",
  "Steel",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Psychic",
  "Ice",
  "Dragon",
  "Dark",
  "Fairy",
  "Stellar",
  "???",
] as const;
type TypeTuple = typeof TypeNamesArr;
export type TypeName = TypeTuple[number];

export function isTypeName(value: string): value is TypeName {
  return TypeNamesArr.includes(value as TypeName);
}
