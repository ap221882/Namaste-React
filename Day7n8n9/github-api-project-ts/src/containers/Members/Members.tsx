import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card, Loader } from "../../components";
import { getUserData } from "../../services";
import { IUser } from "../../types";
import classes from "./member.styles.module.css";

class Members extends Component<{}, { membersData: IUser[]; loader: boolean }> {
  state: { membersData: IUser[]; loader: boolean } = {
    membersData: [],
    loader: false,
  };

  componentDidMount() {
    (async () => {
      try {
        this.setState({ loader: true });
        const promisesResponseArray = await getUserData();
        this.setState({ membersData: promisesResponseArray });
      } catch (err) {
        alert(err);
      } finally {
        this.setState({ loader: false });
      }
    })();
  }

  render() {
    const isLoading = this.state.loader;
    if (isLoading) {
      return <Loader />;
    } else {
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
}

export default Members;
