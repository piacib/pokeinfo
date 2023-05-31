import styled, { css } from "styled-components";
import { TypeBox } from "../../EffectivnessDisplay/EffectivnessDisplay.style";
import { PillDesign } from "../../../App.style";
import {
  FlexRowHorizCenteredDiv,
  FlexRowCenteredDiv,
} from "../../../styles/Components.style";
export const ResultRow = styled.tr``;
const fontCss = css`
  font-size: 0.8rem;
  @media screen and (min-width: ${(props) => props.theme.media.mediumScreen}) {
    font-size: 1.2rem;
  }
`;
export const ResutTable = styled.table`
  border-spacing: 0.5rem;
  margin: 0 1rem;
  ${fontCss}
`;
export const ResultCell = styled.td``;
interface Props {
  correct?: boolean;
}
export const AnswerContainer = styled.div`
  width: 100%;
  justify-content: flex-start;
  display: flex;
  align-items: flex-start;
  padding: 0 1rem;
`;
export const ChoiceContainer = styled(FlexRowHorizCenteredDiv)<Props>`
  width: 100%;
  justify-content: center;
  background: ${(props) => (props.correct ? "green" : "red")};
  ${PillDesign}
`;
export const PokemonTypeCell = styled(FlexRowCenteredDiv)`
  max-width: 15rem;
  flex-wrap: wrap;
`;
export const ResultTypedBox = styled(TypeBox)`
  display: grid;
  place-items: center;
  ${fontCss}
`;
export const TableColumn = styled.th``;
