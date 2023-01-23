import React, { useState } from "react";
import "./App.css";
import { TypeWriterContainer } from "./TypeWriterContainer.style";
import { AppDisplay, Button, BottomBorder } from "./App.style";
import { TeamDisplay } from "./components/TeamDisplay/TeamDisplay";
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

  return (
    <>
      <AppDisplay>
        <TypeWriterContainer>
          <h1>Poke Info</h1>
        </TypeWriterContainer>
        <Button onClick={() => setOpponentsTeam(!opponentsTeam)}>
          Switch Team
        </Button>
        <TeamDisplay opponentsTeam={opponentsTeam} />
      </AppDisplay>
      <BottomBorder />
    </>
  );
};

export default App;
