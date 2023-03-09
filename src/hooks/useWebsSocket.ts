import React, { useEffect, useReducer, useRef, useState } from "react";
import { isRandomBattle } from "../functions";
import {
  getBattleType,
  getBuiltTeam,
  getSafariBuiltTeam,
  getSafariSwappedPkm,
  getSwappedPkm,
} from "./websocket.functions";
type teamsType = { p1: string[]; p2: string[] };
type dataType = {
  teams: teamsType;
  activePokemon: teamsType;
  initialTeamRecieved: boolean;
};
const showdownWs = "wss://sim3.psim.us/showdown/websocket";
type ReturnType = [
  [teamsType, React.Dispatch<React.SetStateAction<teamsType>>],
  teamsType,
];
const isMac = false; //window.navigator.userAgent.includes("Mac");
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
    ws.current = new WebSocket(showdownWs);
    ws.current.onopen = () => {
      console.log("ws opened");
      if (ws.current) {
        console.log("joining battleRoom", battleRoomId);
        ws.current.send(`|/join ${battleRoomId}`);
      }
    };
    ws.current.onclose = () => console.log("ws closed");
    const wsCurrent = ws.current;

    return () => {
      wsCurrent.close();
    };
  }, []);
  useEffect(() => {
    // Exit condition
    if (!ws.current) return;
    // message reactions
    ws.current.onmessage = (e) => {
      setMessage(e.data);
    };
  }, []);
  return [ws, [message, setMessage]];
};
export const useWebSocket = (
  battleRoomId: string,
  previousBattleRoomId?: string | null,
  // activePkmTrack = false,
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
    if (battleType && !isRandomBattle(battleType)) {
      return;
    }
    console.log(battleType, "is random");
    const swapped = !isMac
      ? getSwappedPkm(message)
      : getSafariSwappedPkm(message);
    if (swapped) {
      const { p1, p2 } = swapped;
      const temp: teamsType = activePokemon;

      if (p1 && temp.p1[0] !== p1[0]) {
        temp.p1 = p1;
      }
      if (p2 && temp.p2[0] !== p2[0]) {
        temp.p2 = p2;
      }
      setActivePokemon(temp);
    }
    if (swapped) {
      let newTeams = teams;
      if (swapped.p1) {
        swapped.p1.map((newPokemon) => {
          if (!newTeams.p1.includes(newPokemon)) {
            newTeams = { p1: [...newTeams.p1, newPokemon], p2: newTeams.p2 };
          }
        });
      }
      if (swapped.p2) {
        swapped.p2.map((newPokemon) => {
          if (!newTeams.p2.includes(newPokemon)) {
            newTeams = { p2: [...newTeams.p2, newPokemon], p1: newTeams.p1 };
          }
        });
      }
      setTeams(newTeams);
    }
  }, [message]);
  // handles non random battle messages
  useEffect(() => {
    // console.log("checking built team", teams);
    const battleType = getBattleType(message);
    if (battleType && isRandomBattle(battleType)) {
      return;
    }
    // console.log(battleType, "is built");
    // gets team from inital load and
    // sets itself to not enter loop again
    if (!teamRecieved) {
      const tempTeams = !isMac
        ? getBuiltTeam(message)
        : getSafariBuiltTeam(message);
      if (tempTeams && tempTeams.p1.length && tempTeams.p2.length) {
        // console.log("setting built team", tempTeams);
        setTeams(tempTeams);
        setTeamRecieved(true);
      }
      return;
    }
    // const swapped = !isMac
    //   ? getSwappedPkm(message)
    //   : getSafariSwappedPkm(message);
    const swapped = getSwappedPkm(message);
    console.log("message", message);
    console.log("getSafariSwappedPkm", getSafariSwappedPkm(message));
    console.log("getSwappedPkm", getSwappedPkm(message));
    if (swapped) {
      const { p1, p2 } = swapped;
      const temp: teamsType = activePokemon;
      console.log("swapped,temp", swapped, temp);
      if (p1 && p1.length && temp.p1[0] !== p1[0]) {
        temp.p1 = p1;
      }
      if (p2 && p2.length && temp.p2[0] !== p2[0]) {
        temp.p2 = p2;
      }
      console.log("setActivePokemon", temp);
      setActivePokemon(temp);
    }
  }, [message]);
  return [[teams, setTeams], activePokemon];
};
