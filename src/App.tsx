import React, { useEffect, useRef, useState } from "react";
import { TypeWriterContainer } from "./TypeWriterContainer.style";
import { AppDisplay, BattleButton, Button } from "./App.style";
import { TeamDisplay } from "./components/TeamDisplay/TeamDisplay";
import Home from "./components/Home/Home";
import { UrlForm } from "./components/Home/Home.style";

export interface RoomIdProp {
  /** room-battle-${string}-${number} */
  roomId: string;
}
const App: React.FC = () => {
  const [opponentsTeam, setOpponentsTeam] = useState<boolean>(true);
  const [battleRoomId, setBattleRoomId] = useState("");
  const [isInExtension, setIsInExtension] = useState(false);
  const [displayUrlInput, setDisplayUrlInput] = useState(false);
  const previousBattleRoomId = useRef("");
  // useEffect(() => {
  //   previousBattleRoomId.current = battleRoomId;
  // }, [battleRoomId]);
  useEffect(() => {
    if (window.location.search) {
      const regMatch = window.location.search.match(/\?battleId=(.*)/);
      console.log(regMatch);
      if (regMatch) {
        setIsInExtension(true);
        setBattleRoomId(regMatch[1]);
      }
    }
  });
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    previousBattleRoomId.current = battleRoomId;
    const target = e.target as typeof e.target & {
      url: { value: string };
    };
    const battleIndex = target.url.value.indexOf("battle");
    if (battleIndex === -1) {
      return;
    }
    const battleRoomIdTemp = target.url.value.slice(battleIndex);
    setBattleRoomId(battleRoomIdTemp);
    console.log(battleRoomIdTemp);
  };
  console.log("prev", previousBattleRoomId, battleRoomId);

  return (
    <>
      {battleRoomId ? (
        <>
          <Button onClick={() => setOpponentsTeam(!opponentsTeam)}>
            Switch Team
          </Button>
          {!isInExtension && (
            <BattleButton onClick={() => setDisplayUrlInput(!displayUrlInput)}>
              Enter new battle
            </BattleButton>
          )}
          {displayUrlInput && (
            <UrlForm onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="url">Enter Url:</label>
              <input type="text" id="url" name="url" />
              <input type="submit" value="Submit" />
            </UrlForm>
          )}
          <AppDisplay>
            <TypeWriterContainer>
              <h1>Poke Info</h1>
            </TypeWriterContainer>
            <TeamDisplay
              opponentsTeam={opponentsTeam}
              battleRoomId={battleRoomId}
              previousBattleRoomId={previousBattleRoomId.current}
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
