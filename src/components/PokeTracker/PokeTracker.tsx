import React from "react";
import { ToggleButton } from "./PokeTracker.styled";
interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export const trackText = "Track Active Pokemon";
export const stopText = "Stop Tracking Active";
const PokeTracker = ({ handleChange, toggle, setToggle }: Props) => {
  return (
    <ToggleButton
      onClick={(e) => {
        if (handleChange) {
          handleChange(e);
        }
        setToggle(!toggle);
      }}
    >
      {!toggle ? trackText : stopText}
    </ToggleButton>
  );
};

export default PokeTracker;
