import { useEffect, useState } from "react";
import { keepTheme } from "../components/ModeToggle/theme";

export const useLightMode = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [lightMode, setLightMode] = useState("light");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      if (localTheme.includes("dark")) {
        setLightMode("dark");
      }
    }
  }, []);
  useEffect(() => {
    keepTheme();
  });
  return [lightMode, setLightMode];
};
