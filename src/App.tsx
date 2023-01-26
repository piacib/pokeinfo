import React, { useEffect, useState } from "react";
import "./App.css";
import { TypeWriterContainer } from "./TypeWriterContainer.style";
import { AppDisplay, Button, BottomBorder } from "./App.style";
import { TeamDisplay } from "./components/TeamDisplay/TeamDisplay";
import { useParams } from "react-router-dom";
const config = {
  childList: true,
  subtree: true,
};
export interface RoomIdProp {
  /** room-battle-${string}-${number} */
  roomId: string;
}
const displayCutOff = 600;

const App: React.FC = () => {
  const [opponentsTeam, setOpponentsTeam] = useState<boolean>(true);
  const [changeDisplay, setChangeDisplay] = useState<boolean>(false);
  const [battleRoomId, setBattleRoomId] = useState("");
  useEffect(() => {
    if (window.location.search) {
      const regMatch = window.location.search.match(/=(.*)/);
      if (regMatch) {
        setBattleRoomId(regMatch[1]);
      }
    }
  });
  console.log(document.location.pathname);
  return (
    <>
      <AppDisplay>
        <TypeWriterContainer>
          <h1>Poke Info</h1>
        </TypeWriterContainer>
        <Button onClick={() => setOpponentsTeam(!opponentsTeam)}>
          Switch Team
        </Button>

        {battleRoomId ? (
          <TeamDisplay
            opponentsTeam={opponentsTeam}
            battleRoomId={battleRoomId}
          />
        ) : (
          <></>
        )}
      </AppDisplay>
      <BottomBorder />
    </>
  );
};

export default App;
