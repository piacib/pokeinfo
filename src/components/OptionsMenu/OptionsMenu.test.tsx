import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
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
  const test = ["Test 1", "Test 2", "Test 3"];
  test.forEach((x) => {
    const regex = new RegExp(x, "i");
    const el = screen.getByText(regex);
    expect(el).toBeInTheDocument();
  });
});
