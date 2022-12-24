import { Component } from "react";
import classes from "./card.styles.module.css";
import {
  FaBuilding,
  FaLink,
  MdLocationOn,
  MdEmail,
  BsPeopleFill,
  RiUserFollowFill,
} from "../../assets/icons";

import { IUser } from "../../types";
import { ThemeContext } from "../../contexts/ThemeContext";

type Props = {
  avenger: IUser;
};

class Card extends Component<Props> {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ mode }) => (
          <article
            className={`${classes.card__wrapper} ${
              mode === "dark" ? classes.dark : ""
            }`}
          >
            <header>
              <img src={this.props.avenger?.avatar_url} alt="User" />
              <div>
                <h4>{this.props.avenger?.name}</h4>
                <p>{`@${this.props.avenger?.login}`}</p>
              </div>
              <a
                className={`${classes.card__wrapper__link} ${
                  mode === "dark" ? classes.dark_button : ""
                }`}
                href={this.props.avenger?.html_url}
                target="_blank"
                rel="noreferrer"
              >
                Follow
              </a>
            </header>
            <p className={classes.bio}>{this.props.avenger?.bio}</p>
            {this.props.avenger?.followers && (
              <div className={classes.followers}>
                <span>
                  <BsPeopleFill className={classes.icon} />
                  <span className={classes.follow__number}>
                    {this.props.avenger?.followers}
                  </span>
                  followers
                </span>
                <span>
                  <RiUserFollowFill className={classes.icon} />
                  <span className={classes.follow__number}>
                    {this.props.avenger?.following}
                  </span>
                  following
                </span>
              </div>
            )}
            <div className={classes.info}>
              {this.props.avenger?.company && (
                <p>
                  <span>
                    <FaBuilding />
                  </span>
                  {this.props.avenger?.company}
                </p>
              )}
              {this.props.avenger?.location && (
                <p>
                  <span>
                    <MdLocationOn />
                  </span>
                  {this.props.avenger?.location}
                </p>
              )}
              {this.props.avenger?.blog && (
                <p>
                  <span>
                    <FaLink />
                  </span>
                  {this.props.avenger?.blog}
                </p>
              )}
              {this.props.avenger?.email && (
                <p>
                  <span>
                    <MdEmail />
                  </span>
                  {this.props.avenger?.email}
                </p>
              )}
            </div>
          </article>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Card;
