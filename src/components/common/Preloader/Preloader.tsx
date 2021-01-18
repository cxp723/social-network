import React from "react";
import preloader from "../../../images/Preloader.gif";
import classes from "./preloader.module.css";

let Preloader: React.FC = () => {
  return (
    <div className={classes.preloader} data-testid="preloader">
      <img src={preloader} alt="preloader" className={classes.image} />
    </div>
  );
};

export default Preloader;
