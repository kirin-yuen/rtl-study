import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ToggleThemeButton() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        return (
          <button
            onClick={() => {
              const { isLightTheme, setIsLightTheme } = context;

              setIsLightTheme(!isLightTheme);
            }}
          >
            Toggle Theme
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}
