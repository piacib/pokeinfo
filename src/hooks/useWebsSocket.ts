import React, { useEffect, useReducer, useRef, useState } from "react";
import { isRandomBattle } from "../functions";
import {
  getBattleType,
  getBuiltTeam,
  getSwappedPkm,
} from "./websocket.functions";
type teamsType = { p1: string[]; p2: string[] };
const showdownWs = "wss://sim3.psim.us/showdown/websocket";
type ReturnType = [
  [teamsType, React.Dispatch<React.SetStateAction<teamsType>>],
  teamsType,
];
export const useWebSocket = (
  battleRoomId: string,
  previousBattleRoomId?: string | null,
  activePkmTrack = false,
): ReturnType => {
  const ws = useRef<WebSocket>();
  const [teams, setTeams] = useState<teamsType>({ p1: [], p2: [] });
  const [message, setMessage] = useState("");
  const [activePokemon, setActivePokemon] = useState<teamsType>({
    p1: [],
    p2: [],
  });
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

  useEffect(() => {
    // Exit condition
    if (!ws.current) return;
    // message reactions
    ws.current.onmessage = (e) => {
      setMessage(e.data);
    };
  }, []);

  useEffect(() => {
    const battleType = getBattleType(message);
    if (battleType && !isRandomBattle(battleType)) {
      const tempTeams = getBuiltTeam(message);
      if (tempTeams) {
        setTeams(tempTeams);
        ws.current?.close();
        return;
      }
    }
    // console.log(message);
    const swapped = getSwappedPkm(message);
    // console.log("swapped", swapped);
    if (swapped) {
      const { p1, p2 } = swapped;
      const temp: teamsType = activePokemon;

      if (p1 && temp.p1[0] !== p1[0]) {
        temp.p1 = p1;
      }
      if (p2 && temp.p2[0] !== p2[0]) {
        temp.p2 = p2;
      }
      console.log("active", temp);
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
  return [[teams, setTeams], activePokemon];
};
