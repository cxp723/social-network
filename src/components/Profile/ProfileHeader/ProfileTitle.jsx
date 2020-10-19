import React from 'react';
import classes from '../Profile.module.css';
import { wallpapers } from '../wallpapers';
import ProfileStatus from './ProfileStatus/ProfileStatus-hook';
import ProfilePhoto from './ProfilePhoto';

const ProfileTitle = ({isOwner, profile, status, updateStatus, ...restProps}) => {
    return (
        <>
            <img className={classes.wallpaper} src={wallpapers[Math.floor(Math.random() * 10)]} alt="" />
            <div className={classes.userPreview} >
                <ProfilePhoto profile={profile} isOwner={isOwner} {...restProps}/>
                <h1 className={classes.fullName}>{profile.fullName}</h1>
                <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner} />
            </div>
        </>
    )
}
export default ProfileTitle;