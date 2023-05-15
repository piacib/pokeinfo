import React, { useEffect, useState } from "react";
import { DamageContainer } from "./DamageDisplay.styles";
import { damageCalculator } from "../../functions";
import { LoadingScreen } from "../LoadingScreen";
import { TypeName, TypeNamesArr } from "../../types";
import EffectivnessDisplay from "../EffectivnessDisplay/EffectivnessDisplay";
type TypesArrayProp = TypeName[] | null;

interface EffectObj {
  0: TypeName[];
  0.25: TypeName[];
  0.5: TypeName[];
  2: TypeName[];
  4: TypeName[];
}
interface DamageDisplayProps {
  typesArray: TypesArrayProp;
}
const DamageDisplay: React.FC<DamageDisplayProps> = ({ typesArray }) => {
  const [effectivnessObj, seteffectivnessObj] = useState(
    emptyEffectivnessObj(),
  );

  useEffect(() => {
    const tempDamageObj = effectivnessObjGenerator(typesArray);
    seteffectivnessObj(tempDamageObj);
  }, [typesArray]);

  return (
    <DamageContainer>
      <EffectivnessDisplay
        damage={"0"}
        effectivenessArray={effectivnessObj[0]}
      />
      <EffectivnessDisplay
        damage={"¼"}
        effectivenessArray={effectivnessObj[0.25]}
      />
      <EffectivnessDisplay
        damage={"½"}
        effectivenessArray={effectivnessObj[0.5]}
      />
      <EffectivnessDisplay
        damage={"2"}
        effectivenessArray={effectivnessObj[2]}
      />
      <EffectivnessDisplay
        damage={"4"}
        effectivenessArray={effectivnessObj[4]}
      />
    </DamageContainer>
  );
};

export default DamageDisplay;
const emptyEffectivnessObj = (): EffectObj => {
  return {
    0: [],
    0.25: [],
    0.5: [],
    2: [],
    4: [],
  };
};
const effectivnessObjGenerator = (typesArray: TypesArrayProp) => {
  let effect = emptyEffectivnessObj();
  if (typesArray && typesArray.length) {
    const typeDamageObj = damageCalculator(typesArray);
    TypeNamesArr.forEach((x) => {
      if (typeDamageObj) {
        if (typeDamageObj[x] === 0) {
          effect[0].push(x);
        } else if (typeDamageObj[x] === 0.25) {
          effect[0.25].push(x);
        } else if (typeDamageObj[x] === 0.5) {
          effect[0.5].push(x);
        } else if (typeDamageObj[x] === 2) {
          effect[2].push(x);
        } else if (typeDamageObj[x] === 4) {
          effect[4].push(x);
        }
      }
    });
  }
  return effect;
};
