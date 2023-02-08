import React, { useEffect, useState } from "react";
import "./App.css";
import { TypeWriterContainer } from "./TypeWriterContainer.style";
import { AppDisplay, Button } from "./App.style";
import { TeamDisplay } from "./components/TeamDisplay/TeamDisplay";
import Home from "./components/Home/Home";

export interface RoomIdProp {
  /** room-battle-${string}-${number} */
  roomId: string;
}
const App: React.FC = () => {
  const [opponentsTeam, setOpponentsTeam] = useState<boolean>(true);
  const [battleRoomId, setBattleRoomId] = useState("");
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
      {battleRoomId ? (
        <>
          <Button onClick={() => setOpponentsTeam(!opponentsTeam)}>
            Switch Team
          </Button>
          <AppDisplay>
            <TypeWriterContainer>
              <h1>Poke Info</h1>
            </TypeWriterContainer>
            <TeamDisplay
              opponentsTeam={opponentsTeam}
              battleRoomId={battleRoomId}
            />
          </AppDisplay>
        </>
      ) : (
        <Home setBattleRoomId={setBattleRoomId} />
      )}
    </>
  );
};

export default App;
