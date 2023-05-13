import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UrlSearch, { connectText, enterUrl } from "./UrlSearch";

const battleBtnRegex = new RegExp(connectText, "i");
const labelRegex = new RegExp(enterUrl, "i");

// TODO: fix test-- getting error b/c useNavigate is outside router and mocking response returns jest undefined

// const mockedUsedNavigate = jest.fn();
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => jest.fn(),
// }));
// test("UrlSearch button is present", () => {
//   render(<UrlSearch />);
//   const element = screen.getByText(battleBtnRegex);
//   expect(element).toBeInTheDocument();
// });

// test("Url form appears on click", () => {
//   render(
//     <ThemeProvider theme={theme}>
//       <UrlSearch />
//     </ThemeProvider>,
//   );
//   const element = screen.getByText(battleBtnRegex);
//   fireEvent.click(element);
//   expect(element).toBeInTheDocument();

//   const label = screen.getByLabelText(labelRegex);
//   expect(label).toBeInTheDocument();
// });

// test("UrlSearch form disappears", () => {
//   render(
//     <ThemeProvider theme={theme}>
//       <UrlSearch />
//     </ThemeProvider>,
//   );
//   const element = screen.getByText(battleBtnRegex);
//   fireEvent.click(element);

//   const label = screen.getByLabelText(labelRegex);
//   expect(element).toBeInTheDocument();

//   fireEvent.click(element);

//   expect(label).not.toBeInTheDocument();
// });
