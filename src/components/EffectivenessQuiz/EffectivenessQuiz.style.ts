import styled from "styled-components";

const colorBackground = "white";
const sizeBezel = "0.5rem";
const sizeRadius = "4px";
const colorShadow = "#212121";

export const QuizContainer = styled.div`
  max-width: 500px;
  max-height: 13rem;
  background: ${colorBackground};
  margin: 0 calc(4 * ${sizeBezel});
  border-radius: ${sizeRadius};
  border: 3px solid ${colorShadow};
  box-shadow: 0.5rem 0.5rem 0 ${colorShadow};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  @media screen and (min-width: ${(props) => props.theme.media.mediumScreen}) {
    padding: calc(4 * ${sizeBezel});
  }
`;
