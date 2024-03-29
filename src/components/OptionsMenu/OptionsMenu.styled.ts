import styled, { css } from "styled-components";
import { UrlLabel } from "../UrlSearch/UrlSearch.style";
import { Link } from "react-router-dom";

export const SideBar = styled.aside`
  --hamburgerHeight: ${(props) =>
    props.theme.burgerMenu.barHeight * 3 +
    props.theme.burgerMenu.hamburgerGap * 2 +
    props.theme.burgerMenu.measureType};
  --hamburgerMargin: ${(props) =>
    props.theme.burgerMenu.hamburgerMargin +
    props.theme.burgerMenu.measureType};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  transition: translate ${(props) => props.theme.burgerMenu.animationTiming};
  translate: -100%;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  padding-top: calc(var(--hamburgerHeight) + var(--hamburgerMargin) + 1rem);
  background-color: ${(props) => props.theme.burgerMenu.foreground};
  color: ${(props) => props.theme.burgerMenu.background};
  width: 10rem;

  min-height: 100vh;
  ${UrlLabel} {
    color: white;
  }
`;
const hamburgerBunRotate = css`
  :has(input:checked)::after {
    rotate: -45deg;
    translate: 0
      ${(props) =>
        props.theme.burgerMenu.barHeight / 2 +
        props.theme.burgerMenu.measureType};
  }
  :has(input:checked)::before {
    rotate: 45deg;
    translate: 0
      ${(props) =>
        props.theme.burgerMenu.barHeight / -2 +
        props.theme.burgerMenu.measureType};
  }
  @media (max-width: ${(props) => props.theme.media.extraSmallScreen}) {
    :has(input:checked)::after {
      translate: 0
        ${(props) =>
          props.theme.burgerMenu.extraSmallScreen.barHeight / 2 +
          props.theme.burgerMenu.measureType};
    }
    :has(input:checked)::before {
      translate: 0
        ${(props) =>
          props.theme.burgerMenu.extraSmallScreen.barHeight / -2 +
          props.theme.burgerMenu.measureType};
    }
  }
`;

export const HamburgerLabel = styled.label`
  --x-width: calc(var(--hamburgerHeight) * 1.41421356237);
  --foreground: ${(props) => props.theme.burgerMenu.foreground};
  --background: ${(props) => props.theme.burgerMenu.background};
  --hamburgerHeight: ${(props) =>
    props.theme.burgerMenu.extraSmallScreen.barHeight * 3 +
    props.theme.burgerMenu.extraSmallScreen.hamburgerGap * 2 +
    props.theme.burgerMenu.measureType};
  @media (min-width: ${(props) => props.theme.media.extraSmallScreen}) {
    --hamburgerHeight: ${(props) =>
      props.theme.burgerMenu.barHeight * 3 +
      props.theme.burgerMenu.hamburgerGap * 2 +
      props.theme.burgerMenu.measureType};
  }
  display: flex;
  flex-direction: column;
  gap: ${(props) =>
    props.theme.burgerMenu.hamburgerGap + props.theme.burgerMenu.measureType};
  width: max-content;
  z-index: 8;
  cursor: pointer;
  :has(input:checked) {
    --foreground: ${(props) => props.theme.burgerMenu.background};
    --background: ${(props) => props.theme.burgerMenu.foreground};
  }
  :has(input:focus-visible)::before,
  :has(input:focus-visible)::after,
  input:focus-visible {
    border: 1px solid var(--background);
    box-shadow: 0 0 0 1px var(--foreground);
  }

  ::before,
  ::after,
  input {
    --animationTime: ${(props) => props.theme.burgerMenu.animationTiming};
    content: "";
    background-color: ${(props) => props.theme.fontColor};
    border-radius: 9999px;
    transform-origin: left center;
    transition: opacity var(--animationTime), width var(--animationTime),
      rotate var(--animationTime), translate var(--animationTime),
      background-color var(--animationTime);
    width: ${(props) =>
      props.theme.burgerMenu.extraSmallScreen.barWidth +
      props.theme.burgerMenu.measureType};
    height: ${(props) =>
      props.theme.burgerMenu.extraSmallScreen.barHeight +
      props.theme.burgerMenu.measureType};
    @media (min-width: ${(props) => props.theme.media.extraSmallScreen}) {
      width: ${(props) =>
        props.theme.burgerMenu.barWidth + props.theme.burgerMenu.measureType};
      height: ${(props) =>
        props.theme.burgerMenu.barHeight + props.theme.burgerMenu.measureType};
    }
  }
  input {
    appearance: none;
    padding: 0;
    margin: 0;
    outline: none;
    pointer-events: none;
  }
  ${hamburgerBunRotate}

  :has(input:checked)::after, :has(input:checked)::before {
    background-color: ${(props) => props.theme.burgerMenu.background};
    width: var(--x-width);
  }

  input:checked {
    opacity: 0;
    width: 0;
  }
  :has(input:checked) + ${SideBar} {
    translate: 0;
  }

  @media (max-width: ${(props) => props.theme.media.extraSmallScreen}) {
    gap: ${(props) =>
      props.theme.burgerMenu.extraSmallScreen.hamburgerGap +
      props.theme.burgerMenu.measureType};
  }
`;
export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const OptionsMenuLink = styled(Link)`
  color: ${(props) => props.theme.backgroundColor};
`;
export const Li = styled.li`
  margin: 1rem 0;
  text-align: end;
`;
