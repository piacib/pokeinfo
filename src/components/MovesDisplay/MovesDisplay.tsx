import React from "react";
import {
  MoveBtn,
  MoveInfo,
  MoveType,
  MoveDescription,
  MoveProperty,
  MovesContainer,
  HiddenMoveText,
} from "./MovesDisplay.style";
import { MoveData } from "@pkmn/dex-types";

interface MovesDisplayProps {
  movesData: MoveData[];
}
/**  movesData: MoveData[ ]  @pkmn/dex-types */
const MovesDisplay: React.FC<MovesDisplayProps> = ({ movesData }) => {
  return (
    <MovesContainer>
      <h3>Moves:</h3>
      {movesData?.map(
        (move) =>
          move && (
            <MoveBtn background={move.type} key={move.name}>
              <p>{move.name}</p>
              <HiddenMoveText>
                <MoveInfoPopUp move={move} />
              </HiddenMoveText>
            </MoveBtn>
          ),
      )}
    </MovesContainer>
  );
};
export default MovesDisplay;
interface MovesProps {
  move: MoveData;
}
const MoveInfoPopUp: React.FC<MovesProps> = ({ move }) => {
  return (
    <MoveInfo>
      <MoveDescription>{move.shortDesc}</MoveDescription>
      <MoveType background={move.type}>{move.type}</MoveType>
      {typeof move.accuracy === "number" && (
        <MoveProperty>
          <span>Accuracy: </span>
          <span>{move.accuracy}%</span>
        </MoveProperty>
      )}
      {Boolean(move.priority) && (
        <MoveProperty>
          <span>Priority: </span>
          <span>{move.priority}</span>
        </MoveProperty>
      )}
      {Boolean(move.basePower) && (
        <MoveProperty>
          <span>Power: </span>
          <span>{move.basePower}</span>
        </MoveProperty>
      )}
      <MoveProperty>
        <span>Category: </span>
        <span>{move.category}</span>
      </MoveProperty>
    </MoveInfo>
  );
};
