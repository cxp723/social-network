import React from 'react';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import classes from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';



const Profile = ({ profile, uploadingPhoto, savePhoto, status, updateStatus, userId, follow, unfollow, friends, getFriends, followingUsers, ...props }) => {
    return (
        <div className={classes.info}>
            <ProfileHeader uploadingPhoto={uploadingPhoto}
            isOwner={props.isOwner}
            savePhoto={savePhoto}
            profile={profile}
            userId={userId}
            status={status}
            updateStatus={updateStatus} 
            updatingProfileInProcess = {props.updatingProfileInProcess}
            follow={follow}
            unfollow={unfollow}
            followingUsers={followingUsers}
            friends={friends}/>

            <ProfileDescription profile={profile} {...props}/>
        </div>

    )
}


export default Profile;