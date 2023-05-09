import React from "react";
import { TypeWriterContainer } from "../../TypeWriterContainer.style";
import {
  ButtonContainer,
  HomeContainer,
  WelcomeHeader,
  WelcomeText,
} from "./Home.style";
import { Link } from "react-router-dom";
import { examplePath, inBattlePath, quizPath } from "../../router/routes";

const Home: React.FC = ({}) => {
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
        <Link to={inBattlePath}>Search A battle</Link>
        <Link to={examplePath}>Example</Link>
        <Link to={quizPath}>Effectiveness Quiz</Link>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
