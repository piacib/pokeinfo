import React, { useState } from "react";
import QuizOptions from "./QuizOptions/QuizOption";
import Question from "./Question/Question";
import Answers from "./Answer/Answer";
import Results from "./Results/Results";
import { TypeName } from "../../types";
import { TypeWriterContainer } from "../../TypeWriterContainer.style";
import styled from "styled-components";
import useQuiz from "../../hooks/useQuiz/useQuiz";

const EffectivenessQuiz = () => {
  const [answerSelected, setAnswerSelected] = useState<number | null>(null);
  const data = useQuiz(answerSelected);
  // const [results, setResults] = useState();
  console.log("answer", data.results);
  return (
    <>
      {data.moveType && data.answer !== null ? (
        <QuizContainer>
          <TypeWriterContainer>
            <h1>Effectiveness Quiz</h1>
          </TypeWriterContainer>
          <QuizOptions />

          <Question
            moveType={data.moveType}
            pokemonType={data.attackPokemonType}
          />
          <Answers
            answer={data.answer}
            reset={(choice: number) => {
              setAnswerSelected(choice);
              data.generateData();
            }}
          />

          {/* <Results data={data.results} /> */}
        </QuizContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default EffectivenessQuiz;

const QuizContainer = styled.div`
  display: grid;
  place-items: center;
`;

// start quiz button
// 15 questions
// store results
// display results at end
