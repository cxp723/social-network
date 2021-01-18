import React from "react";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import classes from "../Profile.module.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { UserType } from "../../../types/types";

type PropsType = {
  isOwner: boolean;
  updatingProfileInProcess: (isInProcess: boolean) => void;
  friends: Array<UserType>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  followingUsers: Array<number>;
  userId: number;
};
const ProfileMenuBar: React.FC<PropsType> = ({
  isOwner,
  updatingProfileInProcess,
  friends,
  follow,
  unfollow,
  followingUsers,
  userId,
}) => {
  let followed = friends.some((friend) => friend.id === Number(userId));
  let [pushed, setPushed] = useState(false);
  let followingInProgress = false;
  followingInProgress = followingUsers.some((user) => user === userId)
    ? true
    : false;
  return (
    <div className={classes.profileMenuBar}>
      <Link to="about" smooth={true} offset={100} duration={500}>
        <div className={classes.profileMenuOption}>About</div>
      </Link>

      <Link to="posts" smooth={true} offset={100} duration={500}>
        <div className={classes.profileMenuOption}>Posts</div>
      </Link>

      <div className={classes.divider}></div>

      <Link to="friends" smooth={true} offset={-30} duration={500}>
        <div className={classes.profileMenuOption}>Friends</div>
      </Link>

      <Link to="contacts" smooth={true} offset={-30} duration={500}>
        <div className={classes.profileMenuOption}>Contacts</div>
      </Link>

      <div className={classes.actionButtons}>
        {isOwner ? (
          <Button
            size="huge"
            circular
            icon="pencil alternate"
            onClick={() => {
              updatingProfileInProcess(true);
            }}
            color="orange"
          />
        ) : followed ? (
          <>
            <NavLink to={"/dialogs/" + userId}>
              <Button
                disabled={!followed}
                size="huge"
                circular
                icon="paper plane outline"
                color="purple"
              />
            </NavLink>

            <Button
              size="huge"
              loading={followingInProgress}
              disabled={pushed}
              onClick={() => {
                unfollow(userId);
                setPushed(true);
              }}
              circular
              icon={pushed ? "check" : "remove user"}
              color="pink"
            />
          </>
        ) : (
          <>
            <Button
              disabled={!followed}
              size="huge"
              circular
              icon="paper plane outline"
              color="purple"
            />
            <Button
              size="huge"
              loading={followingInProgress}
              disabled={pushed}
              onClick={() => {
                follow(userId);
                setPushed(true);
              }}
              circular
              icon={pushed ? "check" : "add user"}
              color="green"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileMenuBar;
