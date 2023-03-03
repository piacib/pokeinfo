import { useState } from "react";
import { BattleButton } from "../../App.style";
import { TextInput, UrlForm, UrlLabel } from "./UrlSearch.style";
export const Form = ({ handleSubmit }: Props) => {
  return (
    <UrlForm onSubmit={(e) => handleSubmit(e)}>
      <UrlLabel htmlFor="url">Enter Url:</UrlLabel>
      <TextInput type="text" id="url" name="url" />
      <input type="submit" value="Submit" />
    </UrlForm>
  );
};
interface Props {
  handleSubmit: (e: React.SyntheticEvent) => void;
}
const UrlSearch = ({ handleSubmit }: Props) => {
  const [displayUrlInput, setDisplayUrlInput] = useState(false);
  return (
    <>
      <BattleButton onClick={() => setDisplayUrlInput(!displayUrlInput)}>
        Enter new battle
      </BattleButton>
      {displayUrlInput && <Form handleSubmit={handleSubmit} />}
    </>
  );
};

export default UrlSearch;
