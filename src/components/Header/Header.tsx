import React from "react";
import classes from "./Header.module.css";
import { NavLink, RouteComponentProps } from "react-router-dom";
import UserMenu from "./UserMenu";
import Search from "./Search";
import {
  MapStateToPropsType,
  MapDispatchToPropsType,
} from "./Header-container";

type PropsType = MapStateToPropsType & MapDispatchToPropsType;
const Header: React.FC<PropsType & RouteComponentProps> = (props) => {
  const location = props.location.pathname.split("/")[1];
  return (
    <header className={classes.header + " " + classes.horizontalBar}>
      <div className={classes.logo}></div>
      <div className={classes.currentPageName}>
        {location.charAt(0).toUpperCase() +
          location.slice(1).toLowerCase() +
          " page"}
      </div>
      <Search />
      {props.login ? (
        <UserMenu
          photo={props.photo}
          name={props.name}
          logout={props.logout}
          login={props.login}
        />
      ) : (
        <NavLink className={classes.login} to="/login">
          Login
        </NavLink>
      )}
    </header>
  );
};

export default Header;
