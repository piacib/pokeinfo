import { useState } from "react";
import { BattleButton } from "../../App.style";
import { TextInput, UrlForm, UrlLabel } from "./UrlSearch.style";
export const enterBattleText = "Enter new battle";
export const enterUrl = "Enter Url:";
export const Form = ({ handleSubmit }: Props) => {
  return (
    <UrlForm onSubmit={(e) => handleSubmit(e)}>
      <UrlLabel htmlFor="url">{enterUrl}</UrlLabel>
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
        {enterBattleText}
      </BattleButton>
      {displayUrlInput && <Form handleSubmit={handleSubmit} />}
    </>
  );
};

export default UrlSearch;
