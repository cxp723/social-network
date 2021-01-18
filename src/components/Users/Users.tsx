import React from "react";
import classes from "./Users.module.css";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import { UsersConnectedPropsType } from "../Friends/Friends";

const Users: React.FC<UsersConnectedPropsType> = (props) => {
  let users = props.users.map((user) => (
    <User
      key={user.id}
      name={user.name}
      userId={user.id}
      photo={user.photos.large}
      followed={user.followed}
      follow={props.follow}
      unfollow={props.unfollow}
      followingUsers={props.followingUsers}
    />
  ));

  return props.isFetching || props.users.length === 0 ? (
    <Preloader />
  ) : (
    <div className={classes.usersPage}>
      <div className={classes.users}>{users}</div>

      {!!props.currentPage && (
        <Paginator
          term={props.term}
          itemsTotalCount={props.usersTotalCount}
          itemsOnPage={props.pageSize}
          onPageSelectCallback={props.onPageChanged}
          buttonsCount={props.paginationButtonsCount}
          page={props.currentPage}
        />
      )}
    </div>
  );
};

export default Users;
