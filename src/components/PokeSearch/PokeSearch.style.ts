import styled from "styled-components";
export const SearchForm = styled.form`
  width: 100%;
`;
export const SearchLabel = styled.label``;
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  grid-column: 1;
`;
export const TextInput = styled.input`
  width: 98%;
  height: 100%;
  border: none;
  background-color: ${(props) => props.theme.backgroundColor};
  position: relative;
  height: 1.2rem;
  :focus {
    outline: none;
  }
`;
export const Select = styled.select`
  width: 100%;
  max-width: 200px;
  padding: 0.5rem;
  border: 1rem;
  min-width: 100px;
  height: 1rem;
`;
export const Submit = styled.input`
  position: absolute;
  right: 0;
  margin: auto;
  height: 100%;
  background-color: ${(props) => props.theme.color.pokedexRed};
  border: 2px solid ${(props) => props.theme.pokedexColor};
  border-radius: ${(props) => props.theme.pokedexStyles.borderRadius};
  border-radius: 5px 5px 5px 15px;
  :disabled {
    display: none;
  }
`;
interface Props {
  shouldDisplay: boolean;
}
export const OptionsList = styled.ul<Props>`
  display: ${(props) => (props.shouldDisplay ? "block" : "none")};
  position: absolute;
  background: ${(props) => props.theme.backgroundColor};
  padding: 10px;
  margin-top: 2px;
  border: 2px solid ${(props) => props.theme.pokedexColor};
  border-radius: ${(props) => props.theme.pokedexStyles.borderRadius};
  list-style: none;
  li {
    padding: 5px;
    height: 1rem;
    line-height: 1rem;
  }
  li:hover {
    background: ${(props) => props.theme.color.pokedexRed};
    color: ${(props) => props.theme.fontColor};
    border-radius: ${(props) => props.theme.pokedexStyles.borderRadius};

    cursor: pointer;
  }
`;
export const ErrorText = styled.h3`
  color: ${(props) => props.theme.fontColor};
`;
