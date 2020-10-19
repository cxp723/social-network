import React from 'react';
import classes from '../Profile.module.css';

const ProfileMenuBar = () => {
    return (
        <div className={classes.profileMenuBar}>
            <div className={classes.profileMenuOption}>About</div>
            <div className={classes.profileMenuOption}>Posts</div>
            <div className={classes.divider}></div>
            <div className={classes.profileMenuOption}>Friends</div>
            <div className={classes.profileMenuOption}>Contacts</div>
        </div>
    )
}
export default ProfileMenuBar