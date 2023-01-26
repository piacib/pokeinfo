import React from "react";
import styled, { css } from "styled-components";
import { typeColorConverter } from "./functions";
import { TypeColorInterface } from "./types";

export const Button = styled.button`
  border: none;
  white-space: 0;
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.pokedexRed};
  position: absolute;
  left: 5px;
  top: 25px;
`;
interface RefProp extends React.FC {
  changeDisplay?: boolean;
}
export const AppDisplay = styled.div<RefProp>`
  min-width: 100px;
  padding: 36px 8px 0;
  display: ${(props) => (props.changeDisplay ? "flex" : "grid")};
  min-height: 250px;
  flex-direction: column;
  font-size: 12px;
  grid-gap: 15px;
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
