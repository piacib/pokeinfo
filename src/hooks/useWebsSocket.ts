import React, { useEffect, useRef, useState } from "react";
import {
  getStartingPkm,
  getSwappedPkm,
  getTurnNumber,
} from "./websocket.functions";

type teamsType = { p1: string[]; p2: string[] };

const showdownWs = "wss://sim3.psim.us/showdown/websocket";
export const useWebSocket = (
  battleRoomId: string,
): [teamsType, React.Dispatch<React.SetStateAction<teamsType>>] => {
  const ws = useRef<WebSocket>();
  const [turnNumber, setTurnNumber] = useState<Number>(0);
  const [teams, setTeams] = useState<teamsType>({ p1: [], p2: [] });
  const [message, setMessage] = useState("");
  const isNewTurn = (data: string) => {
    return turnNumber !== getTurnNumber(data);
  };
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
  const joinBattleStream = (battleRoomId: string) => {
    ws.current?.send(`|/join ${battleRoomId}`);
  };
  useEffect(() => {
    // Exit condition
    if (!ws.current) return;
    // message reactions
    ws.current.onmessage = (e) => {
      setMessage(e.data);
    };
  }, []);
  useEffect(() => {
    const isStart = message.includes("|start");
    console.log("turn", getTurnNumber(message));
    console.log("is starting message", isStart);
    // console.log("getSwappedPkm", getSwappedPkm(e.data));
    // if (isStart) {
    //   const p1Pkm = getStartingPkm(e.data);
    //   const p2Pkm = getStartingPkm(e.data, 2);
    //   return;
    // }
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
