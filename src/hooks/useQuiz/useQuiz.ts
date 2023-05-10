import { TypeName } from "@pkmn/dex";
import { useEffect, useState } from "react";
import { damageCalculator } from "../../functions";

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
function randomPokemonType(): TypeName {
  const entry = pkmTypes[Math.floor(Math.random() * pkmTypes.length)];
  return entry;
}
const singleOrDoubleType = () => Math.floor(Math.random() * 2) + 1;
// const entry = (length = pkmTypes.length) => Math.floor(Math.random() * length);
const generateTypeArr = (arrLength = singleOrDoubleType()) => {
  if (arrLength === 1) {
    return [randomPokemonType()];
  }

  let temp = [randomPokemonType(), randomPokemonType()];
  while (temp[0] === temp[1]) {
    temp = [randomPokemonType(), randomPokemonType()];
  }
  return temp;
};
const useQuiz = (answerSelected: number | null) => {
  const [answer, setAnswer] = useState<number | null>(null);
  const [moveType, setMoveType] = useState<TypeName | null>(null);
  const [attackPokemonType, setAttackPokemonType] = useState<TypeName[]>([]);
  const results = useResults({
    answer,
    moveType,
    attackPokemonType,
    answerSelected,
  });
  const generateData = () => {
    setTimeout(() => {
      const tempMoveType = randomPokemonType();
      setMoveType(tempMoveType);
      const tempTypeArr = generateTypeArr();
      setAttackPokemonType(tempTypeArr);
      setAnswer(damageCalculator(tempTypeArr)[tempMoveType]);
    }, 500);
  };
  useEffect(() => generateData(), []);
  return {
    answer,
    moveType,
    attackPokemonType,
    results,
    generateData,
  };
};
interface ResultProps {
  answer: number | null;
  answerSelected: number | null;
  moveType: TypeName | null;
  attackPokemonType: TypeName[];
}
export interface Result extends ResultProps {
  moveType: TypeName;
  attackPokemonType: TypeName[];
  correct: boolean;
}

const useResults = ({
  answer,
  answerSelected,
  moveType,
  attackPokemonType,
}: ResultProps) => {
  const [results, setResults] = useState<Result[]>([]);
  const addResult = (correct: boolean) => {
    if (!answer || !answerSelected || !moveType) {
      return;
    }
    const obj = {
      correct,
      answer,
      answerSelected,
      moveType,
      attackPokemonType,
    };
    setResults([...results, obj]);
  };

  useEffect(() => {
    if (!answer || !answerSelected || !moveType) {
      return;
    }

    if (answerSelected === answer) {
      console.log("correct!");
      addResult(true);
    }
    if (answerSelected !== answer) {
      console.log("WRONG!");
      addResult(false);
    }
  }, [answerSelected]);
  return results;
};

export default useQuiz;
