import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import AbilitiesDisplay from "./AbilitiesDisplay";
import "@testing-library/jest-dom";
import { testAbilities } from "../../developmentMode";
test("Abilities text is present", () => {
  render(
    <ThemeProvider theme={theme}>
      <AbilitiesDisplay abilities={[]} />
    </ThemeProvider>,
  );
  const abilities = screen.getByText(/Abilities/i);
  expect(abilities).toBeInTheDocument();
});
