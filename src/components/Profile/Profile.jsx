import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {
    return (
        <div className={classes.content}>

            <ProfileInfo 
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={props.isOwner}
            savePhoto={props.savePhoto}
            uploadingPhoto={props.uploadingPhoto}
            updatingProfile={props.updatingProfile}
            updatingProfileInProcess={props.updatingProfileInProcess}
            updateProfile={props.updateProfile}
            updateFetching={props.updateFetching}/>

            {/* Showing posts component if it's owners page */}
            {props.isOwner && !props.updatingProfile && <MyPosts photo={props.profile.photos.small} posts ={props.posts} addPost={props.addPost}/>}

        </div>
)}

export default Profile;