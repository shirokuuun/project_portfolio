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
      return localStorage.getItem("theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });
  // The first client render matches the dark HTML generated during the build.
  const theme = hydrated ? preference : "dark";
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#161815" : "#f4f3ed");
    try {
      localStorage.setItem("theme", theme);
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
