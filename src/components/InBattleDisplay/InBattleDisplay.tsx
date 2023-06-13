import { useParams } from "react-router-dom";
import { Suspense, useRef } from "react";
import { AppDisplay, PokeInfo } from "../../App.style";
import { TypeWriterContainer } from "../../styles/TypeWriterContainer.style";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { LoadingScreen } from "../LoadingScreen";
import TeamDisplay from "../TeamDisplay/TeamDisplay";

export const InBattleDisplay = () => {
  const previousBattleRoomId = useRef("");
  const { id } = useParams();

  if (!id) {
    return <></>;
  }
  return (
    <AppDisplay>
      <TypeWriterContainer>
        <PokeInfo>Pokeinfo</PokeInfo>
      </TypeWriterContainer>
      <ErrorBoundary>
        <Suspense fallback={<LoadingScreen />}>
          <TeamDisplay
            battleRoomId={id}
            previousBattleRoomId={previousBattleRoomId.current}
          />
        </Suspense>
      </ErrorBoundary>
    </AppDisplay>
  );
};
