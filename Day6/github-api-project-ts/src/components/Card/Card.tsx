import React from "react";

import classes from "./card.styles.module.css";
import { MockUserData } from "../../services/mockData";
import { FaBuilding, FaLink } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { RiUserFollowFill } from "react-icons/ri";

const Card = () => {
  return (
    <article className={classes.card__wrapper}>
      <header>
        <img src={MockUserData.avatar_url} alt='User' />
        <div>
          <h4>{MockUserData.name}</h4>
          <p>{`@${MockUserData.login}`}</p>
        </div>
        <a href='#' className={classes.card__wrapper__link}>
          Follow
        </a>
      </header>
      <p className={classes.bio}>{MockUserData.bio}</p>
      <div className={classes.followers}>
        <span>
          <BsPeopleFill className={classes.icon} />
          <span className={classes.follow__number}>
            {MockUserData.followers}
          </span>
          followers
        </span>
        <span>
          <RiUserFollowFill className={classes.icon} />
          <span className={classes.follow__number}>
            {MockUserData.following}
          </span>
          following
        </span>
      </div>
      <div className={classes.info}>
        <p>
          <span>
            <FaBuilding />
          </span>
          {MockUserData.company}
        </p>
        <p>
          <span>
            <MdLocationOn />
          </span>
          {MockUserData.location}
        </p>
        <p>
          <span>
            <FaLink />
          </span>
          {MockUserData?.blog}
        </p>
        {MockUserData?.email && (
          <p>
            <span>
              <MdEmail />
            </span>
            {MockUserData?.email}
          </p>
        )}
      </div>
    </article>
  );
};

export default Card;
