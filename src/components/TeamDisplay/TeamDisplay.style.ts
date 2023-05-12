import styled, { css } from "styled-components";
export const ButtonDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 300px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
export const Button = styled.button`
  width: inherit;
  background: none;
  border: none;
  height: 40px;
  border-radius: 0;
  padding: 0;
  color: ${(props) => props.theme.fontColor};
`;
export const dexTopRowButton = css`
  position: absolute;
  top: 5px;
  border: none;
  white-space: nowrap;
  padding: 3px 5px;
  border-radius: 20px;
  z-index: 2;
  background-color: ${(props) => props.theme.color.pokedexRed};
  /* font-size: 0.6rem; */
  @media screen and (min-width: 300px) {
    font-size: 0.8rem;
  }
`;
export const SwapTeamsButton = styled.button`
  right: 5px;
  ${dexTopRowButton}
`;
