/*import React from "react";
import { useTheme } from "../context/useTheme";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
*/
import React from "react";
import { useTheme } from "../context/useTheme";
import { THEMES } from "../context/themes.types";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle Theme"
    >
      {theme === THEMES.LIGHT ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
