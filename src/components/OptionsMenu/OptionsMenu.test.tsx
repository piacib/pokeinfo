import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OptionsMenu from "./OptionsMenu";
import { render } from "../../test/test_utils";

test("Types arr appears", () => {
  const test = ["Test 1", "Test 2", "Test 3"];
  render(
    <OptionsMenu>
      {test.map((x) => (
        <div>{x}</div>
      ))}
    </OptionsMenu>,
  );

  test.forEach((x) => {
    const regex = new RegExp(x, "i");
    const el = screen.getByText(regex);
    expect(el).toBeInTheDocument();
  });
});
