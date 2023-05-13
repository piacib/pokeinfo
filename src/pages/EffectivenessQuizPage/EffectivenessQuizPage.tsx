import React from "react";
import EffectivenessQuiz from "../../components/EffectivenessQuiz/EffectivenessQuiz";
import { Container } from "./EffectivenessQuizPage.style";
import Page from "../Page";

const EffectivenessQuizPage = () => {
  return (
    <Page header>
      <Container>
        <EffectivenessQuiz />
      </Container>
    </Page>
  );
};

export default EffectivenessQuizPage;
