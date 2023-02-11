import React from "react";
import { ItemsContainer } from "./Items.style";
import {
  PropertyBtn,
  HiddenPropertyText,
} from "../PokemonDataDisplay/DataDisplay.style";
import { Dex } from "@pkmn/dex";
import { dexSearchPrepper } from "../../functions";

const Items = Dex.data.Items;
interface ItemsDisplayProps {
  items: string[] | undefined;
}
const ItemsDisplay: React.FC<ItemsDisplayProps> = ({ items }) => {
  return (
    <ItemsContainer>
      <h3>Items:</h3>
      {items ? (
        items.map((item) => (
          <PropertyBtn key={item}>
            {item}
            <HiddenPropertyText>
              {Items[dexSearchPrepper(item)].desc}
            </HiddenPropertyText>
          </PropertyBtn>
        ))
      ) : (
        <PropertyBtn>None</PropertyBtn>
      )}
    </ItemsContainer>
  );
};

export default ItemsDisplay;
