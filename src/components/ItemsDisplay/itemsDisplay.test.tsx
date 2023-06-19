import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemsDisplay from "./ItemsDisplay";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
const testItems = ["Choice Band", "Lum Berry"];
const testDescriptions = [
  "Holder's Attack is 1.5x, but it can only select the first move it executes.",
  "Holder cures itself if it has a non-volatile status or is confused. Single use.",
];
test("loads and displays no item display", async () => {
  render(
    <ThemeProvider theme={theme}>
      <ItemsDisplay items={undefined} />
    </ThemeProvider>,
  );
  const noItems = screen.getByText(/none/i);
  expect(noItems).toBeInTheDocument();
});

test("loads and displays item display", async () => {
  render(
    <ThemeProvider theme={theme}>
      <ItemsDisplay items={testItems} />
    </ThemeProvider>,
  );
  testItems.forEach((x) => {
    const regex = new RegExp(x, "i");
    const element = screen.getByText(regex);
    expect(element).toBeInTheDocument();
  });
});
test("item description is initially invisible", async () => {
  render(
    <ThemeProvider theme={theme}>
      <ItemsDisplay items={testItems} />
    </ThemeProvider>,
  );
  testItems.forEach((x, idx) => {
    const description = screen.getByText(
      new RegExp(testDescriptions[idx], "i"),
    );
    const style = window.getComputedStyle(description);
    expect(style.display).toBe("none");
  });
});
// test("item description is visible on hover", async () => {
//   render(
//     <ThemeProvider theme={theme}>
//       <ItemsDisplay items={testItems} />
//     </ThemeProvider>,
//   );
//   const x = testItems[0];
//   const regex = new RegExp(x, "i");
//   const element = screen.getByText(new RegExp(x, "i"));
//   const description = screen.getByText(new RegExp(testDescriptions[0], "i"));
//   userEvent.hover(element);

//   await waitFor(() => {
//     const style = window.getComputedStyle(description);
//     expect(style.display).not.toBe("none");
//     screen.debug();
//   });
//   // testItems.forEach(async (x, idx) => {
//   //   const regex = new RegExp(x, "i");
//   //   const element = screen.getByText(new RegExp(x, "i"));
//   //   const description = screen.getByText(
//   //     new RegExp(testDescriptions[idx], "i"),
//   //   );
//   //   fireEvent.mouseOver(element);

//   //   const style = window.getComputedStyle(description);
//   //   expect(style.display).not.toBe("none");
//   //   screen.debug(description);
//   // });
// });
