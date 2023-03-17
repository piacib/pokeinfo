import React from "react";
import styled, { css } from "styled-components";
import { typeColorConverter } from "./functions";
import { TypeColorInterface } from "./types";
export const ModeToggleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  h3 {
    text-transform: capitalize;
  }
`;
export const Button = styled.button`
  border: none;
  white-space: nowrap;
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.pokedexRed};
  /* width: 7rem; */
  font-size: 0.8rem;
`;
export const BattleButton = styled.button`
  border-radius: 20px;
  width: fit-content;
  /* position: absolute; */

  top: 0;
`;
interface RefProp extends React.FC {
  changeDisplay?: boolean;
}
export const AppDisplay = styled.div<RefProp>`
  min-width: 100px;
  padding: 1rem 0.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  @media (max-width: ${(props) => props.theme.media.mediumScreen}) {
    display: flex;
    flex-direction: column;
  }
  background-color: ${(props) => props.theme.backgroundColor};
  /* color: ${(props) => props.theme.fontColor}; */
`;
export const TypeColorBackground = css<TypeColorInterface>`
  background-color: ${(props) => typeColorConverter[props.background]};
`;
export const TypeColoredComponent = styled.div`
  ${TypeColorBackground}
`;
export const PillDesign = css`
  margin: 5px;
  padding: 0.1rem 0.25rem;
  border-radius: 10px;
  font-size: 1rem;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px 0 10px;
`;
export const Spacer = styled.div`
  width: 100%;
  height: 40px;
`;
