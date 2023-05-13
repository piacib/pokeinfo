import React, { useEffect } from "react";
import { TypeWriterContainer } from "../../styles/TypeWriterContainer.style";
import {
  ButtonContainer,
  HomeContainer,
  WelcomeHeader,
  WelcomeText,
  HomeLink,
} from "./Home.style";
import { paths } from "../../router/routes";

const Home: React.FC = ({}) => {
  return (
    <HomeContainer>
      <TypeWriterContainer>
        <WelcomeHeader>Welcome To Pokeinfo</WelcomeHeader>
      </TypeWriterContainer>
      <WelcomeText>
        Enter the url from your pokemon showdown battle to get real time data or
        click example
      </WelcomeText>
      <ButtonContainer>
        <HomeLink to={paths.search}>Search A battle</HomeLink>
        <HomeLink to={paths.example}>Example</HomeLink>
        <HomeLink to={paths.quiz}>Effectiveness Quiz</HomeLink>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
