import React from 'react';
import classes from '../Profile.module.css';
import ProfileMenuBar from './ProfileMenuBar';
import ProfileTitle from './ProfileTitle';

const ProfileHeader = (props) => {
    return (
        <div className={classes.profileHeader}>
            <ProfileTitle {...props}/>
            <ProfileMenuBar isOwner={props.isOwner} updatingProfileInProcess={props.updatingProfileInProcess}
            follow={props.follow}
            unfollow={props.unfollow}
            followingUsers={props.followingUsers}
            friends={props.friends}
            userId={props.userId}/>
        </div>
    )
}
export default ProfileHeader;