import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import PokemonDataDisplay from "./PokemonDataDisplay";
import { vi } from "vitest";
import { Params } from "react-router-dom";
vi.mock("react-router-dom", () => ({
  useParams: (): Readonly<Params<string>> => ({ id: "battle-gen9ou-" }),
}));

describe("PokemonDataDisplay", () => {
  const pokemon = "Azumarill";
  it("Pokemon name appears", () => {
    render(
      <ThemeProvider theme={theme}>
        <PokemonDataDisplay pokemon={pokemon} />
      </ThemeProvider>,
    );
    const PokemonName = screen.getByText(pokemon);
    expect(PokemonName).toBeInTheDocument();
  });
  it("Pokemon stats appears", () => {
    render(
      <ThemeProvider theme={theme}>
        <PokemonDataDisplay pokemon={pokemon} />
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
        <PokemonDataDisplay pokemon={"badName"} />
      </ThemeProvider>,
    );
    const errorMessage = screen.getByText("Enter Pokemon:");
    expect(errorMessage).toBeInTheDocument();
  });
});
