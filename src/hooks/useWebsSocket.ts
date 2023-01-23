import React, { useEffect, useRef, useState } from "react";
const showdownWs = "ws://sim.smogon.com:8000/showdown/websocket";

export const useWebSocket = (socketUrl: string) => {
  const ws = useRef<WebSocket>();
  // opens and closes websocket
  useEffect(() => {
    ws.current = new WebSocket(socketUrl);
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    const wsCurrent = ws.current;

    return () => {
      wsCurrent.close();
    };
  }, []);

  useEffect(() => {
    // Exit condition
    if (!ws.current) return;
    ws.current.onmessage = (e) => {
      console.log(e.data);
      return e;
    };
  }, []);
};
