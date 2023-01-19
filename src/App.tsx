import React, { useState } from "react";
import "./App.css";
import { TypeWriterContainer } from "./TypeWriterContainer.style";
import { AppDisplay, Button, BottomBorder } from "./App.style";
import { TeamDisplay } from "./components/TeamDisplay/TeamDisplay";
import { useLocation } from "react-router-dom";
const config = {
  childList: true,
  subtree: true,
};

const displayCutOff = 600;
export interface AppProps {
  /** room-battle-${string}-${number} */
  roomId: string;
}
const App: React.FC<AppProps> = ({ roomId }) => {
  const [opponentsTeam, setOpponentsTeam] = useState<boolean>(true);
  const [changeDisplay, setChangeDisplay] = useState<boolean>(false);
  const location = useLocation();
  const battleId = location.pathname.slice(1);
  return (
    <>
      <AppDisplay>
        <TypeWriterContainer>
          <h1>Poke Info</h1>
        </TypeWriterContainer>
        <Button onClick={() => setOpponentsTeam(!opponentsTeam)}>
          Switch Team
        </Button>
        <TeamDisplay roomId={roomId} opponentsTeam={opponentsTeam} />
      </AppDisplay>
      <BottomBorder />
    </>
  );
};

export default App;
