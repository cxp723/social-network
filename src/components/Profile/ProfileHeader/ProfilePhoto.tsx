import React from "react";
import classes from "../Profile.module.css";
import { Icon } from "semantic-ui-react";
import user_logo from "../../../images/person-male.png";
import photoIcon from "../../../images/photo-icon.png";
import cn from "classnames";
import { ProfileType } from "../../../types/types";

type PropsType = {
  uploadingPhoto: boolean;
  profile: ProfileType;
  isOwner: boolean;
  savePhoto: (photo: File) => void;
};
const ProfilePhoto: React.FC<PropsType> = ({
  uploadingPhoto,
  profile,
  isOwner,
  savePhoto,
}) => {
  return (
    <>
      <img
        id="about"
        className={cn(classes.ava, uploadingPhoto && classes.bluredPhoto)}
        src={profile.photos.large || user_logo}
        alt="user avatar"
      />
      {isOwner && (
        <label>
          <Icon src={photoIcon} name="photo" className={classes.photoIcon} />
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                savePhoto(e.target.files[0]);
              }
            }}
            className={classes.invisibleInput}
          />
        </label>
      )}
    </>
  );
};
export default ProfilePhoto;
