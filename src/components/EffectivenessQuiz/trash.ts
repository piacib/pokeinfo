import { Dex, TypeName } from "@pkmn/dex";

export enum PokemonType {
  Normal = "Normal",
  Ground = "Ground",
  Rock = "Rock",
  Bug = "Bug",
  Ghost = "Ghost",
  Steel = "Steel",
  Fighting = "Fighting",
  Fire = "Fire",
  Flying = "Flying",
  Water = "Water",
  Poison = "Poison",
  Grass = "Grass",
  Electric = "Electric",
  Psychic = "Psychic",
  Ice = "Ice",
  Dragon = "Dragon",
  Dark = "Dark",
  Fairy = "Fairy",
}
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
const damageCalculatorOneType = (type: PokemonType) => {
  const damageTaken = Object.entries(Types[type.toLowerCase()].damageTaken);
  const damageConverted = damageTaken.map((x) => damageAdjustor(x));
  return Object.fromEntries(damageConverted);
};

const damageCalculator = (typesArray: PokemonType[]) => {
  if (typesArray.length === 1) {
    return damageCalculatorOneType(typesArray[0]);
  }
  const type1 = damageCalculatorOneType(typesArray[0]);
  const type2 = damageCalculatorOneType(typesArray[1]);
  const types = Object.keys(type1);
  const damageObjectEntries = types.map((type) => [
    type,
    type1[type] * type2[type],
  ]);
  return Object.fromEntries(damageObjectEntries);
};

const pkmTypes: TypeName[] = [
  "Normal",
  "Ground",
  "Rock",
  "Bug",
  "Ghost",
  "Steel",
  "Fighting",
  "Fire",
  "Flying",
  "Water",
  "Poison",
  "Grass",
  "Electric",
  "Psychic",
  "Ice",
  "Dragon",
  "Dark",
  "Fairy",
];
function randomPokemonType(): PokemonType {
  const values = Object.keys(PokemonType);
  const valueNames = values.slice(values.length / 2);
  const enumKey = valueNames[Math.floor(Math.random() * valueNames.length)];
  const entry = enumKey as unknown as PokemonType;
  return entry;
}
const singleOrDoubleType = () => Math.floor(Math.random() * 2) + 1;
// const entry = (length = pkmTypes.length) => Math.floor(Math.random() * length);
const generateTypeArr = (arrLength = singleOrDoubleType()) => {
  console.log(
    randomPokemonType(),
    randomPokemonType(),
    randomPokemonType(),
    randomPokemonType(),
  );
  if (arrLength === 1) {
    return [randomPokemonType()];
  }

  let temp: PokemonType[] = [randomPokemonType(), randomPokemonType()];
  while (temp[0] === temp[1]) {
    temp = [randomPokemonType(), randomPokemonType()];
  }
  return temp;
};
