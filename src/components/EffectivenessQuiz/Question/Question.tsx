import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { damageCalculator } from "../../../functions";
import { TypeName } from "@pkmn/dex";
import { TypeColoredComponent } from "../../../App.style";
// import { PokemonType } from "../../../pages/EffectivenessQuiz";

const Type = styled(TypeColoredComponent)`
  padding: 0.2rem 1rem;
  height: fit-content;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
const TypeBox = styled(Type)`
  width: 4rem;
  height: 2rem;
  justify-content: center;
  font-family: "VT323";
`;
const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  span {
    padding: 0 1rem;
    /* font-family: "VT323"; */
  }
`;
const Question = ({
  moveType,
  pokemonType,
}: {
  moveType: TypeName;
  pokemonType: TypeName[];
}) => {
  return (
    <QuestionContainer>
      <TypeBox background={moveType}>{moveType}</TypeBox>
      <span>attacks</span>
      {pokemonType.map((x) => (
        <TypeBox key={x} background={x}>
          {x}
        </TypeBox>
      ))}
    </QuestionContainer>
  );
};

export default Question;

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
