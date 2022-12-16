import React from "react";
import { Link } from "react-router-dom";

import classes from "./showButton.styles.module.css";

type Props = {
  buttonText: string;
};

const ShowButton = ({ buttonText }: Props) => {
  return (
    <Link to={`/members`}>
      <button className={classes.show__button}>{buttonText}</button>
    </Link>
  );
};

export default ShowButton;
