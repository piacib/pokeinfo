import styled from "styled-components";
import { TypeColorInterface } from "../../types";

const TypeColoredComponent = styled.div<TypeColorInterface>`
  background-color: ${(props) => props.theme.color.typeColors[props.background]};
`;

export const Type = styled(TypeColoredComponent)`
  padding: 0.2rem 1rem;
  height: fit-content;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
interface Props {
  types: number;
}
export const TypeContainer = styled.div<Props>`
  grid-column: 1;
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-self: end;
  height: 100%;
  padding: 0 1.2rem;
  ${Type}:first-child {
    border-radius: ${(props) => (props.types === 2 ? "1rem 0 0 1rem" : "1rem")};
  }
  ${Type}:nth-child(2) {
    border-radius: 0 1rem 1rem 0;
  }
`;
