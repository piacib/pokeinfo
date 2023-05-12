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
import { useNavigate } from "react-router-dom";

const Home: React.FC = ({}) => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const paramBattleId = params.get("battleId");
  useEffect(() => {
    if (paramBattleId) {
      console.log(paramBattleId);
      const path = paths.inBattleGenerator(paramBattleId);
      console.log(path);
      console.log(params);
      navigate(path);
    }
  });
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
