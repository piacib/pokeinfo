import styled from "styled-components";
export const UrlLabel = styled.label`
  font-size: 3.2rem;
  padding: 1rem 0;
  place-self: center;
  grid-row: 1;
  grid-column: 1/-1;
`;

export const TextInput = styled.input`
  width: 100%;
  margin: 5px 0;
  max-width: 400px;
  grid-row: 2;
  grid-column: 3/5;
`;
const colorLight = "white";
const colorBackground = "white";
const colorAccent = "red";
const sizeBezel = "0.5rem";
const sizeRadius = "4px";
const colorShadow = "#212121";
export const ButtonContainer = styled.div`
  margin-top: calc(${sizeBezel} * 2.5);
`;
export const Button = styled.button`
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
  padding: ${sizeBezel} calc(${sizeBezel} * 2);
  background: ${colorAccent};
  border: none;
  color: ${colorLight};
  border-radius: ${sizeRadius};
  font-weight: 900;
`;
export const InputLabelSpan = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  padding: calc(${sizeBezel} * 0.75) calc(${sizeBezel} * 0.5);
  margin: calc(${sizeBezel} * 0.75 + 3px) calc(${sizeBezel} * 0.5);
  background: pink;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  background: ${colorBackground};
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.2;
  &:focus,
  &:not(:placeholder-shown) {
    transform: translate(0.25rem, -65%) scale(0.8);
    color: ${colorAccent};
  }
`;
export const TextInputField = styled.input`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 3px solid currentColor;
  padding: calc(${sizeBezel} * 1.5) ${sizeBezel};
  color: currentColor;
  background: transparent;
  border-radius: ${sizeRadius};
  &:focus,
  &:not(:placeholder-shown) {
    & + .input__label {
      transform: translate(0.25rem, -65%) scale(0.8);
      color: ${colorAccent};
    }
  }
`;
export const InputLabel = styled.label`
  position: relative;
`;

export const UrlForm = styled.form`
  width: 100%;
  max-width: 400px;
  background: ${colorBackground};
  padding: calc(4 * ${sizeBezel});
  margin: 0 calc(4 * ${sizeBezel});
  border-radius: ${sizeRadius};
  border: 3px solid ${colorShadow};
  box-shadow: 0.5rem 0.5rem 0 ${colorShadow};
  position: relative;
`;
