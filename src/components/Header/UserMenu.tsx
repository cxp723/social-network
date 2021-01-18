import React from "react";
import { Dropdown, Image } from "semantic-ui-react";

import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

type PropsType = {
  photo: string | null;
  name: string | null;
  login: string;
  logout: () => void;
};
const UserMenu: React.FC<PropsType> = (props) => {
  const trigger = (
    <span className={classes.dropdownMenu}>
      <Image avatar src={props.photo} /> {props.name}
    </span>
  );

  const options = [
    {
      key: "user",
      text: (
        <span className={classes.menuTitle}>
          Signed in as <strong>{props.login}</strong>
        </span>
      ),
      disabled: true,
    },
    {
      key: "profile",
      icon: "user",
      content: (
        <NavLink className={classes.option} to="/profile">
          Account
        </NavLink>
      ),
    },
    {
      key: "sign-out",
      icon: "sign out",
      content: (
        <span className={classes.option} onClick={props.logout}>
          Log Out
        </span>
      ),
    },
  ];

  return (
    <Dropdown
      pointing="top right"
      trigger={trigger}
      floating
      options={options}
      className={classes.menuContainer}
    />
  );
};

export default UserMenu;
