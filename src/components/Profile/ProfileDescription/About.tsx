import React from "react";
import classes from "./ProfileDescription.module.css";
import cn from "classnames";
import { ProfileType } from "../../../types/types";

type PropsType = { profile: ProfileType };

const About: React.FC<PropsType> = ({ profile }) => {
  return (
    <div className={cn(classes.descriptionBlock, classes.about)}>
      <h1 className={classes.title}>Information:</h1>
      {profile.lookingForAJob && (
        <p className={classes.text}>
          <span className={classes.smallTitle}>Professional skills: </span>
          {profile.lookingForAJobDescription}
        </p>
      )}
      <p className={classes.text}>
        <span className={classes.smallTitle}>About me:</span> {profile.aboutMe}
      </p>
    </div>
  );
};
export default About;
