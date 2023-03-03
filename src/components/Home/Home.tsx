import React, { useState } from "react";
import { devRoomId } from "../../developmentMode";
import { TypeWriterContainer } from "../../TypeWriterContainer.style";
import { Form } from "../UrlSearch/UrlSearch";
import { UrlForm } from "../UrlSearch/UrlSearch.style";
import {
  ButtonContainer,
  HomeContainer,
  WelcomeHeader,
  WelcomeText,
} from "./Home.style";
interface Props {
  setBattleRoomId: React.Dispatch<React.SetStateAction<string>>;
}
const Home: React.FC<Props> = ({ setBattleRoomId }) => {
  const [displayUrlInput, setDisplayUrlInput] = useState(false);
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
  };
  return (
    <HomeContainer>
      <TypeWriterContainer>
        <WelcomeHeader>Welcome To PokeInfo</WelcomeHeader>
      </TypeWriterContainer>
      <WelcomeText>
        Enter the url from your pokemon showdown battle to get real time data or
        click example
      </WelcomeText>
      <ButtonContainer>
        <button onClick={() => setBattleRoomId(devRoomId)}>Example</button>
        <button onClick={() => setDisplayUrlInput(!displayUrlInput)}>
          Url
        </button>
      </ButtonContainer>
      {displayUrlInput && <Form handleSubmit={handleSubmit} />}
    </HomeContainer>
  );
};

export default Home;
