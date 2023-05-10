import React, { useEffect } from "react";
import { TypeWriterContainer } from "../../TypeWriterContainer.style";
import {
  ButtonContainer,
  HomeContainer,
  WelcomeHeader,
  WelcomeText,
  HomeLink,
} from "./Home.style";
import { useNavigate, useSearchParams } from "react-router-dom";
import { paths } from "../../router/routes";
// http://127.0.0.1:5173/pokeinfo/?battleId=battle-gen9randombattle-1861417829&isExtension=true
const Home = () => {
  // navigates to site if in extension
  const navigate = useNavigate();
  useEffect(() => {
    const searchParams = window.location.search;
    if (searchParams) {
      const params = new URLSearchParams(searchParams);
      const paramBattleId = params.get("battleId");
      if (paramBattleId) {
        params.delete("battleId");
        const redirectPath = `${
          paths.inBattle
        }/${paramBattleId}/?${params.toString()}`;
        console.log(redirectPath);
        navigate(redirectPath);
      }
    }
  }, []);
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
        <HomeLink to={paths.search}>Search A Battle</HomeLink>
        <HomeLink to={paths.example}>Example</HomeLink>
        <HomeLink to={paths.quiz}>Effectiveness Quiz</HomeLink>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
