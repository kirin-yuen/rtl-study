import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ToggleThemeButton() {
  const { isLightTheme, setIsLightTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => {
        setIsLightTheme(!isLightTheme);
      }}
    >
      Toggle Theme
    </button>
  );
}
