import React from "react";
import { useNavigate } from "react-router-dom";

import { useThemeContext } from "../../contexts/ThemeContext";
import NavbarUi from "./NavBarUI/NavbarUi";

const Navbar = () => {
  const { mode, setMode } = useThemeContext();

  const navigate = useNavigate();

  const handleDarkButtonClick = () => {
    setMode("dark");
  };

  const handleLightButtonClick = () => {
    setMode("light");
  };

  const handleSignOff = () => {
    // dispatch(appLogout());
    navigate("/logout");
  };

  const isDark = mode === "dark";

  return (
    <NavbarUi
      isDark={isDark}
      handleDarkButtonClick={handleDarkButtonClick}
      handleLightButtonClick={handleLightButtonClick}
      handleSignOff={handleSignOff}
    />
  );
};

export default Navbar;
