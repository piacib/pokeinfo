import React, { useEffect, useReducer, useRef, useState } from "react";
import { isRandomBattle } from "../functions";
import {
  getActivePokemon,
  getBattleType,
  getBuiltTeam,
  getRandomBattleData,
  getSafariBuiltTeam,
  getSafariSwappedPkm,
  getSwappedPkm,
  isMac,
} from "./websocket.functions";
export type teamsType = { p1: string[]; p2: string[] };
const showdownWs = "wss://sim3.psim.us/showdown/websocket";
type ReturnType = [
  [teamsType, React.Dispatch<React.SetStateAction<teamsType>>],
  teamsType,
];
const useWebSocketConnection = (
  battleRoomId: string,
): [
  React.MutableRefObject<WebSocket | undefined>,
  [string, React.Dispatch<React.SetStateAction<string>>],
] => {
  const ws = useRef<WebSocket>();
  const [message, setMessage] = useState("");
  // opens and closes websocket
  useEffect(() => {
    function connect(timeout = 500) {
      ws.current = new WebSocket(showdownWs);

      ws.current.onopen = () => {
        console.log("ws opened");
        if (ws.current?.readyState) {
          console.log("joining battleRoom", battleRoomId, ws.current);
          ws.current.send(`|/join ${battleRoomId}`);
        }
      };

      ws.current.onmessage = (e) => {
        setMessage(e.data);
      };

      ws.current.onclose = function (e) {
        console.log(
          "Socket is closed. Reconnect will be attempted in 1 second.",
          e.reason,
        );
        setTimeout(function () {
          connect((timeout += timeout));
        }, timeout);
      };

      ws.current.onerror = function (err: Event) {
        console.error("Socket encountered error: ", err, "Closing socket");
        ws.current?.close();
      };
    }

    connect();
    return () => {
      ws.current?.close();
    };
  }, []);
  return [ws, [message, setMessage]];
};
export const useWebSocket = (
  battleRoomId: string,
  previousBattleRoomId?: string | null,
): ReturnType => {
  const [ws, [message, setMessage]] = useWebSocketConnection(battleRoomId);
  const [teams, setTeams] = useState<teamsType>({ p1: [], p2: [] });
  const [activePokemon, setActivePokemon] = useState<teamsType>({
    p1: [],
    p2: [],
  });
  const [teamRecieved, setTeamRecieved] = useState(false);

  // checks if previous battle id is present
  // if yes then leaves stream and joins new battleroom id stream
  useEffect(() => {
    if (previousBattleRoomId && ws.current) {
      setTeams({ p1: [], p2: [] });
      setMessage("");
      ws.current?.send(`|/leave ${previousBattleRoomId}`);
      ws.current?.send(`|/join ${battleRoomId}`);
    }
  }, [previousBattleRoomId]);

  // handles random battle messages
  useEffect(() => {
    const battleType = getBattleType(message);
    if (!battleType || !isRandomBattle(battleType)) {
      return;
    }
    const { activePokemon: tempActive, teams: tempTeams } = getRandomBattleData(
      message,
      activePokemon,
      teams,
    );
    setTeams(tempTeams);
    // setActivePokemon(activePokemon);
    setActivePokemon(tempActive);
  }, [message]);

  // handles non random battle messages
  useEffect(() => {
    const battleType = getBattleType(message);
    if (!battleType || isRandomBattle(battleType)) {
      return;
    }
    // gets team from inital load and
    // sets itself to not enter loop again
    if (!teamRecieved) {
      const tempTeams = !isMac
        ? getBuiltTeam(message)
        : getSafariBuiltTeam(message);
      if (tempTeams && tempTeams.p1.length && tempTeams.p2.length) {
        setTeams(tempTeams);
        setTeamRecieved(true);
      }
    }
    const swapped = !isMac
      ? getSwappedPkm(message)
      : getSafariSwappedPkm(message);
    if (swapped) {
      const temp = getActivePokemon(swapped, activePokemon);
      if (temp) {
        setActivePokemon(temp);
      }
    }
  }, [message]);
  return [[teams, setTeams], activePokemon];
};
