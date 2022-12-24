import React, { ReactElement } from "react";

import classes from "../Navbar.styles.module.css";

type Props = {
  handler: () => void;
  children: ReactElement;
};

const AppModeIcon = ({ handler, children }: Props) => {
  return (
    <div className={`${classes.mode__container}`}>
      <div className={classes.dark_icon} onClick={handler}>
        {children}
      </div>
    </div>
  );
};

export default AppModeIcon;
