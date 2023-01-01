import React from "react";

import Heading from "../../containers/SearchGithubUsers/SearchGithubUsersUI/Heading";
import classes from "./selectByCity.styles.module.css";

type Props = {
  isDark: boolean;
};

const SelectHeading = ({ isDark }: Props) => {
  return (
    <div className={`${classes.select__header}`}>
      <Heading text="Select any city to search users" isDark={isDark} />
    </div>
  );
};

export default SelectHeading;
