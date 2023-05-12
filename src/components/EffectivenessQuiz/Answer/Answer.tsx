import React, { useState } from "react";
import { quizLength } from "../EffectivenessQuiz";
import {
  AnswerChoice,
  AnswerContainer,
  ChoiceContainer,
  TrackingContainer,
} from "./Answer.style";

const choices = [0, 1 / 4, 1 / 2, 1, 2, 4];

const Answer = ({
  answer,
  reset,
}: {
  answer: number;
  reset: (choice: number) => void;
}) => {
  const [count, setCount] = useState(0);
  const [correctChoices, setCorrectChoices] = useState(0);
  const handleClick = (choice: number) => {
    setCount(count + 1);
    reset(choice);

    if (choice === answer) {
      setCorrectChoices(correctChoices + 1);
      console.log("success");
      return;
    }
    console.log("you dumb bitch it was " + answer);
  };

  return (
    <>
      <AnswerContainer>
        <ChoiceContainer>
          {choices.map((choice) => (
            <AnswerChoice
              key={choice}
              isCorrect={choice === answer}
              onClick={() => handleClick(choice)}
            >
              {choice}
            </AnswerChoice>
          ))}
        </ChoiceContainer>
      </AnswerContainer>
      <TrackingContainer>
        <Tracker count={count} />
        <Correct count={correctChoices} />
      </TrackingContainer>
    </>
  );
};

export default Answer;

const Tracker = ({ count }: { count: number }) => {
  return (
    <div>
      {count}/{quizLength}
    </div>
  );
};
const Correct = ({ count }: { count: number }) => {
  return <div>{count}pts</div>;
};
