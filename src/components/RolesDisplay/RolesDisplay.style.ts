import styled from "styled-components";
import {
  PropertyDisplay,
  propertyBtnDesign,
} from "../PokemonDataDisplay/DataDisplay.style";
export const RolesBtn = styled.button`
  ${propertyBtnDesign}
  transition: border-color 0.25s;
  padding: 0.5rem 1rem;
  :hover {
    border: ${(props) => props.theme.propertyBtn.borderWidth} solid
      ${(props) => props.theme.color.pokedexRed};
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
