import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import "@testing-library/jest-dom";
import TypesDisplay from "./TypesDisplay";
import { TypeName } from "../../types";
const typesArr: TypeName[] = ["Normal", "Fighting"];
test("Types arr appears", () => {
  render(
    <ThemeProvider theme={theme}>
      <TypesDisplay types={typesArr} />
    </ThemeProvider>,
  );
  typesArr.forEach((x) => {
    const regExp = new RegExp(x, "i");
    const el = screen.getByText(regExp);
    expect(el).toBeInTheDocument();
  });
});
