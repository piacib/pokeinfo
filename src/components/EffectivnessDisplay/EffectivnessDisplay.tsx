import React from "react";
import { TypeName } from "../../types";
import {
  DamageGroupContainer,
  Effectivness,
  Type,
  TypeBox,
} from "./EffectivnessDisplay.style";

interface EffectivnessProps {
  damage: "0" | "¼" | "½" | "2" | "4";
  effectivenessArray: TypeName[];
}
const EffectivnessDisplay: React.FC<EffectivnessProps> = ({
  damage,
  effectivenessArray,
}) => {
  return (
    <DamageGroupContainer>
      {effectivenessArray.map((x) => (
        <TypeBox key={x} background={x}>
          <Type>{x}</Type>
          <Effectivness>
            <span>{damage}</span>
            <span>x</span>
          </Effectivness>
        </TypeBox>
      ))}
    </DamageGroupContainer>
  );
};
export default EffectivnessDisplay;
