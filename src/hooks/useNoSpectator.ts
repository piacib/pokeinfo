import React, { useEffect, useState } from "react";
import { ReturnType, teamsType } from "./useWebsSocket";
// example url:
// https://piacib.github.io/pokeinfo/
// ?battleId=battle-gen9randombattle-1831739535
// &isExtension=true
// &userTeam=Cacturne%2CPolteageist%2CGallade%2CCrabominable%2CHypno%2CGoodra-Hisui
// &opponentsTeam=Quaquaval%2CGrumpig%2CDunsparce%2COricorio-Pa%27u%2CGarchomp
const useNoSpectator = (): ReturnType => {
  console.log("useNoSpectator");
  const [teams, setTeams] = useState<teamsType>({ p1: [], p2: [] });
  const [activePokemon, setActivePokemon] = useState<teamsType>({
    p1: [],
    p2: [],
  });
  const params = new URLSearchParams(window.location.search);
  const userTeamParam = params.get("userTeam");
  const userTeam = userTeamParam ? userTeamParam.split(",") : null;
  const opponentsTeamParam = params.get("opponentsTeam");
  const opponentsTeam = opponentsTeamParam
    ? opponentsTeamParam.split(",")
    : null;
  if (!userTeam || !opponentsTeam) {
    return [[{ p1: [], p2: [] }, setTeams], activePokemon];
  }
  useEffect(() => {
    setTeams({ p1: userTeam, p2: opponentsTeam });
    setActivePokemon({ p1: [userTeam[0]], p2: [opponentsTeam[0]] });
  }, []);
  return [[teams, setTeams], activePokemon];
};

export default useNoSpectator;
