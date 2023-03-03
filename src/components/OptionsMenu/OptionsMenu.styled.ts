import styled from "styled-components";

export const SideBar = styled.aside`
  --hamburgerHeight: ${(props) =>
    props.theme.burgerMenu.barHeight * 3 +
    props.theme.burgerMenu.hamburgerGap * 2 +
    props.theme.burgerMenu.measureType};
  font-size: 10px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  transition: translate ${(props) => props.theme.burgerMenu.animationTiming};
  translate: -100%;
  padding: 0.5rem 1rem;
  padding-top: calc(
    var(--hamburgerHeight) +
      ${(props) =>
        props.theme.burgerMenu.hamburgerMargin +
        props.theme.burgerMenu.measureType} + 1rem
  );
  background-color: ${(props) => props.theme.burgerMenu.foreground};
  color: ${(props) => props.theme.burgerMenu.background};
  width: 10rem;

  min-height: 100vh;
`;
export const HamburgerLabel = styled.label`
  --hamburgerHeight: ${(props) =>
    props.theme.burgerMenu.barHeight * 3 +
    props.theme.burgerMenu.hamburgerGap * 2 +
    props.theme.burgerMenu.measureType};
  --x-width: calc(var(--hamburgerHeight) * 1.41421356237);
  --foreground: ${(props) => props.theme.burgerMenu.foreground};
  --background: ${(props) => props.theme.burgerMenu.background};
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
    content: "";
    width: ${(props) =>
      props.theme.burgerMenu.barWidth + props.theme.burgerMenu.measureType};
    height: ${(props) =>
      props.theme.burgerMenu.barHeight + props.theme.burgerMenu.measureType};
    background-color: ${(props) => props.theme.fontColor};
    border-radius: 9999px;
    transform-origin: left center;
    transition: opacity ${(props) => props.theme.burgerMenu.animationTiming},
      width ${(props) => props.theme.burgerMenu.animationTiming},
      rotate ${(props) => props.theme.burgerMenu.animationTiming},
      translate ${(props) => props.theme.burgerMenu.animationTiming},
      background-color ${(props) => props.theme.burgerMenu.animationTiming};
  }
  input {
    appearance: none;
    padding: 0;
    margin: 0;
    outline: none;
    pointer-events: none;
  }
  :has(input:checked)::before {
    rotate: 45deg;
    width: var(--x-width);
    background-color: ${(props) => props.theme.burgerMenu.background};
    translate: 0
      ${(props) =>
        props.theme.burgerMenu.barHeight / -2 +
        props.theme.burgerMenu.measureType};
  }
  :has(input:checked)::after {
    rotate: -45deg;
    background-color: ${(props) => props.theme.burgerMenu.background};

    width: var(--x-width);
    translate: 0
      ${(props) =>
        props.theme.burgerMenu.barHeight / 2 +
        props.theme.burgerMenu.measureType};
  }
  input:checked {
    opacity: 0;
    width: 0;
  }
  :has(input:checked) + ${SideBar} {
    translate: 0;
  }
  :has(input:checked) + ${SideBar} {
    translate: 0;
  }
`;
export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

