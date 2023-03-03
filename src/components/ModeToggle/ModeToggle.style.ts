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
`;
export const ToggleCheckbox = styled.input`
  opacity: 0;
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
  /* moon dimples */
  :after {
    transition-delay: 0ms;
    transition: all 250ms ease-in;
    position: absolute;
    content: "";
    box-shadow: var(--gray-dots) -0.875em 0 0 0.0625em,
      var(--gray-dots) -1.375em 0.75em 0 -0.0625em;
    left: 5em;
    top: 0.625em;
    width: 0.375em;
    height: 0.375em;
    background: transparent;
    border-radius: 50%;
    opacity: 1;
  }
`;
export const ToggleLabelSpan = styled.span`
  /* stars */
  border-radius: 0.3125em;
  position: relative;
  background: white;
  left: 2em;
  width: 0.375em;
  transition: all 150ms ease-in;
  top: 1.5625em;
  height: 0.25em;
  :before {
    content: "";
    position: absolute;
    width: 0.25em;
    height: 0.25em;
    top: -0.9375em;
    border-radius: 0.3125em;
    background: white;
    left: -1.25em;
    transition: all 150ms ease-in;
  }
  :after {
    content: "";
    position: absolute;
    width: 0.25em;
    height: 0.25em;
    left: -1.25em;
    top: 0.625em;
    border-radius: 0.3125em;
    background: white;
    transition: all 150ms ease-in;
  }
  /* clouds */
  ${ToggleCheckbox}:checked + ${ToggleLabel} & {
    width: 0.3125em;
    left: 4.0625em;
    top: 1.375em;
  }
  ${ToggleCheckbox}:checked + ${ToggleLabel} &:before {
    top: -0.25em;
    left: -0.3125em;
    width: 1.25em;
    height: 0.3125em;
  }
  ${ToggleCheckbox}:checked + ${ToggleLabel} &:after {
    top: 0.1875em;
    width: 1.25em;
    height: 0.3125em;
    left: -0.625em;
  }
`;
