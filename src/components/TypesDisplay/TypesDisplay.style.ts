import styled from "styled-components";
import { TypeColorInterface } from "../../types";
import { FlexRowCenteredDiv } from "../../styles/Components.style";

const TypeColoredComponent = styled.div<TypeColorInterface>`
  background: ${(props) => props.theme.color.typeColors[props.background]};
`;

export const Type = styled(TypeColoredComponent)`
  padding: 0.2rem 1rem;
  height: fit-content;
  border-radius: 20px;
  display: flex;
  align-items: center;
  box-shadow: ${(props) => props.theme.boxShadow};
`;
interface Props {
  types: number;
}
export const TypeContainer = styled(FlexRowCenteredDiv)<Props>`
  grid-column: 1;
  height: 100%;
  padding: 0 1.2rem;
  ${Type}:first-child {
    border-radius: ${(props) => (props.types === 2 ? "1rem 0 0 1rem" : "1rem")};
  }
  ${Type}:nth-child(2) {
    border-radius: 0 1rem 1rem 0;
  }
`;
