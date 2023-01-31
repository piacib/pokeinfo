import React from "react";
import styled, { css } from "styled-components";
import { typeColorConverter } from "./functions";
import { TypeColorInterface } from "./types";

export const Button = styled.button`
  border: none;
  white-space: 0;
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.pokedexRed};
  position: sticky;
  top: 0;
  align-self: flex-end;
  width: 7rem;
`;
interface RefProp extends React.FC {
  changeDisplay?: boolean;
}
export const AppDisplay = styled.div<RefProp>`
  min-width: 100px;
  padding: 2rem 0;
  display: grid;
  grid-gap: 15px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
  min-height: 250px;
  font-size: 12px;
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
