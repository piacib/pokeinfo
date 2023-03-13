import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "@testing-library/jest-dom";
import OptionsMenu from "./OptionsMenu";

test("Types arr appears", () => {
  render(
    <ThemeProvider theme={theme}>
      <OptionsMenu>
        <div>Test 1</div>
        <div>Test 2</div>
        <div>Test 3</div>
      </OptionsMenu>
    </ThemeProvider>,
  );
  const aside = document.getElementsByTagName("aside");
  expect(aside.length).toBe(1)
  expect(aside[0].style).toBe('-100%')
  screen.debug();
});
