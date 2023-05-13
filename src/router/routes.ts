import { devRoomId } from "../developmentMode";

export const paths = {
  effectiveness: "/effectiveness",
  inBattle: "/inBattle/:id",
  search: "/search",
  inBattleGenerator: (battleId: string) => `/inBattle/${battleId}`,
  extension: "/extension/inBattle/:id",
  inExtensionGenerator: (battleId: string) => `/extension/inBattle/${battleId}`,

  quiz: "/quiz",
  home: "/home",
  example: `/inBattle/${devRoomId}`,
};
