import { TypeName } from "./types";
// import original module declarations
import "styled-components";
interface ModeObj {
  pokedexColor: string;
  backgroundColor: string;
  fontColor: string;
}
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ModeObj {
    media: {
      smallScreen: string;
    };
    outerBorderWidth: string;
    outerBorderColor: string;
    outerBorderStyle: string;
    secondaryBorderMargin: string;
    padding: {
      medium: string;
      small: string;
      large: string;
    };
    color: {
      typeColors: {
        [key: string]: string;
        // [Type in TypeName]: string;
      };
      pokedexRed: string;
    };
    buttonBorderRadius: string;
    burgerMenu: {
      measureType: string;
      barWidth: number;
      barHeight: number;
      hamburgerGap: number;
      foreground: string;
      background: string;
      hamburgerMargin: number;
      animationTiming: string;
    };
  }
}
