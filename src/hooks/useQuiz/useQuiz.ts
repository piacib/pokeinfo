import { TypeName } from "@pkmn/dex";
import { useEffect, useReducer, useState } from "react";
import { damageCalculator } from "../../functions";
import { quizLength } from "../../components/EffectivenessQuiz/EffectivenessQuiz";
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
const generateEntry = () => {
  const moveType = randomPokemonType();
  const tempTypeArr = generateTypeArr();
  const attackPokemonType = tempTypeArr;
  const answer = damageCalculator(tempTypeArr)[moveType] as number;
  return {
    answer,
    moveType,
    attackPokemonType,
  };
};
// const useQuiz = (answerSelected: number | null, quizLength = 15) => {
//   const [answer, setAnswer] = useState<number | null>(null);
//   const [moveType, setMoveType] = useState<TypeName | null>();
//   const [attackPokemonType, setAttackPokemonType] = useState<TypeName[]>([]);
//   const results = useResults({
//     answer,
//     moveType,
//     attackPokemonType,
//     answerSelected,
//   });

//   const generateData = () => {
//     setTimeout(() => {
//       const {
//         answer: tempAnswer,
//         moveType: tempMoveType,
//         attackPokemonType: tempAttackPokemonType,
//       } = generateEntry();
//       setMoveType(tempMoveType);
//       setAttackPokemonType(tempAttackPokemonType);
//       setAnswer(tempAnswer);
//     }, 500);
//   };

//   useEffect(() => {
//     generateData();
//   }, []);
//   return {
//     answer,
//     moveType,
//     attackPokemonType,
//     results,
//     generateData,
//   };
// };
// interface ResultProps {
//   answer: number | null;
//   answerSelected: number | null;
//   moveType: TypeName | null;
//   attackPokemonType: TypeName[];
// }
// export interface Result extends ResultProps {
//   moveType: TypeName;
//   attackPokemonType: TypeName[];
//   correct: boolean;
// }

// const useResults = ({
//   answer,
//   answerSelected,
//   moveType,
//   attackPokemonType,
// }: ResultProps) => {
//   const [results, setResults] = useState<Result[]>([]);
//   const addResult = (correct: boolean) => {
//     if (answer !== null || answerSelected !== null || !moveType) {
//       return;
//     }
//     const obj = {
//       correct,
//       answer,
//       answerSelected,
//       moveType,
//       attackPokemonType,
//     };
//     setResults([...results, obj]);
//   };

//   useEffect(() => {
//     // if (!answer || !answerSelected || !moveType) {
//     //   return;
//     // }

//     if (answerSelected === answer) {
//       console.log("correct!");
//       addResult(true);
//     }
//     if (answerSelected !== answer) {
//       console.log("WRONG!");
//       addResult(false);
//     }
//   }, [answerSelected]);
//   return results;
// };

// export default useQuiz;

interface QuizQuestion {
  answer: number;
  moveType: TypeName;
  attackPokemonType: TypeName[];
}
interface STATE {
  quiz: QuizQuestion[];
  currentEntry: number;
  quizComplete: boolean;
  results: RESULT[];
}
export enum ACTION_TYPE {
  GENERATE = "GENERATE",
  NEXT = "NEXT",
}
type ACTION = ACTION_GENERATE | ACTION_NEXT;
interface ACTION_GENERATE {
  type: ACTION_TYPE.GENERATE;
}
interface ACTION_NEXT {
  type: ACTION_TYPE.NEXT;
  payload: { answerSelected: number };
}

export interface RESULT extends QuizQuestion {
  answerSelected: number;
  // correct: boolean;
}
export const reducer = (state: STATE, action: ACTION) => {
  switch (action.type) {
    case ACTION_TYPE.GENERATE:
      console.log("dispatching generate");
      return {
        quiz: Array.apply(null, Array(quizLength)).map((x) => generateEntry()),
        currentEntry: 0,
        quizComplete: false,
        results: [],
      };
    case ACTION_TYPE.NEXT:
      console.log("dispatching next");
      const nextEntry = state.currentEntry + 1;
      const answerSelected = action.payload.answerSelected;
      const resultEntry: RESULT = {
        ...state.quiz[state.currentEntry],
        answerSelected,
      };
      const newResults = [...state.results, resultEntry];
      return {
        ...state,
        currentEntry: nextEntry,
        results: newResults,
        quizComplete: newResults.length === state.quiz.length,
      };
    default:
      return state;
  }
};
export const useQuizReducer = (quizLength: number = 15) => {
  const [quizState, dispatch] = useReducer(reducer, {
    quiz: [],
    currentEntry: 0,
    quizComplete: false,
    results: [],
  });
  useEffect(() => {
    dispatch({ type: ACTION_TYPE.GENERATE });
  }, []);
  const currentQuizQuestion = quizState.quiz[quizState.currentEntry];
  return { quizState, dispatch, currentQuizQuestion };
};
