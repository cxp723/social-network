import React from "react";
import { ProfileType, UserType } from "../../../types/types";
import classes from "../Profile.module.css";
import ProfileMenuBar from "./ProfileMenuBar";
import ProfileTitle from "./ProfileTitle";

type PropsType = {
  uploadingPhoto: boolean;
  isOwner: boolean;
  savePhoto: (photo: File) => void;
  profile: ProfileType;
  status: string;
  updateStatus: (status: string) => void;
  updatingProfileInProcess: (isInProcess: boolean) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  followingUsers: Array<number>;
  friends: Array<UserType>;
};
const ProfileHeader: React.FC<PropsType> = (props) => {
  return (
    <div className={classes.profileHeader}>
      <ProfileTitle {...props} />
      <ProfileMenuBar
        isOwner={props.isOwner}
        updatingProfileInProcess={props.updatingProfileInProcess}
        follow={props.follow}
        unfollow={props.unfollow}
        followingUsers={props.followingUsers}
        friends={props.friends}
        userId={props.profile.userId}
      />
    </div>
  );
};
export default ProfileHeader;
