import React from "react";

import { TbMoonStars, BsSun } from "../../../assets/icons";
import classes from "../Navbar.styles.module.css";
import AppModeIcon from "./AppModeIcon";
import NavbarHeader from "./NavbarHeader";

type Props = {
  isDark: boolean;
  handleLightButtonClick: () => void;
  handleDarkButtonClick: () => void;
};

const NavbarUi = ({
  isDark,
  handleDarkButtonClick,
  handleLightButtonClick,
}: Props) => {
  return (
    <nav className={isDark ? classes.dark : ""}>
      <NavbarHeader />
      {!isDark && (
        <AppModeIcon handler={handleDarkButtonClick}>
          <TbMoonStars />
        </AppModeIcon>
      )}
      {isDark && (
        <AppModeIcon handler={handleLightButtonClick}>
          <BsSun />
        </AppModeIcon>
      )}
    </nav>
  );
};

export default NavbarUi;
