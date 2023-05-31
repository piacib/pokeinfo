import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  boxShadow: "5px 5px 9px 0px rgba(0, 0, 0, 0.4)",
  media: {
    smallScreen: "18.75rem",
    mediumScreen: "37.5rem",
    extraSmallScreen: "14.5rem",
  },
  outerBorderWidth: "5px",
  outerBorderColor: "solid",
  outerBorderStyle: "black",
  backgroundColor: "#eef2f5",
  pokedexColor: "#333",
  pokedexStyles: {
    borderRadius: "0 0 0 15px",
  },
  fontColor: "black",
  secondaryBorderMargin: "0.25rem",
  padding: {
    medium: ".25rem",
    small: ".1rem",
    large: ".5rem",
  },
  color: {
    typeColors: {
      Normal: "rgb(168, 167, 120)",
      Ground: "rgb(224, 192, 104)",
      Rock: "rgb(163, 140, 33)",
      Bug: "rgb(114, 159, 62)",
      Ghost: "rgb(123, 98, 163)",
      Steel: "rgb(158, 183, 184)",
      Fighting: "rgb(192, 48, 40)",
      Fire: "rgb(247, 125, 37)",
      Flying: "rgb(168, 143, 239)",
      Water: "rgb(69, 146, 196)",
      Poison: "rgb(185, 127, 201)",
      Grass: "rgb(155, 204, 80)",
      Electric: "rgb(248, 208, 48)",
      Psychic: "rgb(243, 102, 185)",
      Ice: "rgb(152, 216, 216)",
      Dragon: "rgb(112, 56, 248)",
      Dark: "rgb(112, 88, 72)",
      Fairy: "rgb(238, 153, 172)",
      "???": "rgb(117, 117, 117)",
    },
    pokedexRed: "rgb(253,0,1)",
  },
  buttonBorderRadius: "10px",
  propertyBtn: {
    borderWidth: "2px",
  },
  burgerMenu: {
    measureType: "px",
    barWidth: 60,
    barHeight: 8,
    hamburgerGap: 6,
    foreground: "#333",
    background: "white",
    hamburgerMargin: 8,
    animationTiming: "200ms ease-in-out",
    extraSmallScreen: {
      barWidth: 20,
      barHeight: 4,
      hamburgerGap: 2,
    },
    // hamburgerHeight: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);
  },
};
