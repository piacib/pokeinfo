import styled, { keyframes } from "styled-components";

/* The typewriter cursor effect */
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkCaret = keyframes`
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: var(--line-color);
  }
`;
export const TypeWriterContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
  grid-column: 1/2;
  margin: 0 auto;
  width: fit-content;
  font-size: 1.2em;
  * {
    color: ${(props) => props.theme.fontColor};
    font-family: "VT323";
    height: 1em;
    line-height: 1.1;
    width: fit-content;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.25em solid black; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0.5rem auto; /* Gives that scrolling effect as the typing happens */
    /* letter-spacing: 0.15em; Adjust as needed */
    animation: ${typing} 3.5s steps(40, end),
      ${blinkCaret} 1.5s step-end infinite;
    @media (prefers-reduced-motion) {
      animation: ${blinkCaret} 1.5s step-end infinite;
    }
  }
`;
