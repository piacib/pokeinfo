import styled from "styled-components";

export const DamageContainer = styled.div`
  grid-column: 1;
  grid-row: 4/6;
  display: flex;
  font-size: 0.95rem;
  flex-wrap: wrap;
  flex-direction: row;
  @media (min-width: ${(props) => props.theme.media.mediumScreen}) {
    flex-direction: column;
  }
`;
