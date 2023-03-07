import styled from "styled-components";
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
