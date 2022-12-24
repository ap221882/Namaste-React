import React from "react";

import classes from "./header.styles.module.css";
import ClassBasedComponent1 from "../../miscellaneous/ParentClassBasedComponent";
import { useThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const { mode } = useThemeContext();
  return (
    <section
      className={`${classes.banner__container} ${
        mode === "dark" ? `${classes.dark_overlay}` : ""
      }`}
    >
      <div className={classes.team__info}></div>
      {/* <ClassBasedComponent1 /> */}
    </section>
  );
};

export default Header;
