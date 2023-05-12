import styled from 'styled-components';
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  span {
    padding: 0 1rem;
    /* font-family: "VT323"; */
  }
  @media screen and (min-width: 25rem) {
    flex-direction: row;
  }
`;
export const AttackPokemon = styled.div`
  display: flex;
  flex-direction: row;
`;
