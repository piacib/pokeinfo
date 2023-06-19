import React from "react";
import { screen } from "@testing-library/react";
import PokemonDataDisplay from "./PokemonDataDisplay";
import { vi } from "vitest";
import { render } from "../../test/test_utils";
import { Params } from "react-router-dom";
vi.mock("react-router-dom", () => ({
  useParams: (): Readonly<Params<string>> => ({ id: "battle-gen9ou-" }),
}));

describe("PokemonDataDisplay", () => {
  const pokemon = "Azumarill";
  it("Pokemon name appears", () => {
    render(<PokemonDataDisplay pokemon={pokemon} />);
    const PokemonName = screen.getByText(pokemon);
    expect(PokemonName).toBeInTheDocument();
  });
  it("Pokemon stats appears", () => {
    render(<PokemonDataDisplay pokemon={pokemon} />);
    const stats = screen.getByText(new RegExp("stats", "i"));
    expect(stats).toBeInTheDocument();
    ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"].forEach((x) => {
      const stat = screen.getByText(new RegExp(x + ":", "i"));
      expect(stat).toBeInTheDocument();
    });
  });
  it("Incorrect Pokemon cause error screen", () => {
    render(<PokemonDataDisplay pokemon={"badName"} />);
    const errorMessage = screen.getByText("Enter Pokemon:");
    expect(errorMessage).toBeInTheDocument();
  });
});
