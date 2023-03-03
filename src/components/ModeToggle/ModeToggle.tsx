import React, { useEffect, useState } from "react";
import {
  ToggleCheckbox,
  ToggleContainer,
  ToggleLabel,
  ToggleLabelSpan,
} from "./ModeToggle.style";
import { setTheme } from "./theme";
// import "./toggle.css";
// to adjust toggle size set font-size
interface Props {
  togClass: string;
  setTogClass: React.Dispatch<React.SetStateAction<string>>;
}
const Toggle: React.FC<Props> = ({ togClass, setTogClass }) => {
  // const [togClass, setTogClass] = useState("dark");
  let theme = localStorage.getItem("theme");
  // check local storage for preferred theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);
  // toggle themes
  const handleChange = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };
  return (
    <ToggleContainer>
      <ToggleCheckbox
        type="checkbox"
        id="toggle"
        onChange={handleChange}
        checked={togClass === "light" ? true : false}
      />
      <ToggleLabel htmlFor="toggle">
        <ToggleLabelSpan></ToggleLabelSpan>
      </ToggleLabel>
    </ToggleContainer>
  );
};

export default Toggle;
