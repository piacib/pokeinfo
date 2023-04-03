import styled from "styled-components";

export const HomeContainer = styled.div`
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
  button {
    margin: 0 0.5rem;
    background-color: ${(props) => props.theme.color.pokedexRed};
  }
`;
export const WelcomeText = styled.p`
  text-align: center;
  font-size: 1.3rem;
  padding: 0 1rem;
  @media (max-width: ${(props) => props.theme.media.mediumScreen}) {
    font-size: 0.9rem;
  }
`;
export const WelcomeHeader = styled.h1`
  font-size: 10rem;
  /* font-size: 4.5rem; */
  @media (max-width: 82rem) {
    font-size: 8rem;
  }
  @media (max-width: 70rem) {
    font-size: 7rem;
  }
  @media (max-width: 60rem) {
    font-size: 6rem;
  }
  @media (max-width: 50rem) {
    font-size: 4.3rem;
  }
  @media (max-width: 35rem) {
    font-size: 3rem;
  }
  @media (max-width: 24rem) {
    font-size: 2rem;
  }
`;
