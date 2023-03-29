import { teamsType } from "./useWebsSocket";

export const getBattleType = (data: string) => {
  const match = data.match(/battle-(.*?)-/);
  if (match) {
    return match[1];
  }
  return null;
};
export const getBuiltTeam = (data: string) => {
  // gets text following p1| until either a comma (which precedes gender) or |
  // used for any non random battle
  const regExMatch1 = data.match(/(?<=poke\|p1\|)(.*?)(?=\||,)/g);
  const regExMatch2 = data.match(/(?<=poke\|p2\|)(.*?)(?=\||,)/g);
  if (!regExMatch1 || !regExMatch2) {
    return false;
  }
  return { p1: regExMatch1, p2: regExMatch2 };
};

export const getSwappedPkm = (data: string) => {
  const regExMatch1: string[] | null = data.match(
    /(?<=switch\|p1a: [^\|]*\|)(.*?)(?=,|\|)/g,
  );
  const regExMatch2: string[] | null = data.match(
    /(?<=switch\|p2a: [^\|]*\|)(.*?)(?=,|\|)/g,
  );
  if (!regExMatch1 && !regExMatch2) {
    return false;
  }
  return { p1: regExMatch1, p2: regExMatch2 };
};

const iosBuiltMatch = (data: string, player: "p1" | "p2") => {
  const match = data.matchAll(
    player === "p1"
      ? /(?:poke\|p1\|)(.*?)(?=\||,)/g
      : /(?:poke\|p2\|)(.*?)(?=\||,)/g,
  );
  let matches: string[] = [];
  for (const m of match) {
    matches.push(m[1]);
  }
  return matches;
};

export const getSafariBuiltTeam = (data: string) => {
  // gets text following p1| until either a comma (which precedes gender) or |
  // used for any non random battle
  const regExMatch1 = iosBuiltMatch(data, "p1");
  const regExMatch2 = iosBuiltMatch(data, "p2");
  // console.log({ p1: regExMatch1, p2: regExMatch2 });
  if (!regExMatch1 || !regExMatch2) {
    return false;
  }
  return { p1: regExMatch1, p2: regExMatch2 };
};

const iosSwitchMatch = (data: string, player: "p1" | "p2") => {
  const match = data.matchAll(
    player === "p1"
      ? /(?:switch\|p1a:) ([^\|]*\|)(.*?)(?=,|\|)/g
      : /(?:switch\|p2a:) ([^\|]*\|)(.*?)(?=,|\|)/g,
  );
  let matches: string[] = [];
  for (const m of match) {
    matches.push(m[2]);
  }
  if (!matches.length) {
    return null;
  }
  return matches;
};
export const getSafariSwappedPkm = (data: string) => {
  const regExMatch1 = iosSwitchMatch(data, "p1");
  const regExMatch2 = iosSwitchMatch(data, "p2");
  // console.log("safari", regExMatch1, regExMatch2);
  if (!regExMatch1 && !regExMatch2) {
    return false;
  }
  return { p1: regExMatch1, p2: regExMatch2 };
};
const getRandomTeamData = (
  swapped: {
    p1: string[] | null;
    p2: string[] | null;
  },
  teams: teamsType,
) => {
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
  return newTeams;
};

export const getActivePokemon = (
  swapped: {
    p1: string[] | null;
    p2: string[] | null;
  },
  activePokemon: teamsType,
) => {
  if (swapped) {
    const { p1, p2 } = swapped;
    const temp: teamsType = activePokemon;
    if (p1 && p1.length) {
      temp.p1 = [p1[p1.length - 1]];
    }
    if (p2 && p2.length) {
      temp.p2 = [p2[p2.length - 1]];
    }
    return temp;
  }
};
export const isMac = window.navigator.userAgent.includes("Mac");

export const getRandomBattleData = (
  message: string,
  activePokemon: teamsType,
  teams: teamsType,
) => {
  const swapped = !isMac
    ? getSwappedPkm(message)
    : getSafariSwappedPkm(message);
  if (swapped) {
    const tempActive = getActivePokemon(swapped, activePokemon);
    const tempTeams = getRandomTeamData(swapped, teams);
    return {
      activePokemon: tempActive ? tempActive : activePokemon,
      teams: tempTeams ? tempTeams : teams,
    };
  }
  return { activePokemon, teams };
};
