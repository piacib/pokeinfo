import { devRoomId } from "../developmentMode";

export const paths = {
  inBattle: "/inBattle/:id",
  search: "/search",
  pokemonsearch: "/pokemonsearch",
  inBattleGenerator: (battleId: string) => `/inBattle/${battleId}`,
  extension: "/extension/inBattle/:id",
  inExtensionGenerator: (battleId: string) => `/extension/inBattle/${battleId}`,
  quiz: "/quiz",
  home: "/",
  example: `/inBattle/${devRoomId}`,
};
