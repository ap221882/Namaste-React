import React from "react";

import { useThemeContext } from "../../contexts/ThemeContext";
import NavbarUi from "./NavBarUI/NavbarUi";

const Navbar = () => {
  const { mode, setMode } = useThemeContext();

  const handleDarkButtonClick = () => {
    setMode("dark");
  };

  const handleLightButtonClick = () => {
    setMode("light");
  };

  const isDark = mode === "dark";

  return (
    <NavbarUi
      isDark={isDark}
      handleDarkButtonClick={handleDarkButtonClick}
      handleLightButtonClick={handleLightButtonClick}
    />
  );
};

export default Navbar;
