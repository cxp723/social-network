import React from "react";
import classes from "../Profile.module.css";
import { wallpapers } from "../wallpapers";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfilePhoto from "./ProfilePhoto";
import { ProfileType, UserType } from "../../../types/types";

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
const ProfileTitle: React.FC<PropsType> = ({
  isOwner,
  profile,
  status,
  updateStatus,
  ...restProps
}) => {
  return (
    <>
      <img
        className={classes.wallpaper}
        src={wallpapers[profile.userId % 10]}
        alt=""
      />
      <div className={classes.userPreview}>
        <ProfilePhoto profile={profile} isOwner={isOwner} {...restProps} />
        <h1 className={classes.fullName}>{profile.fullName}</h1>
        <ProfileStatus
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
      </div>
    </>
  );
};
export default ProfileTitle;
