import React, { useEffect, useState } from "react";

import { Card } from "../../components";
import { getUserData } from "../../services";
import { IUser } from "../../types";
import classes from "./member.styles.module.css";

const Members = () => {
  const [membersData, setMembersData] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      const promisesResponseArray = await getUserData();
      setMembersData(promisesResponseArray);
    })();
  }, []);

  return (
    <section className={classes.member__container}>
      {membersData.map((member) => {
        return <Card key={member.id} avenger={member} />;
      })}
    </section>
  );
};

export default Members;
