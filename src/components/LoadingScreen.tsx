import React from "react";
import LoadingSVG from "../media/pokeball.svg";
import styled, { keyframes } from "styled-components";
const spinning = keyframes`
    from {
        transform: rotate(359deg);
    }
    to {
        transform: rotate(0deg);
    }
  
  `;
const LoadingIcon = styled.img`
  animation: ${spinning} 4s infinite linear;
  height: 9rem;
  width: 9rem;
  margin: auto;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;
export const LoadingScreen = () => {
  return (
    <Container>
      <LoadingIcon src={LoadingSVG} alt="Loading" />;
    </Container>
  );
};
