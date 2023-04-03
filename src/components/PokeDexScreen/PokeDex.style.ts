import styled, { css } from "styled-components";
const Border = css`
  border: 1px solid ${(props) => props.theme.pokedexColor};
`;
export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  width: 40px;
  justify-content: space-between;
`;
const scale = 1.1;
export const Container = styled.div`
  border: 3px solid ${(props) => props.theme.pokedexColor};
  border-radius: ${(props) => props.theme.pokedexStyles.borderRadius};
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  padding: 5px 10px;
  max-width: 700px;
  width: 95%;
  place-self: center;
  @media (min-width: 111rem) {
    scale: ${scale};
    max-width: ${scale} * 700px;
  }
  @media (max-width: ${(props) => props.theme.media.mediumScreen}) {
    width: 80%;
  }
`;
export const InnerContainer = styled.div`
  border: 2px solid ${(props) => props.theme.pokedexColor};
  border-radius: 5px;
  width: 100%;
  margin: 5px 0;
  padding: 2px;
`;
const RedCircle = styled.div`
  ${Border}
  border-radius: 50%;
  background: ${(props) => props.theme.color.pokedexRed};
`;
export const RedCircleTop = styled(RedCircle)`
  grid-row: 1;
  height: 10px;
  width: 10px;
`;
export const RedCircleBottom = styled(RedCircle)`
  grid-row: 3;
  height: 15px;
  width: 15px;
`;
export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const BarContainer = styled.div`
  width: 10%;
  margin-right: 5px;
  * {
    width: 100%;
    height: 3px;
    background: ${(props) => props.theme.pokedexColor};
    margin: 2px 0;
  }
`;
