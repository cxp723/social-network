import React from 'react';
import classes from './../FriendsList.module.css';
import { NavLink } from 'react-router-dom';

const Friend = ({photo, friendName, id, children}) => {
    return (
        <div className={classes.friend}>
            <NavLink to={'/profile/' + id } title={friendName}><img src={photo} className={classes.userLogo} alt=''/> {children}</NavLink>
        </div>
    )
}

export default Friend;