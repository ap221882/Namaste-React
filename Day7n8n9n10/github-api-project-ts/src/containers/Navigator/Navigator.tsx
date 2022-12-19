import React from "react";

import { NavigationButton } from "../../components";
import classes from "./navigator.styles.module.css";

const Navigator = () => {
  return (
    <div className={classes.navigator__container}>
      <NavigationButton buttonText='Show Avengers Team' navigateTo='/members' />
      <NavigationButton
        buttonText='Search for Github Users'
        navigateTo='/search'
      />
    </div>
  );
};

export default Navigator;
