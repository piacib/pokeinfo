import styled from "styled-components";
import { PropertyDisplay } from "../PokemonDataDisplay/DataDisplay.style";
export const RolesBtn = styled.button`
  border: 2px solid ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
  margin: 10px;
  color: ${(props) => props.theme.fontColor};
  :hover {
    border: 2px solid red;
  }
`;
export const RolesContainer = styled(PropertyDisplay)`
  grid-column: 2;
  padding: 0;
  @media (max-width:${props => props.theme.media.smallScreen}) {
    font-size:.8rem; 
  }

`;
export const TeraTypesDisplay = styled(PropertyDisplay)`
  padding: 0;
`;
