import React, { useEffect, useState } from "react";
import { Dex } from "@pkmn/dex";
import {
  StatsContainer,
  StatBox,
  StatName,
  StatsHead,
  StatBar,
  Bar,
  StatsTableRow,
  StatCaption,
  StatsTable,
} from "./StatsDisplay.style";
enum PokemonStats {
  hp = "hp",
  atk = "atk",
  def = "def",
  spa = "spa",
  spd = "spd",
  spe = "spe",
}
type Stats = {
  [key in PokemonStats]: number;
};
type obj = {
  [key in PokemonStats]: string;
};
const statNameObj: obj = {
  hp: "HP",
  atk: "Attack",
  def: "Defense",
  spa: "Sp. Atk",
  spd: "Sp. Def",
  spe: "Speed",
};
interface StatsDisplayProps {
  pokemon: string;
}
const StatsDisplay: React.FC<StatsDisplayProps> = ({ pokemon }) => {
  const [stats, setStats] = useState<Stats>({
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0,
  });
  const pokemonName = pokemon[0].toUpperCase() + pokemon.slice(1);

  useEffect(() => {
    if (Dex.species.get(pokemonName).exists) {
      setStats(Dex.species.get(pokemonName).baseStats);
    }
  }, [pokemonName]);
  const entries = Object.entries(stats) as [PokemonStats, number][];
  return (
    <StatsContainer>
      <StatsTable>
        <StatCaption>Stats</StatCaption>
        <StatsHead></StatsHead>
        <tbody>
          {entries.map(([name, val]) => (
            <StatRow statName={name} statVal={val} />
          ))}
        </tbody>
      </StatsTable>
    </StatsContainer>
  );
};

export default StatsDisplay;

const StatRow = ({
  statName,
  statVal,
}: {
  statName: PokemonStats;
  statVal: number;
}) => (
  <StatsTableRow key={`${statName}`} type={statName}>
    <StatBox>
      <StatName>
        {statNameObj[statName]}:{statVal}
      </StatName>
    </StatBox>
    <StatBar>
      <Bar stat={statVal}></Bar>
    </StatBar>
  </StatsTableRow>
);
