import styled from "styled-components";
import { FlexRowDiv } from "../../styles/Components.style";

export const DamageContainer = styled(FlexRowDiv)`
  grid-column: 1;
  grid-row: 4/6;
  font-size: 0.95rem;
  flex-wrap: wrap;
  @media (min-width: ${(props) => props.theme.media.mediumScreen}) {
    flex-direction: column;
  }
`;
