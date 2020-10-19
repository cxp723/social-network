import React from 'react';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import classes from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';



const Profile = ({ profile, isOwner, updatingProfile, ...props }) => {
    return (
        <div className={classes.info}>
            <ProfileHeader uploadingPhoto={props.uploadingPhoto}
            isOwner={isOwner}
            savePhoto={props.savePhoto}
            profile={profile}
            status={props.status}
            updateStatus={props.updateStatus} />

            <ProfileDescription profile={profile}
            posts = {props.posts}
            addPost = {props.addPost}
            reset = {props.reset}
            isOwner={isOwner}
            updatingProfile={updatingProfile}
            updatingProfileInProcess={props.updatingProfileInProcess}
            updateProfile={props.updateProfile}
            updateFetching={props.updateFetching}/>
        </div>

    )
}


export default Profile;