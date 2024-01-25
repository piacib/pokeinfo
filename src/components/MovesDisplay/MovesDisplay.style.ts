import styled from "styled-components";
import {
  HiddenPropertyText,
  hoverDisplayCss,
  PropertyDisplay,
} from "../PokemonDataDisplay/DataDisplay.style";
import { PillDesign, TypeColoredComponent } from "../../App.style";
import { TypeColorInterface } from "../../types";
import { typeColorConverter } from "../../functions";
export const HiddenMoveText = styled(HiddenPropertyText)``;
export const MoveBtn = styled(TypeColoredComponent)`
  position: relative;
  ${hoverDisplayCss}
  ${PillDesign}

  &:hover ${HiddenMoveText} {
    bottom: 100%;
    right: 0;
    padding: ${(props) => props.theme.padding.medium};
    font-size: 1.1rem;
    margin: 5px 0;
    left: 0;
    width: 130px;
    @media (min-width: ${(props) => props.theme.media.mediumScreen}) {
      width: 11rem;
      left: auto;
    }
  }
  p {
    margin: 0.3rem 0;
    white-space: nowrap;
  }
  border: none;
`;
export const MoveInfo = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const MoveProperty = styled.li<TypeColorInterface>``;
export const MoveDescription = styled(MoveProperty)`
  white-space: initial;
`;
export const MovesContainer = styled(PropertyDisplay)`
  display: flex;
  position: relative;
`;

export const MoveType = styled(MoveProperty)`
  background-color: ${(props) => typeColorConverter[props.background]};
  padding: ${(props) => props.theme.padding.small};
  width: fit-content;
  margin: 0 auto;
`;
