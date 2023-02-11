import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0.5rem;
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
export const UrlForm = styled.form`
  margin: 1rem 0;
  align-items: center;
  display: flex;
  justify-content: center;
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
