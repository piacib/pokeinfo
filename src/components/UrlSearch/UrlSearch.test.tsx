import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UrlSearch, { connectText } from "./UrlSearch";
import { render } from "../../test/test_utils";
import { vi } from "vitest";

const connectHeader = new RegExp(connectText, "i");
const mockNavigate = vi.fn();
const battleId = "battle-gen9randombattle-1831739535";
vi.mock("react-router-dom", async () => {
  const actual = (await vi.importActual("react-router-dom")) as any;
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

test("UrlSearch Header is present", () => {
  render(<UrlSearch />);
  const element = screen.getByText(connectHeader);
  expect(element).toBeInTheDocument();
});

test("Url form text is inputable", () => {
  render(<UrlSearch />);
  const input = screen.getByRole("textbox") as HTMLInputElement;
  fireEvent.change(input, { target: { value: battleId } });
  expect(input.value).toBe(battleId);
});
