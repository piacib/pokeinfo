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

const colorShadow = "#212121";

export const ButtonContainer = styled.div`
  margin-top: calc(${(props) => props.theme.searchForm.bezel} * 2.5);
`;
export const Button = styled.button`
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
  padding: ${(props) => props.theme.searchForm.bezel}
    calc(${(props) => props.theme.searchForm.bezel} * 2);
  background: ${(props) => props.theme.color.pokedexRed};
  border: none;
  color: ${(props) => props.theme.searchForm.backgroundColor};
  border-radius: ${(props) => props.theme.searchForm.borderRadius};
  font-weight: 900;
`;
export const InputLabelSpan = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  padding: calc(${(props) => props.theme.searchForm.bezel} * 0.75)
    calc(${(props) => props.theme.searchForm.bezel} * 0.5);
  margin: calc(${(props) => props.theme.searchForm.bezel} * 0.75 + 3px)
    calc(${(props) => props.theme.searchForm.bezel} * 0.5);
  background: pink;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  background: ${(props) => props.theme.searchForm.backgroundColor};
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.2;
  &:focus,
  &:not(:placeholder-shown) {
    transform: translate(0.25rem, -65%) scale(0.8);
    color: ${(props) => props.theme.color.pokedexRed};
  }
`;
export const TextInputField = styled.input`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: ${(props) => props.theme.searchForm.borderWidth} solid currentColor;
  padding: calc(${(props) => props.theme.searchForm.bezel} * 1.5)
    ${(props) => props.theme.searchForm.bezel};
  color: currentColor;
  background: transparent;
  border-radius: ${(props) => props.theme.searchForm.borderRadius};
  &:focus,
  &:not(:placeholder-shown) {
    & + .input__label {
      transform: translate(0.25rem, -65%) scale(0.8);
      color: ${(props) => props.theme.color.pokedexRed};
    }
  }
`;
export const InputLabel = styled.label`
  position: relative;
`;

export const UrlForm = styled.form`
  width: 100%;
  max-width: 400px;
  background: ${(props) => props.theme.searchForm.backgroundColor};
  padding: calc(4 * ${(props) => props.theme.searchForm.bezel});
  margin: 0 calc(4 * ${(props) => props.theme.searchForm.bezel});
  border-radius: ${(props) => props.theme.searchForm.borderRadius};
  border: ${(props) => props.theme.searchForm.borderWidth} solid
    ${(props) => props.theme.searchForm.shadowColor};
  box-shadow: 0.5rem 0.5rem 0 ${(props) => props.theme.searchForm.shadowColor};
  position: relative;
`;
