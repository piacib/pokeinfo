export const isDevelopmentMode = process.env.NODE_ENV === "development";
const devPathname = "battle-gen9randombattle-1710900595";
export const devRoomId = "room-" + devPathname;

export const userTestTeam = [
  "Vivillon-River",
  "Scizor",
  "Hatterene",
  "Iron Moth",
  "Gyarados",
  "Giratina",
];
export const opponentTestTeam = [
  "Annihilape",
  "Carbink",
  "Azumarill",
  "Gallade",
  "Abomasnow",
  "Diancie",
];
export const testAbilities = ["Cheek Pouch", "Intimidate", "Swift Swim"];

const ouGen9Message =
  "|player|p2|Bentanamo10|1||teamsize|p1|6|teamsize|p2|6|gen|9|tier|[Gen 9] OU|rule|Sleep Clause Mod: Limit one foe put to sleep|rule|Species Clause: Limit one of each Pokémon|rule|OHKO Clause: OHKO moves are banned|rule|Evasion Items Clause: Evasion items are banned|rule|Evasion Moves Clause: Evasion moves are banned|rule|Endless Battle Clause: Forcing endless battles is banned|rule|HP Percentage Mod: HP is shown in percentages|clearpoke|poke|p1|Azumarill, M||poke|p1|Ting-Lu||poke|p1|Cinderace, M||poke|p1|Maushold-Four||poke|p1|Chien-Pao||poke|p1|Polteageist-Antique||poke|p2|Amoonguss, F||poke|p2|Clodsire, F||poke|p2|Azumarill, M||poke|p2|Toxapex, M||poke|p2|Dragapult, M||poke|p2|Breloom, F||teampreview";

const obj = {
  "Iron Leaves": {
    level: 82,
    abilities: ["Quark Drive"],
    items: ["Choice Band", "Life Orb"],
    roles: {
      Wallbreaker: {
        abilities: ["Quark Drive"],
        items: ["Choice Band"],
        teraTypes: ["Fighting"],
        moves: [
          "Close Combat",
          "Leaf Blade",
          "Megahorn",
          "Psyblade",
          "Wild Charge",
        ],
      },
      "Setup Sweeper": {
        abilities: ["Quark Drive"],
        items: ["Life Orb"],
        teraTypes: ["Fighting"],
        moves: [
          "Close Combat",
          "Leaf Blade",
          "Psyblade",
          "Swords Dance",
          "Wild Charge",
        ],
      },
    },
  },
  "Iron Moth": {
    level: 79,
    abilities: ["Quark Drive"],
    items: ["Air Balloon", "Choice Specs", "Heavy-Duty Boots"],
    roles: {
      "Fast Support": {
        abilities: ["Quark Drive"],
        items: ["Air Balloon", "Choice Specs", "Heavy-Duty Boots"],
        teraTypes: ["Fire", "Grass"],
        moves: [
          "Energy Ball",
          "Fiery Dance",
          "Morning Sun",
          "Sludge Wave",
          "Toxic Spikes",
          "U-turn",
        ],
      },
      "Fast Attacker": {
        abilities: ["Quark Drive"],
        items: ["Choice Specs"],
        teraTypes: ["Fire", "Grass"],
        moves: [
          "Discharge",
          "Energy Ball",
          "Fiery Dance",
          "Fire Blast",
          "Sludge Wave",
          "U-turn",
        ],
        evs: { hp: 81 },
      },
    },
  },
};
