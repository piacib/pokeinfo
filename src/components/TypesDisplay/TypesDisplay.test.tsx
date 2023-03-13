import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";
import TypesDisplay from "./TypesDisplay";
import { TypeName } from "../../types";
const typesArr: TypeName[] = ["Normal", "Fighting"];
describe("Types display", () => {
  it("Types arr appears", () => {
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
});
