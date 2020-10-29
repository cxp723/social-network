import React from 'react';
import classes from './ProfileDescription.module.css';
import EditProfile from './EditProfile/EditProfile';
import About from './About';
import Friends from './Friends';
import Photos from './Photos';
import Contacts from './Contacts';
import Posts from './Posts/Posts';

const ProfileDescription = ({ profile, isOwner, updatingProfile, updatingProfileInProcess, 
    updateProfile, updateFetching, posts, addPost, deletePost, reset, likePost, userId }) => {
    
    return (
        !updatingProfile ?
            <div className={classes.description}>

                <div>
                    <About profile={profile}/>
                    <Friends />
                </div>
                <Posts isOwner ={isOwner} photo={profile.photos.small} reset = {reset} posts ={posts}
                addPost={addPost} deletePost={deletePost} name={profile.fullName} likePost={likePost}/>
                <div>
                    <Photos userId={userId}/>
                    <Contacts contacts={profile.contacts}/>
                </div>
            </div>
        :
            <EditProfile initialValues={profile} profile={profile} updatingProfile={updatingProfile} updateFetching={updateFetching}
            updatingProfileInProcess={updatingProfileInProcess} isOwner={isOwner} onSubmit={(formData) => {updateProfile(formData, profile.userId)}}/>
    )
}

export default ProfileDescription;