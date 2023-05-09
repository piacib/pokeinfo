import React from "react";
import { Result } from "../EffectivenessQuiz";
import { TypeBox } from "../../EffectivnessDisplay/EffectivnessDisplay.style";

interface Props {
  data: Result[];
}
const Results = ({ data }: Props) => {
  return (
    <div>
      Results
      {data.map((x) => (
        <span>
          <span>{x.correct ? "corrrect" : "incorrect"}: </span>
          <TypeBox background={x.moveType}>{x.moveType}</TypeBox>
          <span>attacks</span>
          {x.attackPokemonType.map((x) => (
            <TypeBox background={x}>{x}</TypeBox>
          ))}
          <span>{x.answer}</span>
        </span>
      ))}
    </div>
  );
};

export default Results;
