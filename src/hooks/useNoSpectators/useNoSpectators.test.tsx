import UseNoSpectatorsExample, {
  exampleUrl,
  CorrectTeam,
} from "./UseNoSpectators.example";
import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

test("UseNoSpectators reads user team", () => {
  render(
    <>
      <UseNoSpectatorsExample />
    </>,
  );
  const p1 = screen.getByText(/p1/i);
  expect(p1.children.length).toBe(CorrectTeam.p1.length);
  CorrectTeam.p1.forEach((pokemon) => {
    const regEx = new RegExp(pokemon, "i");
    const pkmn = screen.getByText(regEx);
    expect(pkmn).toBeInTheDocument();
  });
});
test("UseNoSpectators reads opponents team", () => {
  render(
    <>
      <UseNoSpectatorsExample />
    </>,
  );
  const p1 = screen.getByText(/p2/i);
  expect(p1.children.length).toBe(CorrectTeam.p2.length);
  CorrectTeam.p2.forEach((pokemon) => {
    const regEx = new RegExp(pokemon, "i");
    const pkmn = screen.getByText(regEx);
    expect(pkmn).toBeInTheDocument();
  });
});
