import styled from "styled-components";

export const DamageContainer = styled.div`
  grid-column: 1;
  grid-row: 4/6;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  font-size: 0.95rem;
  @media (max-width: ${(props) => props.theme.media.mediumScreen}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
