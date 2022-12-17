import React from "react";

import { FaUserSecret, TbMoonStars, BsSun } from "../../assets/icons";
import classes from "./Navbar.styles.module.css";
import { useThemeContext } from "../../contexts/ThemeContext";

type Props = {};

const Navbar = (props: Props) => {
  const { mode, setMode } = useThemeContext();

  const handleDarkButtonClick = () => {
    setMode("dark");
  };

  const handleLightButtonClick = () => {
    setMode("light");
  };

  return (
    <nav className={mode === "dark" ? classes.dark : ""}>
      <div className={classes.user__img__container}>
        <FaUserSecret />
      </div>
      <h6 className={classes.nav__heading}>
        Welcome to <span>Avengers Page!</span>
      </h6>
      {mode === "light" && (
        <div className={`${classes.mode__container}`}>
          <div className={classes.dark_icon} onClick={handleDarkButtonClick}>
            <TbMoonStars />
          </div>
        </div>
      )}
      {mode === "dark" && (
        <div className={classes.mode__container}>
          <div className={classes.dark_icon} onClick={handleLightButtonClick}>
            <BsSun />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
