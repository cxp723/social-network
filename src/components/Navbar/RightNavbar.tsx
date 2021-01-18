import React from "react";
import classes from "./Navbar.module.css";
import FriendsListContainer from "./FriendsList/FriendsList-container";

const RightNavbar: React.FC = () => {
  return (
    <div className={classes.right + " " + classes.navbar}>
      <FriendsListContainer />
    </div>
  );
};

export default RightNavbar;
