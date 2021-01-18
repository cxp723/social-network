import React from "react";
import classes from "./../FriendsList.module.css";
import { NavLink } from "react-router-dom";
import defaultPhoto from "../../../../images/user-logo.png";

type PropsType = {
  photo: string | null;
  friendName?: string;
  id: number;
  children?: React.ReactNode;
};
const Friend: React.FC<PropsType> = ({ photo, friendName, id, children }) => {
  return (
    <div className={classes.friend}>
      <NavLink to={"/profile/" + id} title={friendName}>
        <img
          src={photo ? photo : defaultPhoto}
          className={classes.userLogo}
          alt=""
        />{" "}
        {children}
      </NavLink>
    </div>
  );
};

export default Friend;
