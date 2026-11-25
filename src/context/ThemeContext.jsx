import { useEffect, useState, useSyncExternalStore } from "react";
import { ThemeContext } from "./theme.js";

const subscribeToHydration = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export const ThemeProvider = ({ children }) => {
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    clientSnapshot,
    serverSnapshot,
  );
  const [preference, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-appearance") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });
  // Match the light HTML generated during the build before hydrating preferences.
  const theme = hydrated ? preference : "light";
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#202020" : "#f6f6f6");
    try {
      localStorage.setItem("portfolio-appearance", theme);
    } catch {
      /* Storage may be unavailable. */
    }
  }, [theme, hydrated]);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () =>
          setTheme((value) => (value === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
