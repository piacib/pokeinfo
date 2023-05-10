import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "@testing-library/jest-dom";
import UrlSearch, { enterBattleText, enterUrl } from "./UrlSearch";
const handleSubmit = (e: React.SyntheticEvent): void => {
  return;
};
const battleBtnRegex = new RegExp(enterBattleText, "i");
const labelRegex = new RegExp(enterUrl, "i");

test("UrlSearch button is present", () => {
  render(
    <ThemeProvider theme={theme}>
      <UrlSearch />
    </ThemeProvider>,
  );
  const element = screen.getByText(battleBtnRegex);
  expect(element).toBeInTheDocument();
});

test("Url form appears on click", () => {
  render(
    <ThemeProvider theme={theme}>
      <UrlSearch />
    </ThemeProvider>,
  );
  const element = screen.getByText(battleBtnRegex);
  fireEvent.click(element);
  expect(element).toBeInTheDocument();

  const label = screen.getByLabelText(labelRegex);
  expect(label).toBeInTheDocument();
});

test("UrlSearch form disappears", () => {
  render(
    <ThemeProvider theme={theme}>
      <UrlSearch />
    </ThemeProvider>,
  );
  const element = screen.getByText(battleBtnRegex);
  fireEvent.click(element);

  const label = screen.getByLabelText(labelRegex);
  expect(element).toBeInTheDocument();

  fireEvent.click(element);

  expect(label).not.toBeInTheDocument();
});
