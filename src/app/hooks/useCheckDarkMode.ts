import { useState, useEffect } from "react";

const useDarkModeDetection = (): boolean => {
 const [isDarkMode, setIsDarkMode] = useState(false);

 useEffect(() => {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleDarkModeChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
   setIsDarkMode(event.matches);
  };

  setIsDarkMode(darkModeMediaQuery.matches);

  darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
  return () => {
   darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
  };
 }, []);

 return isDarkMode;
};

export default useDarkModeDetection;