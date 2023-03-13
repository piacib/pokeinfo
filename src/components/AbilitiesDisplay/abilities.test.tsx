import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "@testing-library/jest-dom";

import AbilitiesDisplay from "./AbilitiesDisplay";
import { describe, expect, it } from "vitest";
import { testAbilities } from "../../developmentMode";
it("Abilities text is present", () => {
  render(
    <ThemeProvider theme={theme}>
      <AbilitiesDisplay abilities={[]} />
    </ThemeProvider>,
  );
  const abilities = screen.getByText(/Abilities/i);
  expect(abilities).toBeInTheDocument();
});
