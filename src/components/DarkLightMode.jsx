import React, { useEffect, useState } from "react";

import iconDay from "../assets/img/icon-day.svg";
import iconNight from "../assets/img/icon-moon.svg";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("prefer-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="left-[45px] order-5 w-[45px] h-[25px] rounded-2xl dark:bg-[#FEAC39] bg-[#DADADA] flex transition duration-300 focus:outline-none shadow"
      onClick={handleThemeSwitch}
    >
      <div className="relative w-[19px] h-[19px] rounded-full transition duration-500 transform bg-white dark:-translate-x-2 -translate-x-7 p-1 text-white left-[71.33%] right-[-33.56%] top-[12%] bottom-[12%]">
        {theme === "dark" ? (
          <img src={iconNight} alt="" />
        ) : (
          <img src={iconDay} alt="" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitcher;
