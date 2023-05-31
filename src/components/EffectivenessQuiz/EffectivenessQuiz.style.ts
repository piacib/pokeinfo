import styled from "styled-components";
import { FlexColumnHorizCenteredDiv } from "../../styles/Components.style";

const colorBackground = "white";
const sizeBezel = "0.5rem";
const sizeRadius = "4px";
const colorShadow = "#212121";

export const QuizContainer = styled(FlexColumnHorizCenteredDiv)`
  max-width: 500px;
  max-height: 13rem;
  background: ${colorBackground};
  margin: 0 calc(4 * ${sizeBezel});
  border-radius: ${sizeRadius};
  border: 3px solid ${colorShadow};
  box-shadow: 0.5rem 0.5rem 0 ${colorShadow};
  position: relative;
  padding: 1rem;
  @media screen and (min-width: ${(props) => props.theme.media.mediumScreen}) {
    padding: calc(4 * ${sizeBezel});
  }
`;
