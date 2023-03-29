import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider, ThemeProviderComponent } from "styled-components";
import { theme } from "../../theme";
import MovesDisplay from "./MovesDisplay";
import { MoveData } from "@pkmn/dex";
const testData: MoveData[] = [
  {
    num: 512,
    accuracy: 100,
    basePower: 55,
    category: "Physical",
    name: "Acrobatics",
    pp: 15,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
      distance: 1,
    },
    secondary: null,
    target: "any",
    type: "Flying",
    shortDesc: "Power doubles if the user has no held item.",
  },
  {
    num: 227,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Encore",
    pp: 5,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      bypasssub: 1,
    },
    volatileStatus: "encore",
    condition: {
      duration: 3,
      noCopy: true,
      onResidualOrder: 16,
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: {
      boost: {
        spe: 1,
      },
    },
    desc: "For its next 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, if the move is Assist, Copycat, Dynamax Cannon, Encore, Me First, Metronome, Mimic, Mirror Move, Nature Power, Sketch, Sleep Talk, Struggle, or Transform, or if the target is Dynamaxed.",
    shortDesc: "Target repeats its last move for its next 3 turns.",
  },
  {
    num: 79,
    accuracy: 75,
    basePower: 0,
    category: "Status",
    name: "Sleep Powder",
    pp: 15,
    priority: 0,
    flags: {
      powder: 1,
      protect: 1,
      reflectable: 1,
      mirror: 1,
    },
    status: "slp",
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        spe: 1,
      },
    },
    shortDesc: "Causes the target to fall asleep.",
  },
  {
    num: 668,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Strength Sap",
    pp: 10,
    priority: 0,
    flags: {
      protect: 1,
      reflectable: 1,
      mirror: 1,
      heal: 1,
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    zMove: {
      boost: {
        def: 1,
      },
    },
    desc: "Lowers the target's Attack by 1 stage. The user restores its HP equal to the target's Attack stat calculated with its stat stage before this move was used. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. Fails if the target's Attack stat stage is -6.",
    shortDesc: "User heals HP=target's Atk stat. Lowers Atk by 1.",
  },
  {
    num: 369,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "U-turn",
    pp: 20,
    priority: 0,
    flags: {
      contact: 1,
      protect: 1,
      mirror: 1,
    },
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Bug",
    desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
    shortDesc: "User switches out after damaging the target.",
  },
];
const testMoves = testData.map((x) => x.name);
test("loads and displays", async () => {
  render(
    <ThemeProvider theme={theme}>
      <MovesDisplay movesData={[]} />
    </ThemeProvider>,
  );
  const moves = screen.getByText(/moves/i);
  expect(moves).toBeInTheDocument();
});

test("displays moves data", () => {
  render(
    <ThemeProvider theme={theme}>
      <MovesDisplay movesData={testData} />
    </ThemeProvider>,
  );
  testMoves.forEach((move) => {
    const element = screen.getByText(new RegExp(move, "i"));
    expect(element).toBeInTheDocument();
  });
});

// test("item description is initially invisible", async () => {
//   render(
//     <ThemeProvider theme={theme}>
//       <ItemsDisplay items={testItems} />
//     </ThemeProvider>,
//   );
//   testItems.forEach((x, idx) => {
//     const regex = new RegExp(x, "i");
//     const element = screen.getByText(new RegExp(x, "i"));
//     const description = screen.getByText(
//       new RegExp(testDescriptions[idx], "i"),
//     );
//     const style = window.getComputedStyle(description);
//     expect(style.display).toBe("none");
//   });
// });
