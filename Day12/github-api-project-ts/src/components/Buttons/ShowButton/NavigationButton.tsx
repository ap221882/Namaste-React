import React from "react";
import { Link } from "react-router-dom";

import classes from "./navigationButton.styles.module.css";

type Props = {
  buttonText: string;
  navigateTo: string;
};

const NavigationButton = ({ buttonText, navigateTo }: Props) => {
  return (
    <Link to={navigateTo}>
      <button className={classes.show__button}>{buttonText}</button>
    </Link>
  );
};

export default NavigationButton;
