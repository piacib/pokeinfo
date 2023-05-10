import { TextInput, UrlForm, UrlLabel } from "./UrlSearch.style";
import { paths } from "../../router/routes";
export const enterBattleText = "Enter new battle";
export const enterUrl = "Enter Url:";

const UrlSearch = () => {
  return (
    <>
      <UrlForm onSubmit={(e) => handleSubmit(e)}>
        <UrlLabel htmlFor="url">{enterUrl}</UrlLabel>
        <TextInput type="text" id="url" name="url" />
        <input type="submit" value="Submit" />
      </UrlForm>
    </>
  );
};

export default UrlSearch;

const parseBattleIDFromUrl = (e: React.SyntheticEvent) => {
  const target = e.target as typeof e.target & {
    url: { value: string };
  };
  const battleIndex = target.url.value.indexOf("battle");
  if (battleIndex === -1) {
    return null;
  }
  // COULD ADD CHECK/PARSE FOR NON STANDARD CHARACTERS
  const battleRoomId = target.url.value.slice(battleIndex);
  return battleRoomId;
};
const handleSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault();
  const battleRoomId = parseBattleIDFromUrl(e);
  if (!battleRoomId) return;
  const path = paths.inBattleGenerator(battleRoomId);
  // ADD METHOD TO GO TO PATH
};
