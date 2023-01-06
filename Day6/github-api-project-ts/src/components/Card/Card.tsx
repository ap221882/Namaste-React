import React from "react";

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

type Props = {
  avenger: IUser;
};

const Card = ({ avenger }: Props) => {
  return (
    <article className={classes.card__wrapper}>
      <header>
        <img src={avenger.avatar_url} alt='User' />
        <div>
          <h4>{avenger.name}</h4>
          <p>{`@${avenger.login}`}</p>
        </div>
        <a
          href={avenger.html_url}
          target='_blank'
          rel='noreferrer'
          className={classes.card__wrapper__link}
        >
          Follow
        </a>
      </header>
      <p className={classes.bio}>{avenger.bio}</p>
      <div className={classes.followers}>
        <span>
          <BsPeopleFill className={classes.icon} />
          <span className={classes.follow__number}>{avenger.followers}</span>
          followers
        </span>
        <span>
          <RiUserFollowFill className={classes.icon} />
          <span className={classes.follow__number}>{avenger.following}</span>
          following
        </span>
      </div>
      <div className={classes.info}>
        {avenger.company && (
          <p>
            <span>
              <FaBuilding />
            </span>
            {avenger.company}
          </p>
        )}
        {avenger.location && (
          <p>
            <span>
              <MdLocationOn />
            </span>
            {avenger.location}
          </p>
        )}
        {avenger.blog && (
          <p>
            <span>
              <FaLink />
            </span>
            {avenger?.blog}
          </p>
        )}
        {avenger?.email && (
          <p>
            <span>
              <MdEmail />
            </span>
            {avenger?.email}
          </p>
        )}
      </div>
    </article>
  );
};

export default Card;
