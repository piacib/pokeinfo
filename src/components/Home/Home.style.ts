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
    background-color: red;
  }
`;
export const WelcomeText = styled.p`
  text-align: center;
`;
export const WelcomeHeader = styled.h1`
  font-size: 4.5rem;
  @media (max-width: 35rem) {
    font-size: 3rem;
  }
  @media (max-width: 24rem) {
    font-size: 2rem;
  }
`;

