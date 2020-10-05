import React from 'react';
import classes from './../FriendsList.module.css';

const friend = (props) => {
    return (
        <div className={classes.friend}>
            <div className={classes.userLogo}></div>
            <span className={classes.friendName}>{props.friendName}</span>
        </div>
    )
}

export default friend;