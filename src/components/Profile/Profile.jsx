import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPosts-container';

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            {props.userId === props.me && <MyPostsContainer posts ={props.posts} addPost={props.addPost}/>}
        </div>
)}

export default Profile;