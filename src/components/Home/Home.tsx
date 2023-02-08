import React from "react";
import { devRoomId } from "../../developmentMode";
import { TypeWriterContainer } from "../../TypeWriterContainer.style";
import { WelcomeContainer } from "./Home.style";
interface Props {
  setBattleRoomId: React.Dispatch<React.SetStateAction<string>>;
}
const Home: React.FC<Props> = ({ setBattleRoomId }) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      url: { value: string };
    };
    const battleIndex = target.url.value.indexOf("battle");
    if (battleIndex === -1) {
      return;
    }
    const battleRoomId = target.url.value.slice(battleIndex);
    setBattleRoomId(battleRoomId);
    console.log(battleRoomId);
  };
  return (
    <WelcomeContainer>
      <TypeWriterContainer>
        <h1>Welcome To PokeInfo</h1>
      </TypeWriterContainer>
      <p>
        Enter the url from your pokemon showdown battle to get real time data or
        click example
      </p>
      <button onClick={() => setBattleRoomId(devRoomId)}>Example</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Enter Url:
          <input type="text" name="url" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </WelcomeContainer>
  );
};

export default Home;
