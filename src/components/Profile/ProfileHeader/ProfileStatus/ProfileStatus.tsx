import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "../../Profile.module.css";

type PropsType = {
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
};
const ProfileStatus: React.FC<PropsType> = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const onEditMode = () => {
    setEditMode(true);
  };
  const offEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const changeStatus = (text: ChangeEvent<HTMLInputElement>) => {
    setStatus(text.currentTarget.value);
  };
  return (
    <div className={classes.status}>
      {editMode && (
        <input
          autoFocus={true}
          type="text"
          value={status}
          onKeyPress={(key) => {
            key.charCode === 13 && offEditMode();
          }}
          onBlur={() => {
            offEditMode();
          }}
          onChange={changeStatus}
        />
      )}
      {!editMode && (
        <span
          onClick={() => {
            props.isOwner && onEditMode();
          }}
        >
          {props.status || "No status yet"}
        </span>
      )}
    </div>
  );
};

export default ProfileStatus;
