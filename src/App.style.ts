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

interface RefProp extends React.FC {
  changeDisplay?: boolean;
}
export const AppDisplay = styled.div<RefProp>`
  min-width: 100px;
  width: 95%;
  max-width: 100rem;
  margin: 0 auto;
  padding: 1rem 0.8rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.2rem;
  background-color: ${(props) => props.theme.backgroundColor};
  @media (min-width: ${(props) => props.theme.media.mediumScreen}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
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
  box-shadow: ${(props) => props.theme.boxShadow};
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
export const PokeInfo = styled.h1`
  font-size: 36px;
  @media (min-width: 24rem) {
    font-size: 5.5rem;
  }
  @media (min-width: 37.5rem) {
    font-size: 6rem;
  }
  @media (min-width: 62rem) {
    font-size: 8rem;
  }
`;
