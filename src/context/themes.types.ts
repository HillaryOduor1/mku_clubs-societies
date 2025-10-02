/*/ Constants and types
export const THEME_KEY = "theme";
export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Theme = typeof THEMES[keyof typeof THEMES];

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void; // required
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}*/
/*/ Constants and types
export const THEME_KEY = "theme";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type ThemeMode = typeof THEMES[keyof typeof THEMES]; // "light" | "dark"

export interface BrandColors {
  primary: string;
  secondary: string;
  neutral: string;
  contrast: string;
}

export interface Theme {
  mode: ThemeMode;
  colors: BrandColors;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setClubTheme: (clubId: string) => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}*/
// src/context/themes.types.ts
export const THEME_KEY = "theme";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Theme = typeof THEMES[keyof typeof THEMES];

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}


