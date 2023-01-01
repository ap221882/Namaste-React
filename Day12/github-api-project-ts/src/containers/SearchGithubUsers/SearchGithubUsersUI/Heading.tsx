import React from "react";

import classes from "../searchGithubUsers.styles.module.css";

type Props = {
  text: string;
  isDark: boolean;
};

const Heading = ({ isDark, text }: Props) => {
  return (
    <h3 className={`${isDark ? `${classes.dark_header}` : ""}`}>{text}</h3>
  );
};

export default Heading;
