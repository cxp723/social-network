import classes from "./Header.module.css";
import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const Search: React.FC<RouteComponentProps> = (props) => {
  let [term, setTerm] = useState("");
  const searchUser = (key: React.KeyboardEvent<HTMLInputElement>) => {
    if (key.keyCode === 13 && term.length > 0) {
      props.history.push("/users?term=" + term);
      setTerm("");
    }
  };
  return (
    <div className={classes.searchBar}>
      <input
        value={term}
        placeholder="Search people here"
        onKeyDown={(e) => {
          searchUser(e);
        }}
        onChange={(e) => {
          setTerm(e.currentTarget.value);
        }}
        className={classes.searchField}
      />
      <div className={classes.iconContainer}>
        <Icon name="sistrix" className={classes.searchIcon} />
      </div>
      <div className={classes.searchOptions}>Some options</div>
    </div>
  );
};

export default withRouter(Search);
