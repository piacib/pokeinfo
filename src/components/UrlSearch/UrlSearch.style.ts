import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  margin: 5px 0;
  max-width: 400px;
  grid-row: 2;
  grid-column: 3/5;
`;
export const UrlLabel = styled.label`
  font-size: 3.2rem;
  padding: 1rem 0;
  place-self: center;
  grid-row: 1;
  grid-column: 1/-1;
`;
export const UrlForm = styled.form`
  margin: 1rem 0;
  align-items: center;
  display: flex;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: fit-content;
`;
export const SubmitInput = styled.input`
  color: black;
  grid-row: 2;
  grid-column: 5;
`;
