import { screen } from "@testing-library/react";
import { render } from "../../test/test_utils";
import "@testing-library/jest-dom";
import TypesDisplay from "./TypesDisplay";
import { TypeName } from "../../types";
const typesArr: TypeName[] = ["Normal", "Fighting"];
test("Types arr appears", () => {
  render(<TypesDisplay types={typesArr} />);
  typesArr.forEach((x) => {
    const regExp = new RegExp(x, "i");
    const el = screen.getByText(regExp);
    expect(el).toBeInTheDocument();
  });
});
