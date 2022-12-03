import React from "react";

import { Card } from "../../components";
import classes from "./member.styles.module.css";

const Members = () => {
  return (
    <section className={classes.member__container}>
      <Card />
      <Card />
    </section>
  );
};

export default Members;
