import React, { useEffect, useState } from "react";
import "./App.css";
import { TypeWriterContainer } from "./TypeWriterContainer.style";
import { AppDisplay, Button } from "./App.style";
import { TeamDisplay } from "./components/TeamDisplay/TeamDisplay";
import { isDevelopmentMode, devRoomId } from "./developmentMode";
import WelcomeDisplay from "./components/WelcomeDisplay/WelcomeDisplay";

export interface RoomIdProp {
  /** room-battle-${string}-${number} */
  roomId: string;
}
const App: React.FC = () => {
  const [opponentsTeam, setOpponentsTeam] = useState<boolean>(true);
  const [battleRoomId, setBattleRoomId] = useState("");
  console.log(battleRoomId);
  useEffect(() => {
    if (window.location.search) {
      const regMatch = window.location.search.match(/=(.*)/);
      if (regMatch) {
        setBattleRoomId(regMatch[1]);
      }
    }
  });
  return (
    <>
      {/* {!battleRoomId || battleRoomId !== "random-testing" ? (
        <AppDisplay>
          <TypeWriterContainer>
            <h1>Poke Info</h1>
          </TypeWriterContainer>
          <Button onClick={() => setOpponentsTeam(!opponentsTeam)}>
            Switch Team
          </Button>
          {isDevelopmentMode && !battleRoomId ? (
            <TeamDisplay
              opponentsTeam={opponentsTeam}
              battleRoomId={"random-testing"}
            />
          ) : (
            <></>
          )}
          {battleRoomId ? (
            <TeamDisplay
              opponentsTeam={opponentsTeam}
              battleRoomId={battleRoomId}
            />
          ) : (
            <></>
          )}
        </AppDisplay>
      ) :  */}
      <AppDisplay>
        <TypeWriterContainer>
          <h1>Poke Info</h1>
        </TypeWriterContainer>
        <Button onClick={() => setOpponentsTeam(!opponentsTeam)}>
          Switch Team
        </Button>
        {isDevelopmentMode && (
          <TeamDisplay opponentsTeam={opponentsTeam} battleRoomId={devRoomId} />
        )}
        {battleRoomId && !isDevelopmentMode && (
          <TeamDisplay
            opponentsTeam={opponentsTeam}
            battleRoomId={battleRoomId}
          />
        )}
      </AppDisplay>

      {/* <WelcomeDisplay /> */}
    </>
  );
};

export default App;
