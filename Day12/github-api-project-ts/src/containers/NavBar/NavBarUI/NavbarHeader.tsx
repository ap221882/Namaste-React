import React from "react";

import classes from "../Navbar.styles.module.css";
import { FaUserSecret } from "../../../assets/icons";
import { useAppSelector } from "../../../hooks";

const NavbarHeader = () => {
  const firstName = useAppSelector((state) => state.login.user?.firstName);
  return (
    <>
      <div className={classes.user__img__container}>
        <FaUserSecret />
      </div>
      <h6 className={classes.nav__heading}>
        Welcome, {firstName} to <span>Avengers Page!</span>
      </h6>
    </>
  );
};

export default NavbarHeader;
