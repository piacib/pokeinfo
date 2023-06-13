import { useParams } from "react-router-dom";
import useNoSpectator from "../useNoSpectators/useNoSpectator";
import { teamsType, useWebSocket } from "../useWebsSocket/useWebsSocket";
import { useRef } from "react";
type TeamData = {
  teams: teamsType;
  setTeams: React.Dispatch<React.SetStateAction<teamsType>>;
  activePokemon: teamsType;
};

export interface TeamsReturn extends TeamData {
  noSpectators: boolean;
}
const useTeams = (): TeamsReturn => {
  const previousBattleRoomId = useRef("");

  const { id } = useParams();
  const websocketData = useWebSocket(`${id}`, previousBattleRoomId.current);
  const noSpectatorData = useNoSpectator(window.location.href);

  if (noSpectatorData === false) {
    return { ...websocketData };
  }
  return { ...noSpectatorData };
};
export default useTeams;
