import styled from "styled-components";
import { PillDesign } from "../../App.style";
import { Link } from "react-router-dom";
import { FlexColumnCenteredDiv } from "../../styles/Components.style";

export const HomeContainer = styled(FlexColumnCenteredDiv)`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 100%;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0 0.5rem;
    background-color: ${(props) => props.theme.color.pokedexRed};
  }
`;
export const HomeLink = styled(Link)`
  ${PillDesign}
  background: ${(props) => props.theme.color.pokedexRed};
  color: black;
  padding: 0.5rem 1rem;
  text-decoration: none;
`;
export const WelcomeText = styled.p`
  text-align: center;
  padding: 0 1rem;
  font-size: 0.9rem;
  @media (min-width: ${(props) => props.theme.media.mediumScreen}) {
    font-size: 1.3rem;
  }
`;
export const WelcomeHeader = styled.h1`
  font-size: 2rem;
  @media (min-width: 24rem) {
    font-size: 3rem;
  }
  @media (min-width: 35rem) {
    font-size: 4.3rem;
  }
  @media (min-width: 50rem) {
    font-size: 6rem;
  }
  @media (min-width: 60rem) {
    font-size: 7rem;
  }
  @media (min-width: 70rem) {
    font-size: 8rem;
  }
  @media (min-width: 82rem) {
    font-size: 10rem;
  }
`;
