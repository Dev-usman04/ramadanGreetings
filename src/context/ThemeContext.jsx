/**
 * Simple context that stores `dark` boolean + setter.
 * We write to localStorage and toggle the 'dark' class on <html>.
 */
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  // read saved theme; default to light
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  // whenever `dark` changes, update the DOM + storage
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
