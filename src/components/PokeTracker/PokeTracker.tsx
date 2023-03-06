import React from "react";
import {
  ToggleCheckbox,
  ToggleContainer,
  ToggleLabel,
  ToggleLabelSpan,
} from "./PokeTracker.styled";
interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const PokeTracker = ({ handleChange, toggle, setToggle }: Props) => {
  return (
    <>
      <h3>{!toggle ? "Track Active Pokemon" : "Stop Tracking Active"}:</h3>
      <ToggleContainer>
        <ToggleCheckbox
          type="checkbox"
          id="activePkmToggle"
          onChange={(e) => {
            if (handleChange) {
              handleChange(e);
            }
            setToggle(!toggle);
          }}
          checked={toggle}
        />
        <ToggleLabel htmlFor="activePkmToggle">
          <ToggleLabelSpan></ToggleLabelSpan>
        </ToggleLabel>
      </ToggleContainer>
    </>
  );
};

export default PokeTracker;
