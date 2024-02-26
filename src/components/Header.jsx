import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { ToggleLightTheme, ToggleDarkTheme } from "../icons/ThemeIcon";

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-row justify-between">
      <h2 className="text-3xl font-bold ">Expense Tracker</h2>
      <div>
        {darkMode ? (
          <ToggleLightTheme fill="white" toggleDarkMode={toggleDarkMode} />
        ) : (
          <ToggleDarkTheme
            fill="currentColor"
            toggleDarkMode={toggleDarkMode}
          />
        )}
      </div>
    </div>
  );
}
