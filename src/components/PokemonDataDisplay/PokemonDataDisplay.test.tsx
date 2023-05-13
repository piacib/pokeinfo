import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import "@testing-library/jest-dom";
import PokemonDataDisplay from "./PokemonDataDisplay";
const handleSubmit = (e: React.SyntheticEvent): void => {
  return;
};
describe("PokemonDataDisplay", () => {
  const pokemon = "Azumarill";
  it("Pokemon name appears", () => {
    render(
      <ThemeProvider theme={theme}>
        <PokemonDataDisplay pokemon={pokemon} battleType="gen9ou" />
      </ThemeProvider>,
    );
    const PokemonName = screen.getByText(pokemon);
    expect(PokemonName).toBeInTheDocument();
  });
  it("Pokemon stats appears", () => {
    render(
      <ThemeProvider theme={theme}>
        <PokemonDataDisplay pokemon={pokemon} battleType="gen9ou" />
      </ThemeProvider>,
    );
    const stats = screen.getByText(new RegExp("stats", "i"));
    expect(stats).toBeInTheDocument();
    ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"].forEach((x) => {
      const stat = screen.getByText(new RegExp(x + ":", "i"));
      expect(stat).toBeInTheDocument();
    });
  });
  it("Incorrect Pokemon cause error screen", () => {
    render(
      <ThemeProvider theme={theme}>
        <PokemonDataDisplay pokemon={"badName"} battleType="gen9ou" />
      </ThemeProvider>,
    );
    const errorMessage = screen.getByText("Enter Pokemon:");
    expect(errorMessage).toBeInTheDocument();
  });
});
