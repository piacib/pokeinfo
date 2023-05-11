import {
  Button,
  ButtonContainer,
  InputLabel,
  InputLabelSpan,
  TextInputField,
  UrlForm,
} from "./UrlSearch.style";
import { paths } from "../../router/routes";
import Pickahu from "./Pikachu";
import { useNavigate } from "react-router-dom";

export const connectText = "Connect to a Battle";
export const enterUrl = "Enter Url or Battle Id Here";

const UrlSearch = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const battleRoomId = parseBattleIDFromUrl(e);
    if (!battleRoomId) {
      alert("sorry I could not find a battle for this url.");
      return;
    }
    const path = paths.inBattleGenerator(battleRoomId);
    navigate(path);
  };
  return (
    <>
      <UrlForm
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Pickahu />
        <h2>{connectText}</h2>
        <InputLabel htmlFor="url">
          <TextInputField type="text" id="url" name="url" />
          <InputLabelSpan>{enterUrl}</InputLabelSpan>
        </InputLabel>
        <ButtonContainer>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </ButtonContainer>
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
  const battleRoomId = target.url.value.slice(battleIndex);
  return battleRoomId;
};
