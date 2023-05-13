import { TypeName } from "@pkmn/dex";
import { TypeBox } from "../../EffectivnessDisplay/EffectivnessDisplay.style";
import { QuestionContainer, AttackPokemon } from "./Questions.style";
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
      <AttackPokemon>
        {pokemonType.map((x) => (
          <TypeBox key={x} background={x}>
            {x}
          </TypeBox>
        ))}
      </AttackPokemon>
    </QuestionContainer>
  );
};

export default Question;
