import React from "react";
import { Link } from "react-router-dom";

import { NavigationButton } from "../../components";
import classes from "./navigator.styles.module.css";

type Props = {};

const Navigator = (props: Props) => {
  return (
    <div className={classes.navigator__container}>
      <Link to={`/members`}>
        <NavigationButton buttonText='Show' />
      </Link>
      <Link to={`/search`}>
        <NavigationButton buttonText='Search' />
      </Link>
    </div>
  );
};

export default Navigator;
