import React, { useEffect, useRef, useState } from "react";
const showdownWs = "ws://sim.smogon.com:8000/showdown/websocket";

export const useWebSocket = () => {
  const [wsData, setWsData] = useState("");

  const ws = useRef();
  useEffect(() => {
    ws.current = new WebSocket(showdownWs);
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    const wsCurrent = ws.current;

    return () => {
      wsCurrent.close();
    };
  }, []);
  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      // const message = JSON.parse(e.data);
      console.log("e", e);
      console.log(e.data);
      const isStart = e.data.includes("|start");

      if (isStart) {
      }
    };
  }, []);
};
