import styled from "styled-components";
import {
  FlexColumnCenteredDiv,
  FlexRowDiv,
} from "../../../styles/Components.style";
export const QuestionContainer = styled(FlexColumnCenteredDiv)`
  width: 100%;
  span {
    padding: 0 1rem;
  }
  @media screen and (min-width: 25rem) {
    flex-direction: row;
  }
`;
export const AttackPokemon = styled(FlexRowDiv)``;
