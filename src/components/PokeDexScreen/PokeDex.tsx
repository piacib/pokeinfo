import React from "react";
import {
  ContainerTop,
  Container,
  InnerContainer,
  RedCircle,
  RedCircleTop,
  RedCircleBottom,
  ContainerBottom,
  BarContainer,
} from "./PokeDex.style";
interface Props {
  children: React.ReactNode;
}
const PokeDexScreen: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <ContainerTop>
        <RedCircleTop />
        <RedCircleTop />
      </ContainerTop>
      <InnerContainer>{children}</InnerContainer>
      <ContainerBottom>
        <RedCircleBottom />
        <BarContainer>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </BarContainer>
      </ContainerBottom>
    </Container>
  );
};

export default PokeDexScreen;
