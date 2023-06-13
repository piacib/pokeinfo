import { fireEvent, screen } from "@testing-library/react";
import { vi } from "vitest";
import { render } from "../../test/test_utils";
import PokeTracker, { stopText, trackText } from "./PokeTracker";
// Tests that clicking the toggle button toggles the state and displays the correct text.
it("test_toggle_button_toggles_state", () => {
  let mockToggle = false;
  const mockHandleChange = vi.fn();
  const mockSetToggle = vi.fn(() => (mockToggle = !mockToggle));
  render(
    <PokeTracker
      toggle={mockToggle}
      setToggle={mockSetToggle}
      handleChange={mockHandleChange}
    />,
  );

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent(trackText);
  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(mockHandleChange).toHaveBeenCalled();
  expect(mockSetToggle).toHaveBeenCalled();
  expect(mockToggle).toBeTruthy();
  fireEvent(
    button,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(mockHandleChange).toHaveBeenCalledTimes(2);
  expect(mockSetToggle).toHaveBeenCalled();
  expect(mockToggle).toBeFalsy();
});
