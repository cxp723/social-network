import React from 'react';
import classes from '../Profile.module.css';
import ProfileMenuBar from './ProfileMenuBar';
import ProfileTitle from './ProfileTitle';

const ProfileHeader = (props) => {
    return (
        <div className={classes.profileHeader}>
            <ProfileTitle {...props}/>
            <ProfileMenuBar />
        </div>
    )
}
export default ProfileHeader;