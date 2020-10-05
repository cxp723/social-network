import React from 'react';
import classes from './ProfileInfo.module.css';
import user_logo from '../../../images/person-male.png';
import wallpaper from '../../../images/user-wallpaper.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus-hook';


const ProfileInfo = (props) => {
    let profile = props.profile;
    return (
        <div className={classes.profile}>
            <div><img src={profile.photos.large ? profile.photos.large : wallpaper} className={classes.main_picture} alt="user wallpaper"/></div>
            <div className={classes.info}>
                <img className={classes.ava} src={profile.photos.small ? profile.photos.small : user_logo} alt="preview" />
                <div className={classes.description}>
                    <h1>{profile.fullName}</h1>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    <p>Professional talents: {profile.lookingForAJobDescription}</p>
                    <p>About me: {profile.aboutMe}</p>
                    <p>Instagram: {profile.contacts.instagram}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;