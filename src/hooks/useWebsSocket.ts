import React, { useEffect, useReducer, useRef, useState } from "react";
import { isRandomBattle } from "../functions";
import {
  getBattleType,
  getBuiltTeam,
  getSwappedPkm,
} from "./websocket.functions";
type teamsType = { p1: string[]; p2: string[] };
const showdownWs = "wss://sim3.psim.us/showdown/websocket";

export const useWebSocket = (
  battleRoomId: string,
): [teamsType, React.Dispatch<React.SetStateAction<teamsType>>] => {
  const ws = useRef<WebSocket>();
  const [teams, setTeams] = useState<teamsType>({ p1: [], p2: [] });
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

    const swapped = getSwappedPkm(message);
    console.log("teams", teams, swapped);
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
      console.log("newTeams", newTeams);
    }
  }, [message]);
  return [teams, setTeams];
};
