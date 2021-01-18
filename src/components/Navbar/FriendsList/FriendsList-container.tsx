import React, { useEffect } from "react";
import { connect } from "react-redux";
import classes from "./FriendsList.module.css";
import Friend from "./Friend/Friend";
import { getFriends } from "../../../redux/users-reducer";
import { AppStateType } from "../../../redux/redux-store";
import { getRandomFriends } from "../../../redux/users-selectors";

const FriendsList: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getFriends();
  }, []);

  const friendsList = props.friends.map((friend) => (
    <Friend
      friendName={friend.name}
      photo={friend.photos.small ? friend.photos.small : ""}
      key={friend.id}
      id={friend.id}
    />
  ));

  return <div className={classes.friendsList}>{friendsList}</div>;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    friends: getRandomFriends(state),
  };
};
type MapStateToPropsType = ReturnType<typeof mapStateToProps>;
type MapDispatchToPropsType = { getFriends: () => void };
type PropsType = MapStateToPropsType & MapDispatchToPropsType;
const FriendsListContainer = connect(mapStateToProps, { getFriends })(
  FriendsList
);

export default FriendsListContainer;
