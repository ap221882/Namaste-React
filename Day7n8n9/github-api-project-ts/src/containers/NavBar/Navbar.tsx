import React from "react";

import { FaUserSecret } from "react-icons/fa";
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
    </nav>
  );
};

export default Navbar;
