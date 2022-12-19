import React from "react";

import classes from "../Navbar.styles.module.css";
import { FaUserSecret } from "../../../assets/icons";

type Props = {};

const NavbarHeader = (props: Props) => {
  return (
    <>
      <div className={classes.user__img__container}>
        <FaUserSecret />
      </div>
      <h6 className={classes.nav__heading}>
        Welcome to <span>Avengers Page!</span>
      </h6>
    </>
  );
};

export default NavbarHeader;
