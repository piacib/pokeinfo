import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OptionsMenu from "./OptionsMenu";
import { render } from "../../test/test_utils";

test("Types arr appears", () => {
  render(
    <OptionsMenu>
      <div>Test 1</div>
      <div>Test 2</div>
      <div>Test 3</div>
    </OptionsMenu>,
  );
  const test = ["Test 1", "Test 2", "Test 3"];
  test.forEach((x) => {
    const regex = new RegExp(x, "i");
    const el = screen.getByText(regex);
    expect(el).toBeInTheDocument();
  });
});
