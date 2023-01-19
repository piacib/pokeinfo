import React from "react";
import { AbilitiesContainer } from "./Abilities.style";
import { PropertyBtn, HiddenPropertyText } from "../PokemonDataDisplay/DataDisplay.style";
import { Dex } from "@pkmn/dex";
import { dexSearchPrepper } from "../../functions";

const Abilities = Dex.data.Abilities;
interface AbilitiesDisplayProps {
  abilities: string[];
}
const AbilitiesDisplay: React.FC<AbilitiesDisplayProps> = ({ abilities }) => {
  return (
    <AbilitiesContainer>
      <h3>Abilities:</h3>
      {abilities.map((ability) => (
        <PropertyBtn key={ability}>
          {ability}
          <HiddenPropertyText>{Abilities[dexSearchPrepper(ability)]?.shortDesc}</HiddenPropertyText>
        </PropertyBtn>
      ))}
    </AbilitiesContainer>
  );
};

export default AbilitiesDisplay;
