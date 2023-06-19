import { screen } from "@testing-library/react";
import AbilitiesDisplay from "./AbilitiesDisplay";
import { render } from "../../test/test_utils";

import "@testing-library/jest-dom";
test("Abilities text is present", () => {
  render(<AbilitiesDisplay abilities={[]} />);
  const abilities = screen.getByText(/Abilities/i);
  expect(abilities).toBeInTheDocument();
});
