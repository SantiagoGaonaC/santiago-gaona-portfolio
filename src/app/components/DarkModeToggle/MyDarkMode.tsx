import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");

    if (storedMode !== null) {
      setIsDarkMode(storedMode === "true");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isDarkMode) {
      body!.classList.add("dark-mode");
    } else {
      body!.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prevState) => {
      const newMode = !prevState;

      localStorage.setItem("darkMode", newMode.toString());

      return newMode;
    });
  };

  return (
    <button
      className={styles.toggleButton}
      onClick={handleToggle}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
