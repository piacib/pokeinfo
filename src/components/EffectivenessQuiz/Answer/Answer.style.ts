import styled from "styled-components";
import { PillDesign } from "../../../App.style";
import {
  FlexDiv,
  FlexRowDiv,
  FlexRowHorizCenteredDiv,
} from "../../../styles/Components.style";
interface Props {
  isCorrect: boolean;
}
export const AnswerChoice = styled.div<Props>`
  ${PillDesign}
  width:2rem;
  text-align: center;
  border: 2px solid black;
  cursor: pointer;
  box-shadow: none;
  :hover {
    background: black;
    color: white;
  }
`;
export const AnswerContainer = styled(FlexRowHorizCenteredDiv)`
  width: 100%;
`;
export const ChoiceContainer = styled(FlexRowDiv)`
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;
export const TrackingContainer = styled(FlexDiv)`
  justify-content: space-between;
  width: 100%;
`;
