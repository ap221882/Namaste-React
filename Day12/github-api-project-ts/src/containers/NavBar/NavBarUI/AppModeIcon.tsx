import React, { ReactElement } from "react";

import classes from "../Navbar.styles.module.css";

type Props = {
  handler: () => void;
  children: ReactElement;
};

const AppModeIcon = ({ handler, children }: Props) => {
  return (
    <div className={classes.mode__container} onClick={handler}>
      {children}
    </div>
  );
};

export default AppModeIcon;
