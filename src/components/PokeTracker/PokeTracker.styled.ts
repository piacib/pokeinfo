import styled from "styled-components";
import { dexTopRowButton } from "../TeamDisplay/TeamDisplay.style";

export const ToggleButton = styled.button`
  ${dexTopRowButton}
  bottom:5px;
  top: auto;
  right: 0;
  left: 2px;

  @media screen and (min-width: 18.75rem) {
    bottom: auto;
    right: auto;
    ${dexTopRowButton}
  }
`;
