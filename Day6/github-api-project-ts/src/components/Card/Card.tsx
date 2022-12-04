import React, { useState, useEffect } from "react";

import classes from "./card.styles.module.css";
import { MockUserData } from "../../services/mockData";
import {
  FaBuilding,
  FaLink,
  MdLocationOn,
  MdEmail,
  BsPeopleFill,
  RiUserFollowFill,
} from "../../assets/icons";

import { getUserData } from "../../services";
import { IUser } from "../../types";

type Props = {
  avengerId: string;
};

const Card = ({ avengerId }: Props) => {
  const [avenger, setAvenger] = useState<IUser>(
    MockUserData as unknown as IUser
  );

  const fetchUser = async (avengerId: string) => {
    try {
      const response = await getUserData(avengerId);

      setAvenger(response.data);
    } catch (error: any) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchUser(avengerId);
    console.log(avenger);
  }, [avengerId]);

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
