import React, { useEffect, useState } from "react";
import { Dex } from "@pkmn/dex";
import {
  StatsContainer,
  StatBox,
  StatName,
  StatValue,
  StatsHead,
  StatBar,
  Bar,
  StatsTableRow,
} from "./StatsDisplay.style";
interface Stats {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
}
interface obj {
  [k: string]: string;
}
const stateNameObj: obj = {
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

  return (
    <StatsContainer>
      <StatsHead>
        <tr>
          <th colSpan={2}>Stats</th>
        </tr>
      </StatsHead>
      <tbody>
        {Object.entries(stats).map((x) => (
          <StatsTableRow key={`${x[0]}`} type={x[0]}>
            <StatBox>
              <StatName>{stateNameObj[x[0]]}:</StatName>
              <StatValue>
                <b>{x[1]}</b>
              </StatValue>
            </StatBox>
            <StatBar>
              <Bar stat={x[1]}></Bar>
            </StatBar>
          </StatsTableRow>
        ))}
      </tbody>
    </StatsContainer>
  );
};

export default StatsDisplay;
