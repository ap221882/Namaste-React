import React from "react";

import classes from "./navigationButton.styles.module.css";

type Props = {
  buttonText: string;
};

const NavigationButton = ({ buttonText }: Props) => {
  return <button className={classes.show__button}>{buttonText}</button>;
};

export default NavigationButton;
