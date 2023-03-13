import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";
import OptionsMenu from "./OptionsMenu";
describe("Option Menu", () => {
  it("", async () => {
    render(
      <ThemeProvider theme={theme}>
        <OptionsMenu>
          <div>Test 1</div>
          <div>Test 2</div>
          <div>Test 3</div>
        </OptionsMenu>
      </ThemeProvider>,
    );
    const checkbox = screen.getByRole("checkbox");
    await fireEvent.click(checkbox);
    const aside = await screen.getByTestId(/aside-menu/i);
    console.log(window.getComputedStyle(aside));
  });
});
