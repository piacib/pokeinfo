import styled from "styled-components";
import {
  HiddenPropertyText,
  hoverDisplayCss,
  PropertyDisplay,
} from "../PokemonDataDisplay/DataDisplay.style";
import {
  PillDesign,
  TypeColorBackground,
  TypeColoredComponent,
} from "../../App.style";
export const HiddenMoveText = styled(HiddenPropertyText)``;
export const MoveBtn = styled(TypeColoredComponent)`
  position: relative;
  ${hoverDisplayCss}
  ${PillDesign}

  &:hover ${HiddenMoveText} {
    bottom: 100%;
    right: 0;
    width: 11rem;
    padding: ${(props) => props.theme.padding.medium};
    font-size: 1.1rem;
    margin: 5px 0;
    @media (max-width: ${(props) => props.theme.media.mediumScreen}) {
      left: 0;
      max-width: 130px;
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

export const MoveProperty = styled.li``;
export const MoveDescription = styled(MoveProperty)`
  white-space: initial;
`;
export const MovesContainer = styled(PropertyDisplay)`
  display: flex;
  position: relative;
  padding-right: 4rem;
`;

export const MoveType = styled(MoveProperty)`
  ${TypeColorBackground}
  padding: ${(props) => props.theme.padding.small};
  width: fit-content;
  margin: 0 auto;
`;
