import React from "react";

import { FaUserSecret, TbMoonStars, BsSun } from "../../assets/icons";
import classes from "./Navbar.styles.module.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className={classes.user__img__container}>
        <FaUserSecret />
      </div>
      <h6 className={classes.nav__heading}>
        Welcome to <span>Avengers Page!</span>
      </h6>
      <div className={classes.mode__container}>
        <TbMoonStars />
      </div>
      <div className={classes.mode__container}>
        <BsSun />
      </div>
    </nav>
  );
};

export default Navbar;
