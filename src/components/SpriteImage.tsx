import React from "react";
import { Sprites } from "@pkmn/img";
interface SpriteImageProps {
  name: string;
  size?: number;
}
const SpriteImage: React.FC<SpriteImageProps> = ({ name, size = 40 }) => {
  if (name === "Not revealed") {
    return (
      <span
        style={{
          transform: "scale(1.5)",
          background:
            "transparent url(https://play.pokemonshowdown.com/sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -0px 4px",
        }}
      />
    );
  }
  const { url } = Sprites.getPokemon(name.toLowerCase(), {
    gen: 7,
    shiny: false,
  });

  if (url === "https://play.pokemonshowdown.com/sprites/gen5/0.png") {
    return (
      <img
        src={url}
        alt={"question mark"}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      ></img>
    );
  }
  return (
    <img
      src={url}
      alt={name}
      style={{
        maxWidth: `${size + 10}px`,
        maxHeight: `${size}px`,
      }}
    ></img>
  );
};
export default SpriteImage;
