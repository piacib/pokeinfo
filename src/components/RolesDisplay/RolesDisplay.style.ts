import styled from "styled-components";
import { PropertyDisplay } from "../PokemonDataDisplay/DataDisplay.style";
export const RolesBtn = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;
  border: 2px solid ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
  margin: 10px;
  box-shadow: ${(props) => props.theme.boxShadow};

  color: ${(props) => props.theme.fontColor};
  :hover {
    border: 2px solid red;
  }
`;
export const RolesContainer = styled(PropertyDisplay)`
  grid-column: 2;
  padding: 0;
  font-size: 0.8rem;
  @media (min-width: ${(props) => props.theme.media.smallScreen}) {
    font-size: inherit;
  }
`;
export const TeraTypesDisplay = styled(PropertyDisplay)`
  padding: 0;
`;
