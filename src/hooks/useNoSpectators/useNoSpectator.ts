import { useEffect, useState } from "react";
import { teamsType } from "../useWebsSocket/useWebsSocket";
import { TeamsReturn } from "../useTeams/useTeams";
// example url:
// /pokeinfo/
// ?noSpectators=true&userTeam=Hypno%2CSlither+Wing&opponentsTeam=Magnezone%2CTinkaton%2CBanette
// #/extension/inBattle/
// battle-gen9randombattle-1883179912-akcs7p17r2bucyxrsnrtio6vfzr6tffpw
const getTeamFromParam = (team: string, searchParams: URLSearchParams) => {
  const teamParam = searchParams.get(team);
  return teamParam ? teamParam.split(",") : null;
};
const useNoSpectator = (href: string): TeamsReturn | false => {
  const [{ searchParams }] = useState(new URL(href));
  const [teams, setTeams] = useState<teamsType>({ p1: [], p2: [] });
  const [activePokemon, setActivePokemon] = useState<teamsType>({
    p1: [],
    p2: [],
  });
  useEffect(() => {
    const userTeam = getTeamFromParam("userTeam", searchParams);
    const opponentsTeam = getTeamFromParam("opponentsTeam", searchParams);
    if (!userTeam || !opponentsTeam) {
      return;
    }
    setTeams({ p1: userTeam, p2: opponentsTeam });
    setActivePokemon({ p1: [userTeam[0]], p2: [opponentsTeam[0]] });
  }, [searchParams]);
  if (!searchParams.toString()) {
    return false;
  }
  return { teams, setTeams, activePokemon, noSpectators: true };
};

export default useNoSpectator;
