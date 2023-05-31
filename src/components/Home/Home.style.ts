import styled, { css } from "styled-components";
import { PillDesign } from "../../App.style";
import { Link } from "react-router-dom";
import {
  FlexColumnCenteredDiv,
  FlexRowCenteredDiv,
} from "../../styles/Components.style";
const fontSizing = css`
  font-size: 0.9rem;
  @media (min-width: ${(props) => props.theme.media.mediumScreen}) {
    font-size: 1.3rem;
  }
`;
export const HomeContainer = styled(FlexColumnCenteredDiv)`
  height: 100%;
  margin: 1rem;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;
export const ButtonContainer = styled(FlexRowCenteredDiv)`
  flex-wrap: wrap;
`;
export const HomeLink = styled(Link)`
  ${PillDesign}
  background: ${(props) => props.theme.color.pokedexRed};
  color: black;
  padding: 0.5rem 1rem;
  text-decoration: none;
  ${fontSizing}
`;
export const WelcomeText = styled.p`
  text-align: center;
  ${fontSizing}
`;
export const WelcomeHeader = styled.h1`
  font-size: 2rem;
  @media (min-width: 24rem) {
    font-size: 3rem;
  }
  @media (min-width: 35rem) {
    font-size: 4.3rem;
  }
  @media (min-width: 50rem) {
    font-size: 6rem;
  }
  @media (min-width: 60rem) {
    font-size: 7rem;
  }
  @media (min-width: 70rem) {
    font-size: 8rem;
  }
  @media (min-width: 82rem) {
    font-size: 10rem;
  }
`;
