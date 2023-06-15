import React, { useEffect, useReducer, useRef, useState } from "react";
import { isRandomBattle } from "../../functions";
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
import { TeamsReturn } from "../useTeams/useTeams";
import {
  devRoomId,
  opponentTestTeam,
  userTestTeam,
} from "../../developmentMode";
export type teamsKeys = "p1" | "p2";
export type teamsType = { [k in teamsKeys]: string[] };
const showdownWs = "wss://sim3.psim.us/showdown/websocket";
const spectatorsNotAllowed = "does not exist or requires a login to join.";
const battleObservingBegan = (message: string) =>
  message.includes("|init|battle");
const isSpectatingNotAllowed = (message: string) =>
  message.includes(spectatorsNotAllowed);

const useWebSocketConnection = (
  battleRoomId: string,
  connectCondition = true,
): {
  ws: React.MutableRefObject<WebSocket | undefined>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
} => {
  const ws = useRef<WebSocket>();
  const [message, setMessage] = useState("");
  // opens and closes websocket
  useEffect(() => {
    function connect(timeout = 500) {
      if (timeout >= 8000) {
        console.log("Socket unable to connect");
        return;
      }
      ws.current = new WebSocket(showdownWs);

      ws.current.onopen = (e) => {
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
          `Socket is closed. Reconnect will be attempted in ${
            timeout / 1000
          } second.`,
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
    console.log("checking condition");
    if (connectCondition) {
      console.log("condition confirmed");

      connect();
    }
    return () => {
      ws.current?.close();
    };
  }, []);
  return { ws, message, setMessage };
};
export const useWebSocket = (
  battleRoomId: string,
  previousBattleRoomId: string | null,
): TeamsReturn => {
  const isNoSpectatorsId = battleRoomId.split("-").length > 3;
  const wsNoConnectCondition = battleRoomId === devRoomId || isNoSpectatorsId;
  const { ws, message, setMessage } = useWebSocketConnection(
    battleRoomId,
    !wsNoConnectCondition,
  );
  const [teams, setTeams] = useState<teamsType>({ p1: [], p2: [] });
  const [activePokemon, setActivePokemon] = useState<teamsType>({
    p1: [],
    p2: [],
  });
  const [teamRecieved, setTeamRecieved] = useState(false);
  const [noSpectators, setNoSpectators] = useState(isNoSpectatorsId);

  // checks if previous battle id is present
  // if yes then leaves stream and joins new battleroom id stream
  useEffect(() => {
    if (previousBattleRoomId && ws.current) {
      console.log({ previousBattleRoomId });
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
  // handles battle that does not allow spectating
  useEffect(() => {
    if (isSpectatingNotAllowed(message)) {
      console.log(
        `The room '${battleRoomId}' does not exist or requires a login to join.`,
      );
      setNoSpectators(true);
      ws.current?.send(`|/leave ${battleRoomId}`);
    }
  }, [message, battleRoomId]);
  // handle example battle
  useEffect(() => {
    if (battleRoomId === devRoomId) {
      setTeams({
        p1: userTestTeam,
        p2: opponentTestTeam,
      });
    }
    return () => {};
  }, []);

  if (battleRoomId.split("-").length > 3) {
    return {
      teams,
      setTeams,
      activePokemon,
      noSpectators: true,
    };
  }
  return { teams, setTeams, activePokemon, noSpectators };
};
