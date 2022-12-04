import React, { useEffect, useState } from "react";

import { Card } from "../../components";
import classes from "./member.styles.module.css";
import { AvengersIds } from "./membersData";

const Members = () => {
  return (
    <section className={classes.member__container}>
      {AvengersIds.map((avengerId) => {
        return <Card key={avengerId?.["@@uuid"]} avengerId={avengerId?.id} />;
      })}
    </section>
  );
};

export default Members;
