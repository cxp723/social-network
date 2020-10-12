import React from 'react';
import ProfileDescription from './ProfileDescription';
import classes from './ProfileInfo.module.css';
import ProfilePhoto from './ProfilePhoto';



const ProfileInfo = ({ profile, isOwner, updatingProfile, ...props }) => {
    return (
        <div className={classes.info}>
            <ProfilePhoto uploadingPhoto={props.uploadingPhoto} isOwner={isOwner} savePhoto={props.savePhoto} profile={profile} />
            <ProfileDescription profile={profile}
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={isOwner}
            updatingProfile={updatingProfile}
            updatingProfileInProcess={props.updatingProfileInProcess}
            updateProfile={props.updateProfile}
            updateFetching={props.updateFetching}/>
        </div>

    )
}


export default ProfileInfo;