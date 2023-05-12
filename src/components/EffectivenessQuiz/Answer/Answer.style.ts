import styled from "styled-components";
import { PillDesign } from "../../../App.style";
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
export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
export const ChoiceContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const TrackingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
