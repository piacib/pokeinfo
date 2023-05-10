import { devRoomId } from "../developmentMode";

export const paths = {
  effectiveness: "/effectiveness",
  inBattle: "/inBattle/:id",
  search: "/search",
  inBattleGenerator: (battleId: string) => `/inBattle/${battleId}`,
  quiz: "/quiz",
  home: "/home",
  example: `/inBattle/${devRoomId}`,
};
