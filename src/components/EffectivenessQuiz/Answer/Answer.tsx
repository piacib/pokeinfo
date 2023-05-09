import React from "react";
import styled from "styled-components";
import { PillDesign } from "../../../App.style";
interface Props {
  isCorrect: boolean;
}
const AnswerChoice = styled.div<Props>`
  ${PillDesign}
  width:2rem;
  text-align: center;
  border: 2px solid black;
  cursor: pointer;
  :hover {
    background: black;
    color: white;
  }
  :active {
    background: ${(props) => (props.isCorrect ? "green" : "red")};
  }
  :visited {
    background: ${(props) => (props.isCorrect ? "green" : "red")};
  }
`;
const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Answer = ({
  answer,
  reset,
}: {
  answer: number;
  reset: (choice: number) => void;
}) => {
  const choices = [0, 1 / 4, 1 / 2, 1, 2, 4];
  const handleClick = (choice: number) => {
    reset(choice);
    if (choice === answer) {
      console.log("success");
      return;
    }
    console.log("you dumb bitch it was " + answer);
  };

  return (
    <AnswerContainer>
      {choices.map((choice) => (
        <AnswerChoice
          key={choice}
          isCorrect={choice === answer}
          onClick={() => handleClick(choice)}
        >
          {choice}
        </AnswerChoice>
      ))}
    </AnswerContainer>
  );
};

export default Answer;
