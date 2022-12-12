import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card } from "../../components";
import { getUserData } from "../../services";
import { IUser } from "../../types";
import classes from "./member.styles.module.css";

class Members extends Component<{}, { membersData: IUser[] }> {
  state: { membersData: IUser[] } = { membersData: [] };

  componentDidMount() {
    (async () => {
      const promisesResponseArray = await getUserData();
      this.setState({ membersData: promisesResponseArray });
    })();
  }

  render() {
    return (
      <section className={classes.member__container}>
        {this.state.membersData.map((member) => {
          return (
            <Link to={`/members/${member?.login}`}>
              <Card key={member.id} avenger={member} />;
            </Link>
          );
        })}
      </section>
    );
  }
}

export default Members;
