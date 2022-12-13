import React from "react";

import classes from "./header.styles.module.css";
import ClassBasedComponent1 from "../../miscellaneous/ParentClassBasedComponent";

type Props = {};

const Header = (props: Props) => {
  return (
    <section className={classes.banner__container}>
      <div className={classes.team__info}></div>
      {/* <ClassBasedComponent1 /> */}
    </section>
  );
};

export default Header;
