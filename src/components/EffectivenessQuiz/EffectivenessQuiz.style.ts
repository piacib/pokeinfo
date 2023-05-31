import styled from "styled-components";
import { FlexColumnHorizCenteredDiv } from "../../styles/Components.style";

export const QuizContainer = styled(FlexColumnHorizCenteredDiv)`
  max-width: 500px;
  max-height: 13rem;
  background: ${(props) => props.theme.searchForm.backgroundColor};
  margin: 0 calc(4 * ${(props) => props.theme.searchForm.bezel});
  border-radius: ${(props) => props.theme.searchForm.borderRadius};
  border: ${(props) => props.theme.searchForm.borderWidth} solid
    ${(props) => props.theme.searchForm.shadowColor};
  box-shadow: 0.5rem 0.5rem 0 ${(props) => props.theme.searchForm.shadowColor};
  position: relative;
  padding: 1rem;
  @media screen and (min-width: ${(props) => props.theme.media.mediumScreen}) {
    padding: calc(4 * ${(props) => props.theme.searchForm.bezel});
  }
`;
