import React, { useEffect, useState } from "react";

import { Card } from "../../components";
import { getUserData } from "../../services";
import { IUser } from "../../types";
import classes from "./member.styles.module.css";
import { AvengersIds } from "./membersData";

const Members = () => {
  const [membersData, setMembersData] = useState<IUser[]>([]);

  useEffect(() => {
    const avengerData: IUser[] = [];
    const getData = () => {
      AvengersIds.forEach(async (avengerId) => {
        try {
          const response = await getUserData(avengerId.id);
          avengerData.push(response.data);
        } catch (err) {
          alert(err);
        }
      });
    };
    getData();
    console.log(avengerData, "avengerData");
    setMembersData([...avengerData, ...membersData]);
  }, []);

  console.log(membersData, "membersData");

  return (
    <section className={classes.member__container}>
      {membersData.map((member) => {
        return <Card key={member.id} avenger={member} />;
      })}
    </section>
  );
};

export default Members;
