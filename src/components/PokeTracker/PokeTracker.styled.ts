import styled, { css, keyframes } from "styled-components";

const RootVar = css`
  /* Size */
  --width: 6.25em;
  --height: 3.375em;

  /** sunny side **/
  --blue-background: #c2e9f6;
  --blue-border: #108dad;
  --blue-color: #96dcee;
  --yellow-background: #fffaa8;
  --yellow-border: #f5eb71;
  /** dark side **/
  --indigo-background: #808fc7;
  --indigo-border: #808bbc;
  --indigo-color: #6b7abb;
  --gray-border: #e8e8ea;
  --gray-dots: #e8e8ea;
`;
const reverse = keyframes`
0% {
  left: 2.9375em;
  width: 2.5em;
}
60% {
  left: 0.1875em;
  width: 5em;
}
100% {
  left: 0.1875em;
}
`;
const switchKeyFrame = keyframes`
0% {
  left: 0.1875em;
}
60% {
  left: 0.1875em;
  width: 5em;
}
100% {
  left: 2.9375em;
  width: 2.5em;
}
`;
export const ToggleContainer = styled.div`
  ${RootVar}
  display: grid;
  position: relative;
  place-items: center;
  width: var(--width);
  height: var(--height);
  font-size: 10px;
  padding-bottom: 1rem;
`;
export const ToggleCheckbox = styled.input`
  opacity: 0;
  position: absolute;
`;
export const ToggleLabel = styled.label`
  width: var(--width);
  height: var(--height);

  background: var(--indigo-color);
  border-radius: 6.25em;
  border: 0.1875em solid var(--indigo-border);
  display: flex;
  position: absolute;
  right: 0;
  top: 5px;
  transition: all 350ms ease-in;
  color: var(--indigo-color);
  ${ToggleCheckbox}:checked + & {
    background: var(--blue-color);
    color: var(--blue-color);
    border-color: var(--blue-border);
  }
  ${ToggleCheckbox}:checked + &:before {
    animation-name: ${reverse};
    animation-duration: 350ms;
    animation-fill-mode: forwards;
    transition: all 360ms ease-in;
    background: var(--yellow-background);
    border-color: var(--yellow-border);
  }
  :before {
    animation-name: ${switchKeyFrame};
    animation-duration: 350ms;
    animation-fill-mode: forwards;
    content: "";
    width: 2.5em;
    height: 2.5em;
    border: 0.1875em solid var(--gray-border);
    top: 0.2625em;
    left: 0.1875em;
    position: absolute;
    border-radius: 2.5em;
    background: white;
  }
`;
export const ToggleLabelSpan = styled.span``;
