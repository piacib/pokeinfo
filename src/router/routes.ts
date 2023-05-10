import { devRoomId } from "../developmentMode";

export const paths = {
  effectiveness: "/effectiveness",
  inBattleId: "/inBattle/:id",
  inBattle: "/inBattle",
  search: "/search",
  inBattleGenerator: (battleId: string) => `/inBattle/${battleId}`,
  quiz: "/quiz",
  home: "/home",
  example: `/inBattle/${devRoomId}`,
};
