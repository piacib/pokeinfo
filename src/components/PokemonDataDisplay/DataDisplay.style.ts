import styled, { css } from "styled-components";

export const PropertyDisplay = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.fontColor};
  padding-right: 4rem;

  /* padding-bottom: 10px; */
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  margin-bottom: 0.5rem;
  h3 {
    margin: 0;
  }
`;
export const HiddenPropertyText = styled.div`
  display: none;
`;
const propertyCss = css`
  padding: ${(props) => props.theme.padding.medium};
  text-align: center;
  margin: 2px;
  font-size: 0.95rem;
  border-radius: ${(props) => props.theme.buttonBorderRadius};

  cursor: pointer;
  div {
    cursor: pointer;
  }
`;
export const hoverDisplayCss = css`
  &:hover ${HiddenPropertyText} {
    display: block;
    position: absolute;
    text-align: start;
    border: 2px solid ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.fontColor};
    background: ${(props) => props.theme.backgroundColor};
    border-radius: ${(props) => props.theme.buttonBorderRadius};
    padding: ${(props) => props.theme.padding.medium};
    z-index: 2;
  }
`;
export const PropertyBtn = styled.div`
  ${hoverDisplayCss}
  ${propertyCss}
  box-shadow: ${(props) => props.theme.boxShadow};

  border: 2px solid ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  span {
    white-space: nowrap;
  }
`;
export const PokemonName = styled.a`
  align-self: center;
  text-transform: capitalize;
  grid-column: 1/2;
  font-size: 1.8rem;
  line-height: 1.8rem;
  padding: 5px 0;
  max-width: 11rem;
  color: ${(props) => props.theme.fontColor};
  text-overflow: ellipsis;
`;
export const PropertiesContainer = styled.div`
  margin: 5px 0 0 0;
  grid-column: 2/4;
  grid-row: 3/6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
interface RefProp extends React.FC {
  changeDisplay?: boolean;
}
export const HeaderContainer = styled.div<RefProp>`
  /* grid-area: 3/1; */

  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.changeDisplay ? "column" : "row")};
  margin-bottom: 0.3rem;
  height: 3rem;

  @media (max-width: 22rem) {
    flex-direction: column;
    height: fit-content;
  }
`;
export const NoPokemonText = styled.h2`
  color: ${(props) => props.theme.fontColor};
  grid-column: 1/3;
  text-align: center;
`;
export const SearchForm = styled.form`
  color: ${(props) => props.theme.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  grid-column: 1/3;
  place-self: center;
  width: 100%;
`;
export const SearchLabel = styled.label``;
