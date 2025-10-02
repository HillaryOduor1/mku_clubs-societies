/* eslint-disable react-refresh/only-export-components */
/*import React, { createContext, useContext, useState, useEffect } from "react";
import { THEMES, ThemeContextType, ThemeProviderProps, THEME_KEY } from "./themes.types";
import { getClubById } from "@/data/clubsData";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(THEMES.LIGHT);

  // ✅ toggle between light/dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
  };

  // ✅ allow club-specific theme overrides
  const setClubTheme = (clubId: string) => {
    const club = getClubById(clubId);
    if (club?.settings) {
      // You could store in localStorage or extend logic here
      setTheme(club.settings.mode || THEMES.LIGHT);
    }
  };

  // ✅ persist theme in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.documentElement.classList.remove(THEMES.LIGHT, THEMES.DARK);
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};*/
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  THEMES,
  THEME_KEY,
  Theme,
  ThemeMode,
  ThemeContextType,
  ThemeProviderProps,
} from "./themes.types.js";
import { getClubById } from "../data/clubsData.js";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const defaultTheme: Theme = {
  mode: THEMES.LIGHT,
  colors: {
    primary: "#2563EB", // fallback blue
    secondary: "#9333EA", // fallback purple
    neutral: "#FFFFFF",
    contrast: "#000000",
  },
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // ✅ Toggle light/dark
  const toggleTheme = () => {
    setTheme((prev) => ({
      ...prev,
      mode: prev.mode === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
    }));
  };

  // ✅ Apply brand colors of a club
  const setClubTheme = (clubId: string) => {
    const club = getClubById(clubId);
    setTheme((prev) => ({
      ...prev,
      colors: club?.brandColors ?? prev.colors, // always safe
    }));
  };

  // ✅ Load saved theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) as ThemeMode | null;
    if (storedTheme && (storedTheme === THEMES.LIGHT || storedTheme === THEMES.DARK)) {
      setTheme((prev) => ({ ...prev, mode: storedTheme }));
    }
  }, []);

  // ✅ Save theme + update <html> classes
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme.mode);
    document.documentElement.classList.remove(THEMES.LIGHT, THEMES.DARK);
    document.documentElement.classList.add(theme.mode);
  }, [theme.mode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, setClubTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

