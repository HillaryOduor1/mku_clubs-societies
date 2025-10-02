
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.js";
import { ThemeContextType } from "./themes.types.js";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
