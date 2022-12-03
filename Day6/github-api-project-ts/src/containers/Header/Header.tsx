import React from "react";

import classes from "./header.styles.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <section className={classes.banner__container}>
      <div className={classes.team__info}></div>
    </section>
  );
};

export default Header;
