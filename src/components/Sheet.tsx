/*import * as React from "react";
import { useTheme } from "../hooks/useTheme"; // adjust path if needed

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "right" | "left" | "top" | "bottom";
  children: React.ReactNode;
}

const Sheet = ({ isOpen, onClose, position = "right", children }: SheetProps) => {
  const { theme } = useTheme(); // ✅ get theme state (light/dark)

  React.useEffect(() => {
    const body = document.body;
    body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Theme-aware colors
  const themeBgColor = theme === "dark" ? "#1f2937" : "#ffffff"; // dark: gray-800, light: white
  const textColor = theme === "dark" ? "#f9fafb" : "#111827"; // light text for dark mode

  const baseStyle: React.CSSProperties = {
    position: "fixed",
    zIndex: 50,
    backgroundColor: themeBgColor,
    color: textColor,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
  };

  const positions: Record<string, React.CSSProperties> = {
    left: { left: 0, top: 0, height: "100%", width: "320px", transform: "translateX(0)" },
    right: { right: 0, top: 0, height: "100%", width: "320px", transform: "translateX(0)" },
    top: { top: 0, left: 0, right: 0, height: "auto", transform: "translateY(0)" },
    bottom: { bottom: 0, left: 0, right: 0, height: "auto", transform: "translateY(0)" },
  };

  const sheetStyle = { ...baseStyle, ...positions[position] };

  const backdropStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 40,
  };

  return (
    <>
      <div
        style={backdropStyle}
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        tabIndex={0}
        role="button"
        aria-label="Close menu"
      />
      <div style={sheetStyle}>{children}</div>
    </>
  );
};

export default Sheet;*/
import * as React from "react";
import { useTheme } from "../context/useTheme.js";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "right" | "left" | "top" | "bottom";
  children: React.ReactNode;
}

const Sheet = ({ isOpen, onClose, position = "right", children }: SheetProps) => {
  const { theme } = useTheme(); // theme = { mode, colors }

  React.useEffect(() => {
    const body = document.body;
    body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // ✅ Theme-aware colors
  const themeBgColor = theme.mode === "dark" ? "#1f2937" : "#ffffff";
  const textColor = theme.mode === "dark" ? "#f9fafb" : "#111827";

  // ✅ Prefer club brand colors if available
  const brandPrimary = theme.colors.primary || "#2563EB";

  const baseStyle: React.CSSProperties = {
    position: "fixed",
    zIndex: 50,
    backgroundColor: themeBgColor,
    color: textColor,
    borderTop: `4px solid ${brandPrimary}`,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease-in-out",
  };

  const positions: Record<string, React.CSSProperties> = {
    left: { left: 0, top: 0, height: "100%", width: "320px", transform: "translateX(0)" },
    right: { right: 0, top: 0, height: "100%", width: "320px", transform: "translateX(0)" },
    top: { top: 0, left: 0, right: 0, height: "auto", transform: "translateY(0)" },
    bottom: { bottom: 0, left: 0, right: 0, height: "auto", transform: "translateY(0)" },
  };

  const sheetStyle = { ...baseStyle, ...positions[position] };

  const backdropStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 40,
  };

  return (
    <>
      <div
        style={backdropStyle}
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        tabIndex={0}
        role="button"
        aria-label="Close menu"
      />
      <div style={sheetStyle}>{children}</div>
    </>
  );
};

export default Sheet;

